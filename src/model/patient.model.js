const {model, Schema} = require('mongoose');

const patientSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : false
    },
    place : {
        type : String,
        default : false
    },
    blood : {
        type : String,
        required : false
    },
    height : {
        type : 'Number',
        default : false
    },
    weight : {
        type : 'Number',
        default : false
    }
})

const PatientModel = model("Patient", patientSchema);
module.exports =  PatientModel