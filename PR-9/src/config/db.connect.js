const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.connect('mongodb+srv://denishadaslani:denishadaslani07@cluster0.nkrc2tj.mongodb.net/role-api')
        .then(() => {
            console.log("database conected successfully");
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = dbconnect;