const { DocSlots, Visit, sequelize, Slots, Doctor, User, Patient } = require("../Models/")
const { Op } = require("sequelize");
const moment = require("moment")

const getVisit = async (docId) => {
    const response = {}
    try {

        const data = await Visit.findAll({ where: { docId, status: {[Op.ne]: "CANCELLED BY DOCTOR"} },
                                            include:[
                                                {model: User, as: "user", include: { model: Patient, as: "patient" }},
                                                {model:Doctor, as:"doc"},
                                                {model:Slots,as:"slot"}
                                                    ] 
                                            })

        if (!data) {
            response.status = 500
            response.data = { status: false, message: "Internal Server Error." }
            return response;
        }
        else {
            response.status = 200
            response.data = { status: true, message: "Success.", data }
            return response;
        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}


const getAvailableSlot = async (docId, date) => {
    const response = {}
    try {

        let data = await DocSlots.findAll({ where: { docId }, attributes: ["slotId"], raw: true })
        
        date = new Date(date)
       // let todayDate = moment((new Date(date))).format('YYYY-MM-DD');
      
        let data2 = await Visit.findAll({
            where: { 
                [Op.and]:
                    [
                        sequelize.where(sequelize.fn('date', sequelize.col('date')), '=', date),
                        { docId }
                    ]
            },
            attributes: ["slotId"],
            raw: true
        }) 
        
         

        console.log("data2",data2)
        console.log("data",data)
      
        let dataArr =[], data2Arr=[];

        for (let i = 0; i < data.length; i++) {
            dataArr[i] = data[i].slotId
        }

        for (let i = 0; i < data2.length; i++) {
            data2Arr[i] = data2[i].slotId
        }
        
        dataArr = dataArr.filter(val => !data2Arr.includes(val));
     
        
        const finalData = await Slots.findAll({ where: { id: dataArr }, raw: true })
     
        if (!data) {
            response.status = 500
            response.data = { status: false, message: "Internal Server Error." }
            return response;
        }
        else {
            response.status = 200
            response.data = { status: true, message: "Success.", finalData }
            return response;
        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}

module.exports = { getVisit, getAvailableSlot }