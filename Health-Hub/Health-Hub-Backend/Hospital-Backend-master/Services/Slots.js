const { Slots,DocSlots } = require("../Models/")
const bcrypt = require("bcrypt")

const addSlot = async (timing) => {
    const response = {}
    try {

        const data = await Slots.create({ timing })


        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}

const getSlots = async () => {
    const response = {}
    try {

        const data = await Slots.findAll({ raw: true })


        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}

const deleteSlot = async (id) => {
    const response = {}
    try {

        const data = await Slots.destroy({ where: { id } })


        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}



const addDocSlot = async (slotId,docId) => {
    const response = {}
    try {

        const data = await DocSlots.create({ slotId,docId })


        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}



const deleteDocSlot = async (id) => {
    const response = {}
    try {

        const data = await DocSlots.destroy({ where: { id } })


        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}

module.exports = { addSlot, getSlots, deleteSlot,addDocSlot,deleteDocSlot }