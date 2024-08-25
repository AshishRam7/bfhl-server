const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/bfhl', (req, res) => {
    const getresponse = {
        "operation_code": 1
    };
    res.status(200).json(getresponse);
});

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const res1 = req.body;
    let Numbers = [];
    let lowercase = [];
    let alphabets = [];

    data.forEach(item => {
        if (!isNaN(item)) {
            const number = parseInt(item);
            Numbers.push(number);
        }
        else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
            if (/^[a-z]$/.test(item)) {
                lowercase.push(item);
            }
        }
    });

    let highest_lowercase_alphabet = null;
    if (lowercase.length > 0) {
        lowercase.sort();
        highest_lowercase_alphabet = lowercase[lowercase.length - 1];
    }

    const response = {
        is_success: true,
        user_id: "ashish_ram_j_a_15062004",
        email: "ashishram.ja15@gmail.com",
        roll_number: "21BCE6193",
        numbers: Numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highest_lowercase_alphabet
    };

    res.json(response);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log('Server Started at 3001');
});
