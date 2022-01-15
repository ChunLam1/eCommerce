require("dotenv").config();
require("../../config/mongodb");
const UserModel = require("../models/User.model");

const user = [
    {
     email:"Faaa@aaaa",
     password:"tutrouveraspas",
     role:"user",
     address:"23 rue picouli"   
    },
    {
     email:"Bloooo@ooo",
     password:"tutrouveraspashehe",
     role:"user",
     address:"23 rue starfoula"       
    }
];

(async function insertUser() {
    try {
      await UserModel.deleteMany();
      const inserted = await UserModel.insertMany(user);
      console.log(`seed User done : ${inserted.length} documents inserted !`);
    } catch (err) {
      console.error(err);
    }
  })();
  