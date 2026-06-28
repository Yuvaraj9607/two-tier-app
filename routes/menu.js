const r=require('express').Router();const db=require('../db');
r.get('/',(_,res)=>db.query('SELECT * FROM menu',(e,d)=>res.json(e||d)));
r.post('/',(req,res)=>{const {item_name,price}=req.body;db.query('INSERT INTO menu(item_name,price) VALUES(?,?)',[item_name,price],(e)=>res.json(e||{message:'Added'}));});
module.exports=r;