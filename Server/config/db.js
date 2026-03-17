const mongoose = require('mongoose')
const DB_URL = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        mongoose.connection.on('connected' ,()=>{
            console.log("The Database is connected successfully 📊");
        })

        await mongoose.connect(DB_URL);
    } catch (error) {
        
    }
}

module.exports =  connectDB;