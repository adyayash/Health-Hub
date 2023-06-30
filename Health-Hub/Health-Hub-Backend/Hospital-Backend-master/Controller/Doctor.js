const express = require("express");
const { updateVisit, getVisit,getAvailableSlot } = require("../Services/Doctor");
const router = express.Router();


router.get('/getVisit', async (req, res) => {
    try {
        const response = await getVisit(req.query.Did)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Doctor controller", "error": error })
    }
})

router.get('/getAvailableSlot', async (req, res) => {
    try {
        const response = await getAvailableSlot(req.query.docId, req.query.date)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Doctor controller", "error": error })
    }
})

module.exports = router;