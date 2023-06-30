const { User, Doctor, Receptionist, Admin } = require("../Models/")
const bcrypt = require("bcrypt")
//service to add Bank Details
const addDoctor = async (email, password, name, field) => {
    const response = {}
    try {

        const hashpass = await bcrypt.hash(password, 10);

        const data = await User.create({ email, password: hashpass, userType: "DOCTOR" })


        if (!data) {
            response.status = 500
            response.data = { status: false, message: "Internal Server Error. Doctor Not Added." }
            return response;
        }
        else {
            await Doctor.create({ name, field, userId: data.dataValues.id })
            response.status = 200
            response.data = { status: true, message: "Doctor Added Successfully.", data }
            return response;
        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}

const updateDoctor = async (newData, userId) => {
    const response = {}
    try {

        const data = await Doctor.update(newData, { where: { userId } })

        if (!data) {
            response.status = 500
            response.data = { status: false, message: "Internal Server Error. Doctor Not Updated." }
            return response;
        }
        else {
            response.status = 200
            response.data = { status: true, message: "Doctor updated Successfully.", data }
            return response;
        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}

const getDoctors = async () => {
    const response = {}
    try {

        const data = await Doctor.findAll({
            include: {
                model: User,
                as: "docuser"
            }})

        if (!data) {
            response.status = 500
            response.data = { status: false, message: "Internal Server Error. Doctor not fetched." }
            return response;
        }
        else {
            response.status = 200
            response.data = { status: true, message: "Doctor fetched Successfully.", data }
            return response;
        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}

const getDoctor = async (id) => {
    const response = {}
    try {

        const data = await Doctor.findAll({ where: { id } })

        if (!data) {
            response.status = 500
            response.data = { status: false, message: "Internal Server Error." }
            return response;
        }
        else {
            response.status = 200
            response.data = { status: true, message: "Doctor Fetched Successfully.", data }
            return response;
        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}

const deleteDoctor = async (id) => {
    const response = {}
    try {

        const data = await Doctor.destroy({ where: { id } })

        if (!data) {
            response.status = 500
            response.data = { status: false, message: "Internal Server Error. Doctor not deleted." }
            return response;
        }
        else {
            response.status = 200
            response.data = { status: true, message: "Doctor deleted.", data }
            return response;
        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}

const addReceptionist = async (email, password, name) => {
    const response = {}
    try {

        const hashpass = await bcrypt.hash(password, 10);

        const data = await User.create({ email, password: hashpass, userType: "RECEPTIONIST" })

        if (!data) {
            response.status = 500
            response.data = { status: false, message: "Internal Server Error. Receptionist Not Added." }
            return response;
        }
        else {
            await Receptionist.create({ name, userId: data.dataValues.id })
            response.status = 200
            response.data = { status: true, message: "Receptionist Added Successfully.", data }
            return response;
        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}


const updateReceptionist = async (newData, userId) => {
    const response = {}
    try {

        const data = await Receptionist.update(newData, { where: { userId } })

        if (!data) {
            response.status = 500
            response.data = { status: false, message: "Internal Server Error. Receptionist Not updated." }
            return response;
        }
        else {
            response.status = 200
            response.data = { status: true, message: "Receptionist updated Successfully.", data }
            return response;
        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}


const getReceptionists = async () => {
    const response = {}
    try {

        const data = await Receptionist.findAll( {include: { model: User, as: "receptionistuser" }})

        if (!data) {
            response.status = 500
            response.data = { status: false, message: "Internal Server Error." }
            return response;
        }
        else {
            response.status = 200
            response.data = { status: true, message: "Fetched.", data }
            return response;
        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}


const deleteReceptionist = async (id) => {
    const response = {}
    try {

        const data = await Receptionist.destroy({ where: { id } })

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


const addAdmin = async (email, password, name) => {
    const response = {}
    try {

        const hashpass = await bcrypt.hash(password, 10);

        const data = await User.create({ email, password: hashpass, userType: "ADMIN" })


        if (!data) {
            response.status = 500
            response.data = { status: false, message: "Internal Server Error. Admin Not Added." }
            return response;
        }
        else {
            await Admin.create({ name, userId: data.dataValues.id })
            response.status = 200
            response.data = { status: true, message: "Admin Added Successfully.", data }
            return response;
        }
    } catch (err) {
        console.log(err);
        response.status = 400
        response.data = { status: false, message: "Error " + err.message }
        return response;
    }
}


module.exports = { addDoctor, updateDoctor, getDoctors, getDoctor, deleteDoctor, addReceptionist, updateReceptionist, getReceptionists, deleteReceptionist, addAdmin }