const express = require("express")
const app = express()
const db = require('./connect')
const cors = require('cors')
const cookieParser = require('cookie-parser')
db.connect()



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  app.use(express.json());
  app.use(
    cors({origin: "http://localhost:3000"})
  );
  app.use(cookieParser())
app.use(cors({credentials: true, origin: true}))

app.use('/auth', require('./Routes/auth'))
app.use('/car', require('./Routes/car'))
app.listen(8800);