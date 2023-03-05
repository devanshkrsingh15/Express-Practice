const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://kumardevansh22:devsun99@cluster0.t67aaxn.mongodb.net/mernapp');
    console.log(
      `Mongo DB connected : ${conn.connection.host}`.bgCyan.underline
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};


module.exports = connectDB