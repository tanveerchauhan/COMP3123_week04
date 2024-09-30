const express = require('express');
const app = express();
const port = 3000;

// Endpoint: GET /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// Endpoint: GET /user with query parameters
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Tanveer';
    const lastname = req.query.lastname || 'Chauhan';
    res.json({ firstname, lastname });
});

// Endpoint: POST /user/:firstname/:lastname with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
