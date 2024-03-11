const express=require("express");
require("dotenv").config();
const operations = require("./db/dbconnection");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());

//operations.getusers().then(res => console.log(res));




app.post("/register/user", (req, res) => {
    console.log(req.body);
    operations.addusers(req.body).then(response => res.send("done!")).catch(err => res.send("not done"));


})
app.post("/login/user", (req, res) => {

    operations.checkuserlogin(req.body).then(response => { console.log(response, "---->response"); res.send(true) }).catch((err) => console.log(err));
})

app.listen(process.env.PORT,(req,res)=>[
    console.log("server is listening on port ",process.env.PORT)
])
             