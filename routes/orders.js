const r=require('express').Router();const db=require('../db');
r.post('/',(req,res)=>{const {customer_name,item_name,quantity}=req.body;
db.query('SELECT price FROM menu WHERE item_name=?',[item_name],(e,d)=>{
 if(e||!d.length)return res.status(400).json({error:'Item not found'});
 const total=d[0].price*quantity;
 db.query('INSERT INTO orders(customer_name,item_name,quantity,total) VALUES(?,?,?,?)',[customer_name,item_name,quantity,total],()=>res.json({message:'Order placed',total}));
});});
module.exports=r;