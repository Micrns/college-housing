const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;



const app = express();

//login
//yolanda12@uci.edu
//wiggles12

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    key: "userID",
    secret: "linkingnetwork",
    resave:false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 60 * 24,
    },
}));

//connecting mysql
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"123456",
    database: "userCredentials"
});



con.connect((err) => {
    if(err){throw err}
    console.log('mysql connected')
})




app.post("/register", (req, res) => {


    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {


        if (err){
            console.log(err)
        }
        let query = "INSERT INTO users (email, password) VALUES (?, ?)"
        con.query(
            query, 
            [username, hash], (err, result) => {console.log(err);});



    })

    // let query = "INSERT INTO users (email, password) VALUES (?, ?)"
    // con.query(
    //     query, 
    //     [username, password], (err, result) => {console.log(err);});
});


app.get("/login", (req, res) => {
    if (req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn:false})
    }
})

app.post('/login', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    con.query(
        "SELECT * FROM users WHERE email = ?;",
        username,
        (err, result) =>{
            

            if (err){
                res.send({err: err})
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {

                    if (response){
                        req.session.user = result

                        console.log(req.session.user);
                        res.send(result)
                    }else{
                        res.send({message:"wrong username/password"})
                    }
                })
            }else{
                res.send({message:"User doesn't exist"})
            }

        }
    )
})




// app.get('/showtable', (req, res) =>{
    
//     let sql = "SELECT * FROM users"

//     let query = con.query(sql, (err, result) => {
//         if(err){throw err;}
//         console.log(result);
//         res.send("Table shown")

//     });
// });


// app.get('/addinfo', (req, res) =>{
//     let post = ["fridaynight@avc.edu", "higgles12"]
//     let sql = "INSERT INTO users (email, password) VALUES (?, ?)"

//     let query = con.query(sql, post, (err, result) => {
//         if(err){throw err;}
//         console.log(result);
//         res.send("row added")

//     });
// });






app.listen(3001, ()=>{
    console.log("running server")
})


// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

// const app = express();


//app.use(express.json())


// app.get("/api", (req, res) => {
//     res.json({"users": ["userOne", "userTwo", "userThree"]})
// }) 

// app.listen(5000, () => {console.log("server started on port 5000" + " Hello")})