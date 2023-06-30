const express = require("express");
const { addSlot, getSlots, deleteSlot,addDocSlot,deleteDocSlot } = require("../Services/Slots");
const router = express.Router();

router.post('/addSlot', async (req, res) => {
    try {
        const response = await addSlot(req.body.timing)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Auth controller", "error": error })
    }
})

router.get('/getSlots', async (req, res) => {
    try {
        const response = await getSlots()

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Auth controller", "error": error })
    }
})

router.delete('/deleteSlot', async (req, res) => {
    try {
        const response = await deleteSlot(req.body.id)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Auth controller", "error": error })
    }
})

router.post('/addDocSlot', async (req, res) => {
    try {
        const response = await addDocSlot(req.body.slotId,req.body.docId)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Auth controller", "error": error })
    }
})


router.delete('/deleteDocSlot', async (req, res) => {
    try {
        const response = await deleteDocSlot(req.body.id)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Auth controller", "error": error })
    }
})

module.exports = router;