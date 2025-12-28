const mongoose = require("mongoose");

const dbconnect = () => {
  mongoose.connect('mongodb+srv://denishadaslani:denishadaslani07@cluster0.nkrc2tj.mongodb.net/movie')
    .then(() => {
      console.log('database is connected');
    })
    .catch((err) => {
      console.log(err);
    })
}
module.exports = dbconnect;