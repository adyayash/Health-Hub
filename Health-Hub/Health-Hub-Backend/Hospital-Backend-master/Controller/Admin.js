const express = require("express");
const { addDoctor, updateDoctor, getDoctors, getDoctor, deleteDoctor, addReceptionist, updateReceptionist, getReceptionists, deleteReceptionist, addAdmin } = require("../Services/Admin");
const router = express.Router();


router.post('/addAdmin', async (req, res) => {
    try {
        const response = await addAdmin(req.body.email, req.body.password, req.body.name)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Admin controller", "error": error })
    }
})


router.post('/addDoctor', async (req, res) => {
    try {
        const response = await addDoctor(req.body.email, req.body.password, req.body.name, req.body.field)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Admin controller", "error": error })
    }
})


router.put('/updateDoctor', async (req, res) => {
    try {
        const response = await updateDoctor(req.body, req.body.userId)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Admin controller", "error": error })
    }
})


router.get('/getDoctors', async (req, res) => {
    try {
        const response = await getDoctors()

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Admin controller", "error": error })
    }
})

router.get('/getDoctor', async (req, res) => {
    try {

        const response = await getDoctor(req.query.Did)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Admin controller", "error": error })
    }
})

router.delete('/deleteDoctor', async (req, res) => {
    try {
        const response = await deleteDoctor(req.body.id)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Admin controller", "error": error })
    }
})

router.post('/addReceptionist', async (req, res) => {
    try {
        const response = await addReceptionist(req.body.email, req.body.password, req.body.name)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Admin controller", "error": error })
    }
})

router.put('/updateReceptionist', async (req, res) => {
    try {
        const response = await updateReceptionist(req.body, req.body.userId)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Admin controller", "error": error })
    }
})

router.get('/getReceptionists', async (req, res) => {
    try {
        const response = await getReceptionists()

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Admin controller", "error": error })
    }
})

router.delete('/deleteReceptionist', async (req, res) => {
    try {
        const response = await deleteReceptionist(req.body.id)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Admin controller", "error": error })
    }
})


module.exports = router;