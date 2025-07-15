const express=require('express');
const app=express();
const port =3000;

//Creating a routing
app.get('/',(req,res)=>{
    res.send("This Home page or Main page");
});

//Login page
app.get('/login',(req,res)=>{
    res.send("This is a login page")
});

//Signin page
app.get('/signin',(req,res)=>{
    res.send("This is a Sign in page");
})
//Server running
app.listen(port,()=>{
    console.log(`Server is running on the port http://localhost:${port}`)
});