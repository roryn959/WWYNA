const { MongoClient } = require("mongodb");
const ObjectID = require('mongodb').ObjectId;
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;
const client = new MongoClient(uri);
const database = client.db('wwyna');
const users = database.collection('users');
const people = database.collection('people');

const createSHA256Hash = (s) => {
    const hash = crypto.createHash('sha256');
    hash.update(s);
    return hash.digest('hex');
}

const authenticate = async (username, password) => {
    const query = { username: username };
    const user = await users.findOne(query);
    if (user.password=password){
        return user.userID;
    }
    return null;
}

app.use('/usernameexists', async (req, res) => {
    try {
        const query = { username: req.body.username };
        const user = await users.findOne(query);
        
        if (user){
            res.send('true');
        } else {
            res.send('false');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('A username retrieval error occurred');
    }
    res.end();
});

app.use('/register', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const hashedPassword = createSHA256Hash(password);
        const hashedUsername = createSHA256Hash(username);

        const newUser = {
            'username': username,
            'password': hashedPassword,
            'userID': hashedUsername,
        };
        const result = await users.insertOne(newUser);
        res.send(result.insertedId);
    } catch (err) {
        res.status(500).send('A document insertion error occurred...');
        console.log(err);
    }
    res.end();
})

app.use('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const hashedPassword = createSHA256Hash(password);

    // Missing username or password
    if (!username || !password) {
        res.status(400).send('Both username and password must be present in request.');
        res.end();
        return;
    }
    // If incorrect username or password
    const userID = await authenticate(username, hashedPassword);
    if (!!!userID){
        res.status(401).send('Invalid username or password.');
        res.end();
        return;
    }
    // Correctly authenticated -- return user_id as token
    res.send({token: userID, username: username});
    res.end();
});

app.use('/getPeople', async (req, res) => {
    try {
        const userID = req.body.token;
        const query = { creator: userID };
        const result = people.find(query);
        const data = [];
        for await (const doc of result){
            data.push(doc);
        }
        res.send(data);
    }
    catch (err) {
        res.status(500).send('A data retrieval error occurred...');
    }
    res.end();
})

app.use('/getPerson', async (req, res) => {
    try {
        const personID = new ObjectID(req.body.personID);
        const query = { _id: personID };
        const result = await people.findOne(query);
        res.send(result);
    } catch (err) {
        res.status(500).send(err.body);
        console.log(err);
    }
    res.end();
});

app.use('/editPerson', async (req, res) => {
    try {
        const personID = new ObjectID(req.body.id);
        const newPerson = req.body.person;
        const query = { _id: personID };
        const result = await people.findOneAndReplace(query, newPerson);
        if (!!!result){
            throw Error('Person ID not found');
        }
    } catch (err) {
        res.status(500).send(err.body);
        console.log(err);
    }
    res.end();
});

app.use('/deletePerson', async (req, res) => {
    try {
        const personID = new ObjectID(req.body.id);
        const query = { _id: personID };
        const result = await people.deleteOne(query);
        if (!!!result){
            throw Error('Deletion failed');
        }
    } catch (err) {
        res.status(500).send(err.body);
        console.log(err);
    }
    res.end();
});

app.use('/createPerson', async (req, res) => {
    try {
        const person = req.body.person;
        const result = await people.insertOne(person);
        if (!!!result){
            throw Error('Insertion failed');
        }
    } catch (err) {
        res.status(500).send(err.body);
        console.log(err);
    }
    res.end();
})

app.listen(process.env.REACT_APP_SERVER_PORT, () => console.log('Server running on', process.env.REACT_APP_SERVER_PORT));