import express from "express";
const app = express();
const port = 3000;

const data = [
  {
    name: "Huzaima",
    email: "huzaima@gmail.com",
  },
  {
    name: "Ahrar",
    email: "ahrar@gmail.com",
  },
];

app.get("/",(req,res)=>{
    res.send(data);
});

app.listen(port,()=>{
  console.log(`Example app listening on port ${port}`)
})  