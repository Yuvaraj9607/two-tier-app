const mysql=require('mysql2');
module.exports=mysql.createPool({
 host:process.env.DB_HOST||'localhost',
 user:process.env.DB_USER||'root',
 password:process.env.DB_PASSWORD||'root123',
 database:process.env.DB_NAME||'restaurant'
});