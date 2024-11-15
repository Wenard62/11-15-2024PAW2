
const mongoose = require ("mongoose");
const connectDB = async() =>{
    try {
        await mongoose.connect(
            // "mongodb+srv://jovanbarracudayusa2226240108:jovanbarracudayusa2226240108@cluster0.zbvki.mongodb.net/tugasmdp?retryWrites=true&w=majority&appName=Cluster0"
            "mongodb://localhost:27017/tugasmdp"
        );
    console.log("Mongodb connected");
    }
    catch (error){
        console.error("mongodb connection error", error);
        process.exit(1);
    };
};
module.exports = connectDB;