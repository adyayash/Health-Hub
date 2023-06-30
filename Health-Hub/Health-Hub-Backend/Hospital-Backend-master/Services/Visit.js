const { Request, Visit, User, Patient, Doctor, Slots } = require("../Models/")
const { Op } = require("sequelize");
const addRequest = async (userId, subject) => {
    const response = {}
    try {

        const data = await Request.create({ userId, subject, status: "PENDING" })

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

const updateRequests = async (newData, reqId) => {
    const response = {}
    try {

        const data = await Request.update(newData, { where: { id: reqId } })

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

const updateVisit = async (newData, id) => {
    const response = {}
    try {

        const data = await Visit.update(newData, { where: { id } })

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

const addVisit = async (date, userId, docId, slotId) => {
    const response = {}
    try {

        const data = await Visit.create({ date, userId, docId, slotId, status: "SCHEDULED" })

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

const deleteRequest = async (id) => {
    const response = {}
    try {

        const data = await Request.destroy({ where: { id } })

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


const getRequests = async () => {
    const response = {}
    try {

        const data = await Request.findAll({ where: { status: { [Op.ne]: "DECLINED" } }, include: { model: User, as: "requser", include: { model: Patient, as: "patient" } }, raw: true })

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

const reAssignVisit = async (visitId, docId) => {
    const response = {}
    try {

        const data = await Visit.update({ docId }, { where: { id: visitId } })

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

const getDoctorCancelledVisit = async () => {
    const response = {}
    try {

        const data = await Visit.findAll({ where: { status: "CANCELLED BY DOCTOR" }, include: [{ model: User, as: "user", include: { model: Patient, as: "patient" } }, { model: Doctor, as: "doc" }, { model: Slots, as: "slot" }], raw: true })

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

const getAlternateDoctorForCancelledVisit = async (vId) => {
    const response = {}
    try {

        const visitData = await Visit.findAll({ where: { id: vId }, raw: true })

        const data = await Doctor.findAll({ where: { id: { [Op.ne]: visitData[0].docId } } })

        console.log(visitData)
        console.log(data)
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

module.exports = { updateVisit, addRequest, addVisit, deleteRequest, getRequests, updateRequests, reAssignVisit, getDoctorCancelledVisit, getAlternateDoctorForCancelledVisit }