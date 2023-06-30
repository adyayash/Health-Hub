const express = require("express");
const { addPatient, updatePatient, deletePatient } = require("../Services/Receptionist");
const router = express.Router();

router.post('/addPatient', async (req, res) => {
    try {
        const response = await addPatient(req.body.email, req.body.password, req.body.name, req.body.medicalHistory, req.body.alergies, req.body.emergencyContact)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Receptionist controller", "error": error })
    }
})

router.put('/updatePatient', async (req, res) => {
    try {
        const response = await updatePatient(req.body,req.body.userId)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Receptionist controller", "error": error })
    }
})


router.delete('/deletePatient', async (req, res) => {
    try {
        const response = await deletePatient(req.body.id)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Receptionist controller", "error": error })
    }
})

module.exports = router;