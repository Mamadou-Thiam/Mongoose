const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URI;
const Data = require("./data");

(async () => {
  try {
    await mongoose.connect(uri);
    console.log("connect reussi");
    // Créez de nombreux enregistrements avec model.create()

    const result = await Data.create(
      {
        nom: "Mamadou",
        âge: 22,
        favoriteFoods: ["mafe", "yassa"],
      },
      {
        nom: "Samba",
        âge: 23,
        favoriteFoods: ["thiep", "domada"],
      },
      {
        nom: "Djamil",
        âge: 22,
        favoriteFoods: ["soupKandia", "boulette"],
      }
    );
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
})();
// Utilisation model.find() pour rechercher votre base de données

(async () => {
  try {
    await mongoose.connect(uri);
    console.log("connect reussi");

    const result = await Data.find({ nom: { $ne: null } });

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
})();

// Utilisation de model.findOne() pour renvoyer un seul document correspondant à partir de votre base de données
(async () => {
  try {
    await mongoose.connect(uri);
    console.log("connect reussi");

    const result = await Data.findOne({ favoriteFoods: { $in: ["mafe"] } });

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
})();

//   Utilisation de model.findById() pour rechercher votre base de données par _id

(async () => {
  try {
    await mongoose.connect(uri);
    console.log("connect reussi");

    const result = await Data.findById("6553624a55229d42bb110ded");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
})();

(async () => {
  try {
    await mongoose.connect(uri);
    console.log("connect reussi");

    const result = await Data.findById("6553624a55229d42bb110ded");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
})();
// Effectuer de nouvelles mises à jour sur un document à l'aide de model.findOneAndUpdate()
(async () => {
  try {
    await mongoose.connect(uri);
    console.log("connect reussi");

    const result = await Data.findOneAndUpdate(
      { nom: "Mamadou" },
      { âge: 20 },
      { favoriteFoods: ["sombi", "lakh"] }
    );
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
})();

// utilsation de findByIdAndRemove

(async () => {
    try {
      await mongoose.connect(uri);
      console.log("connect reussi");
  
      const result = await Data.findByIdAndRemove("6553624a55229d42bb110ded");

      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  })();