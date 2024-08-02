const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

DB_URL = 'http://localhost:8000/logins';

const authenticate = async (username, password) => {
    const res = await fetch(DB_URL);
    const json = await res.json();
    
    for (cred of json){
        if (cred.username===username){
            return cred.password===password;
        }
    }
    return false;
}

app.use('/login', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

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

app.listen(8080, () => console.log('Authentication server running on http://localhost:8080/login'));