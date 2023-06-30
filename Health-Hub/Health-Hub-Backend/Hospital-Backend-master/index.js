console.log("Backend Has Started");
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./Models');
const Admin = require('./Controller/Admin')
const Auth = require('./Controller/Auth')
const Doctor = require('./Controller/Doctor')
const Patient = require('./Controller/Patient')
const Receptionist = require('./Controller/Receptionist')
const Visit = require('./Controller/Visit')
const Slots = require("./Controller/Slots")

//dotenv config
dotenv.config();

const port = process.env.PORT||3000;
 


const app = express();
app.use(express.static('public'))
//bodyparser Config
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//cors 
app.use(cors());

app.get('/', (req, res)=>
{
    res.send("Hello world");
})

//routes


app.use('/admin', Admin);
app.use('/auth', Auth);
app.use('/doctor', Doctor);
app.use('/patient', Patient);
app.use('/receptionist', Receptionist);
app.use('/visit', Visit);
app.use('/slots', Slots);


//db.sequelize.sync().then((req)=>
//{
//    app.listen(port,()=>
//    {
//        console.log(`Server Connected To Port: ${port}`)
//    })
//})


db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then(function (results) {

    db.sequelize.sync({alter : true}).then((req) => {
        app.listen(port, () => {
            console.log(`Server Connected To Port: ${port}`)
        })
    });
});