var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database:"ty",
  password: "root"
});

/* if you get error -> 
Client does not support authentication protocol requested by server; consider upgrading MySQL client 
    DO AS follow 
    open mysql workbetch and run following 2 query
    1)ALTER USER 'user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';
            ex: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
    2)flush privileges;
 */

con.connect((err)=> {
  if (err) throw err;
  console.log("Connected!");
  con.query("select * from emp ",  (err, result) =>{
    if (err) throw err;
    console.log(result);
  });
});