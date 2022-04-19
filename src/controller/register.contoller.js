const PatientModel = require('../model/patient.model');

const addPatient = async(req, resp) => {
   // console.log(req.body)
   const{name, dob} = req.body;
   const foundPatient = await PatientModel.findOne({name})
   try{
    if(foundPatient){
        console.log("Patient already exist with the name "+name)
        return resp.send({message : "Patient already exist with the name "+name})
    }
    const patient = new PatientModel(req.body)
    const addedPatient = patient.save();
    resp.send({message : "Successfully added"})
   }catch(err){
       console.log(err)
   }
}

module.exports = {
    addPatient
}