const mongoose = require ('mongoose')
const FakultasSchema = mongoose.Schema({
    nama : {
        type : String,
        required : true,
    },
    singkatan : {
        type : String,
        required : true,
        trim : true,
    },
    createdAt :{
        type: Date,
        default: Date.now,
    },
});

const Fakultas = mongoose.model("Fakultas",FakultasSchema);
module.exports = Fakultas;