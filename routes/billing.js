const r=require('express').Router();const db=require('../db');
r.get('/',(_,res)=>db.query('SELECT * FROM orders',(e,d)=>res.json(e||d)));
module.exports=r;