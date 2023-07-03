const express= require('express')
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(bodyParser());


app.get('/add',(req, res)=>{
  let sum = req.body.num1 + req.body.num2;
  // console.log(req.body.sum1);
  res.send(`sum is ${sum}`)
})

app.get('/mul',(req, res)=>{
    let sum = req.body.num1 * req.body.num2;
    // console.log(req.body.sum1);
    res.send(`mul is ${sum}`)
  })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })