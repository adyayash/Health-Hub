const express = require("express");
const { updateVisit, addRequest, addVisit, deleteRequest, getRequests, updateRequests,reAssignVisit, getDoctorCancelledVisit, getAlternateDoctorForCancelledVisit } = require("../Services/Visit");
const router = express.Router();


router.post('/addVisit', async (req, res) => {
    try {
        const response = await addVisit(req.body.date, req.body.userId, req.body.docId, req.body.slotId)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Visit controller", "error": error })
    }
})

router.put('/updateVisit', async (req, res) => {
    try {
        const response = await updateVisit(req.body, req.body.id)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Visit controller", "error": error })
    }
})

router.post('/addRequest', async (req, res) => {
    try {
        const response = await addRequest(req.body.userId, req.body.subject)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Visit controller", "error": error })
    }
})

router.get('/getRequests', async (req, res) => {
    try {
        const response = await getRequests()

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Visit controller", "error": error })
    }
})

router.put('/updateRequests', async (req, res) => {
    try {
        const response = await updateRequests(req.body,req.body.id)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Visit controller", "error": error })
    }
})


router.delete('/deleteRequest', async (req, res) => {
    try {
        const response = await deleteRequest(req.body.Vid)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Visit controller", "error": error })
    }
})



router.put('/reAssignVisit', async (req, res) => {
    try {
        const response = await reAssignVisit(req.body.visitId, req.body.docId)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Visit controller", "error": error })
    }
})

router.get('/getDoctorCancelledVisit', async (req, res) => {
    try {
        const response = await getDoctorCancelledVisit()

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Visit controller", "error": error })
    }
})

router.get('/getAlternateDoctorForCancelledVisit', async (req, res) => {
    try {
        const response = await getAlternateDoctorForCancelledVisit(req.query.vId)

        res.status(response.status).json(response.data)

    } catch (error) {
        res.status(500).json({ "message": error.message, "status": "false", "source": "Visit controller", "error": error })
    }
})

module.exports = router;

