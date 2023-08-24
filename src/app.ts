//  import * as express from 'express';
 import express, { Request, Response, NextFunction } from 'express';

 const app:express.Application=express();
 app.listen(5000,()=>{
    console.log("server is starting at port 5000");

 })


 const user={firstname:'abc',lastname:'xyz'};

//  app.get('/login',(req,res)=>{
//     res.status(200).send({message:"success"});
//  });

app.get('/login',(req,res)=>{
    const data = [{name:'Ajay Verma'}];
    res.send(data);
  });



 app.post('/signup');//when somthing want to insert resources
 app.patch('/update/password');//patch-->only some detail of user will update 
 app.put('/');//put-->all detail of user will replace
 app.delete('');//when user to delete 