require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//================ routes and models ========================
const BloodRequest = require("./models/bloodReq");
const BloodReqRoute = require("./routes/bloodReq");

const BloodBank = require("./models/bloodBanks");
const BloodBankRoute = require("./routes/bloodBanks");

const ShowBloodBanksRoute = require("./routes/showBloodBanks");

const BloodCampRoute = require("./routes/bloodCamps");

const ShowBloodBanksDirRoute = require("./routes/showBBdir");
const ShowCitiesRoute = require("./routes/showCities");
//===========================================================
mongoose.connect("mongodb+srv://ekanshlohiya98:Bloodline%40she98@cluster0.9k4kzet.mongodb.net/bloodlineDB");

app.use("/a",BloodReqRoute);
app.use("/b",BloodBankRoute);
app.use("/c",ShowBloodBanksRoute);
app.use("/d",BloodCampRoute);
app.use("/e",ShowBloodBanksDirRoute);
app.use("/f",ShowCitiesRoute);

app.listen(8080, function() {
    console.log("Server started on port 8080");
  });
