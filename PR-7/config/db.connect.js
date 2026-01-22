const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.connect('mongodb+srv://denishadaslani:denishadaslani07@cluster0.nkrc2tj.mongodb.net/blog')
        .then(() => {
            console.log("database is connected successfully");
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = dbconnect;

