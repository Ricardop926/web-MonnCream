const express = require('express');
const bodyParser = require("body-parser");
const repository = require("./repository");
const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// const mysql = require('mysql');
// const cx = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'',
//   database:'mooncream'
// });

// cx.connect((err) =>{
//   if(err){
//     console.log('error al conectar la base de datos');
//   }
//   else {
//     console.log('se conecto a la base de datos')
//   }

// })

// app.get("/",(req,res) => {
//   res.send(productos);
// });

// app.get('/verdatos', (req,res)=> {
//   cx.connect(()=>{
//     cx.query('SELECT * FROM producto',(err,result)=>{
//       res.send(result);
//     })
//   })
// })
app.get("/api/productos",async(req, res) => {
  res.send(await repository.read());
})

app.use("/",express.static('front-end'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
