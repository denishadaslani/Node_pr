const mongoose = require('mongoose');

const dbconnect = () =>{
    mongoose.connect('mongodb+srv://denishadaslani:denishadaslani07@cluster0.nkrc2tj.mongodb.net/admin-panel')
    .then(()=>{
        console.log('database is connected');
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports = dbconnect;