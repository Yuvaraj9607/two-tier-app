const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/menu',require('./routes/menu'));
app.use('/orders',require('./routes/orders'));
app.use('/billing',require('./routes/billing'));
app.listen(3000,()=>console.log('Running on 3000'));