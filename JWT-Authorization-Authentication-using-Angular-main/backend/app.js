const express = require('express')
const app = express();
const route = express.Router();
require('dotenv').config();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const auth = require('./services/authentication');


const port = 3000;
app.use(bodyParser.json());
app.use(cors());

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const users = [
        { id: 1, email: 'prijain@gmail.com' , password: '1234' }
    ];

    function generateAccessToken(userId) {
        return jwt.sign( userId, process.env.Access_token, { expiresIn: '1m' }); // Set expiration time (e.g., 30 minutes)
    }

    if ((!email || !password) || (email!= users[0].email || password!= users[0].password)) {
        return res.status(400).json({ message: 'Wrong email or password' });
    }
    else{

        const obj = {email: users[0].email, password: users[0].password};
        const token = generateAccessToken(obj);
        // console.log(token);
        res.status(200).json({ message: 'Login successful', token: token });
    }
});

app.get('/profile', auth.authenticateToken,  (req,res)=>{
    res.status(200).json({ message: 'Login successful'});
})

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html'); // Or any default content type
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)} );

