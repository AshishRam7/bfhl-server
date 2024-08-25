const express = require('express');
const bodyParser = require('body-parser');

const app1 = express()
app1.use(bodyParser.json())

app1.post('/data-submit', (req,res) => {
    const inp = req.body.data;
    //console.log(req.body.data);
    let alpha = []
    let mul3 = []
    let others = []

    inp.forEach(item => {
        if(!isNaN(item)){
            if(item % 3 === 0){
                mul3.push(item)
            }
            else{
                others.push(item)
            }
        }
        else if(/^[a-zA-Z]$/.test(item)){
            alpha.push(item)
        }
    });

    const response = {
        is_success: 'true',
        name: 'AshishRamJA',
        email: 'ashishram.ja15@gmail.com',
        Multiplesof3: mul3,
        others: others,
        Alphabets: alpha
    };

    res.json(response)
});

const PORT = 3001;
app1.listen(PORT, () => {
    console.log('Server started at PORT 3001');
});
