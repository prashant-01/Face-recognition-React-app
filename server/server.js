const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use( cors({
    origin : "http://localhost:1234"  ,
    credentials : true 
}) );
app.use( express.json() );


const userRoute = require('./routes/userRoute');

app.use('/api/v1/auth' , userRoute);

const dbConnect = require('./config/database')
dbConnect();

// default route
app.get("/" , ( req , res ) => {
    res.send("Hello friends")
})

app.listen( process.env.PORT , () => {
    console.log("server running on " , process.env.PORT);
} )