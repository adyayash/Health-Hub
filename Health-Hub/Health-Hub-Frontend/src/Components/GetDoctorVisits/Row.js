

import React from 'react'
import { updateVisit } from "../../API/Visit"

import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CallIcon from '@mui/icons-material/Call';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
function Row(props) {

    const updateVisitCallback = async (response) => {
        response = await response.json()
        console.log("UPDATE VISIT RESPONSE", response)
        props.reloadFunc()


    }
    return (

        <>
            <div className="card m4 scard" style={{ width: "92%", margin: "50px auto" }}>
                <div className="card-body scardbody" style={{ padding: "0px" }}>
                    <div >
                        <div className="flexadminsec1">
                            <h3># {props.index + 1}</h3><br />
                            <div className='grant-card-column'>
                                <div className='grant-row'>
                                    <div className='card-heading'><PersonIcon />&nbsp; Patient </div>
                                    {props.element.user.patient.name}
                                </div>

                                <div className='grant-row'>
                                    <div className='card-heading'><DomainVerificationIcon />&nbsp; Status </div>
                                    {props.element.status}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><DateRangeIcon />&nbsp; Date </div>
                                    {(props.element.date).split("T")[0]}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><EmailIcon />&nbsp; Timing </div>
                                    {props.element.slot.timing}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><LocalHospitalIcon />&nbsp; Medical History </div>
                                    {props.element.user.patient.medicalHistory}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><VaccinesIcon />&nbsp; Alergies </div>
                                    {props.element.user.patient.alergies}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><CallIcon />&nbsp; Emergency Contact </div>
                                    {props.element.user.patient.emergencyContact}
                                </div>


                            </div>
                        </div>


                    </div>

                    <div className="text-center">
                        <button type="button" onClick={() => updateVisit({ id: props.element.id, status: "COMPLETED" }, updateVisitCallback)} class="btn btn-success">COMPLETED</button>
                       &nbsp;&nbsp; <button type="button" onClick={() => updateVisit({ id: props.element.id, status: "CANCELLED BY DOCTOR" }, updateVisitCallback)} class="btn btn-danger">CANCEL</button>

                    </div>
                </div></div>
          
        </>

    )
}

export default Row