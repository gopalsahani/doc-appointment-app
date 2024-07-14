const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
//const router = require('./routes/userRoutes');

dotenv.config();
//rest object
const app = express();

//midlewares
app.use(moragan("dev"));
app.use(express.json());
// connection mongodb
connectDB();
//routes

app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/Adminroutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
/*
app.get("/",(req,res)=>{
    res.status(200);
    res.send({
        message:"server running",
    });

});  */

const port = process.env.PORT || 8080;

app.listen(port, (req, res) => {
  console.log(
    `server is running in ${process.env.NODE_MODE}mode  on port no ${process.env.PORT}`
      .bgCyan.white
  );
});
