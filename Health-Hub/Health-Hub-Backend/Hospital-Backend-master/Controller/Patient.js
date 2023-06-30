const express = require("express");
const { getVisit, cancelVisit } = require("../Services/Patient");
const router = express.Router();

router.get('/getVisit', async (req, res) => {
    try {
        const response = await getVisit(req.query.userId)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Patient controller", "error": error })
    }
})


module.exports = router;