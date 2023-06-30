const {Patient, User} = require("../Models/")
const bcrypt = require("bcrypt")
const addPatient = async (email, password,name, medicalHistory,alergies,emergencyContact)=>{
    const response={}
    try{
        const hashpass = await bcrypt.hash(password, 10);

        const data = await User.create({ email, password: hashpass, userType: "PATIENT" })


        if(!data)  
        {
            response.status=500
            response.data={status: false, message: "Internal Server Error."}
            return response;
        }
        else
        {
            await Patient.create({ name, medicalHistory,alergies,emergencyContact, userId: data.dataValues.id })

            response.status=200
            response.data={status: true, message: "Success.", data}
            return response;
        }
    }catch(err){ 
        console.log(err);
        response.status=400
        response.data={status: false, message: "Error "+err.message}
        return response;
    }
}

const updatePatient = async (newData,userId)=>{
    const response={}
    try{
          
        const data = await Patient.update(newData,{ where:{userId} })

        if(!data)  
        {
            response.status=500
            response.data={status: false, message: "Internal Server Error."}
            return response;
        }
        else
        {
            response.status=200
            response.data={status: true, message: "Success.", data}
            return response;
        }
    }catch(err){ 
        console.log(err);
        response.status=400
        response.data={status: false, message: "Error "+err.message}
        return response;
    }
}

const deletePatient = async (id)=>{
    const response={}
    try{
          
        const data = await Patient.destroy({ where:{id} })

        if(!data)  
        {
            response.status=500
            response.data={status: false, message: "Internal Server Error."}
            return response;
        }
        else
        {
            response.status=200
            response.data={status: true, message: "Success.", data}
            return response;
        }
    }catch(err){ 
        console.log(err);
        response.status=400
        response.data={status: false, message: "Error "+err.message}
        return response;
    }
}

module.exports = {addPatient, updatePatient, deletePatient}