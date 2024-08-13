const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const app = express();

app.use(cors());
app.use(express.json());

DB_URL = 'http://localhost:8000/users';

const createSHA256Hash = (s) => {
    const hash = crypto.createHash('sha256');
    hash.update(s);
    return hash.digest('hex');
}

const authenticate = async (username, password) => {
    const res = await fetch(DB_URL);
    const json = await res.json();
    
    for (user of json){
        if (user.username===username){
            return user.password===password;
        }
    }
    return false;
}

app.use('/usernameexists', async (req, res) => {
    let username = req.body.username;
    const obj = await fetch(DB_URL);
    const json = await obj.json();
    for (user of json){
        if (user.username===username){
            res.send('true');
            res.end();
            return;
        }
    }
    res.send('false');
    res.end();
});

app.use('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const register = await fetch(
        DB_URL,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                'username': username,
                'password': password,
            })
        }
    );
    if (!register.ok){
        res.status(register.status).send('Registration failed...');
    } else {
        res.send();
    }
    res.end();
})

app.use('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Missing username or password
    if (!username || !password) {
        res.status(400).send('Both username and password must be present in request.');
        res.end();
        return;
    }
    // If incorrect username or password
    const auth = await authenticate(username, password);
    if (!auth){
        res.status(401).send('Invalid username or password.');
        res.end();
        return;
    }
    // Correctly authenticated -- return username as token
    res.send(username);
    res.end();
});

app.listen(8080, () => console.log('Server running on http://localhost:8080/'));