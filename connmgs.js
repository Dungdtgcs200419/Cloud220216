// mongodb+srv://dungdoan:<password>@cluster0.f86rv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const username = "dungdoan";
const password = "Dung300105";
const dbname = "ATNShop";

const uri =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.f86rv.mongodb.net/" +
  dbname +
  "?retryWrites=true&w=majority";
// getting-started.js
const mongoose = require("mongoose");
const User = require("./models/user")
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri);


  //New code put here
  const Usr = new User(
    {
        Name: "MillerD",
        Pwd: "123",
        Email: "milelr@gmail.com",
    Age: "20",
    Role: "Manager",
    });

    await Usr.save();
    console.log("Created new User");
}
