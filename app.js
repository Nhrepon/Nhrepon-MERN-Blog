const express=require('express');
const app=new express();
const router=require('./src/routes/api');

// Import security middleware
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xss=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors');
//const cookieParser=require('cookie-parser');
const path=require('path');




// Implement security middleware
//app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());



// Json body parser
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb", extended:true}));




// Implement rate limiter
const limiter=rateLimit({windowMs:15*60*1000, max:1000});
app.use(limiter);




// Database configuration
const mongoose=require('mongoose');

//const url="mongodb://localhost:27017/Nhrepon";
//const option={user:"", pass:"", autoIndex:true};

const url="mongodb+srv://Repon:<password>@cluster0.nhslprh.mongodb.net/Nhrepon";
const option={user:"Repon", pass:"Repon7248", autoIndex:true};

mongoose.connect(url, option).then(()=>{
    console.log("database connected successfully");
}).catch((error)=>{
    console.log(error);
});




app.set('etag', false);


app.use("/api",router);



// Connect front end
app.use(express.static('client/dist'));
app.get("*", (req, res)=>{
    //res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
    res.sendFile(path.resolve(__dirname, 'client','dist', 'index.html'));
});




module.exports = app;
