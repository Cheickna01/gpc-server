const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((rep) => console.log("Connection à la base de données reussie!!!"))
    .catch((e) => console.log("Connexion échouée", e));
};

module.exports = connection;
