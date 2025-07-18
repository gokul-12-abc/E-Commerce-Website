const  express= require('express');
const bodyParser = require('body-parser');
const mysql=require('mysql2');
const path= require('path');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

//Mysql connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gokulsuresh@123',
    database: 'ecommerce'
});

db.connect(err => {
    if(err) throw err;

    console.log('Connected to database');
});

//serve signup.html
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'signup.html'));
});


//Handle Signup form POST

app.post('/signup',(req,res) => {
    const {username,email,phone,spassword}= req.body;
    console.log('Form Data:', { username, email, phone, spassword }); // Add this

    const sql ='INSERT INTO signupdata(username,email,phone,spassword) VALUES  (?,?,?,?)';
    db.query(sql,[username,email,phone,spassword],(err,result) => {
        if(err) {
            console.error('Database insert error: ',err);
            return res.status(500).send('Error saving user')
        }
        res.send('Signup successfull');
    })
})
//Start server
app.listen(5000,() =>{
    console.log(`Server is running in port http://localhost:5000`);
})