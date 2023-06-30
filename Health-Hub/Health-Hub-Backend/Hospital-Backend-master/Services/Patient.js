const {Visit, User, Patient, Slots, Doctor} = require("../Models/")

const getVisit = async (userId)=>{
    const response={}
    try{
          
        const data = await Visit.findAll({ where:{userId}, include:[{model: User, as: "user", include: { model: Patient, as: "patient" }},{model:Doctor, as:"doc"},{model:Slots,as:"slot"}] })

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

module.exports = {getVisit}