require('dotenv').config();
const jwt = require('jsonwebtoken');

function authenticateToken (req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null){
        return res.sendStatus(401);
    }
    console.log (token);
    // console.log(process.env.Access_token);

    jwt.verify(token, process.env.Access_token, (err, results)=>{
        if(err){
           // console.log("Here it is!!");
            return res.sendStatus(403);
        }
        res.locals = results;
        next();
    })
}

module.exports = {authenticateToken: authenticateToken}