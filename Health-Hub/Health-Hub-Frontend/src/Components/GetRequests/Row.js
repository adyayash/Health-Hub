import React from 'react'
import { Link } from 'react-router-dom'

import DatasetIcon from '@mui/icons-material/Dataset';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CallIcon from '@mui/icons-material/Call';
import {updateRequests} from "../../API/Visit"

function Row(props) {
   
    console.log("PROPS", props.element)

    const updateRequestsCallback = async (response) => {
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
                                    <div className='card-heading'><PersonIcon />&nbsp; Patient Name </div>
                                    {props.element['requser.patient.name']}
                                </div>

                                <div className='grant-row'>
                                    <div className='card-heading'><DatasetIcon />&nbsp; Subject of Visit </div>
                                    {props.element.subject}
                                </div>
                                
                                <div className='grant-row'>
                                    <div className='card-heading'><EmailIcon />&nbsp; Email ID </div>
                                    {props.element['requser.email']}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><LocalHospitalIcon />&nbsp; Medical History </div>
                                    {props.element['requser.patient.medicalHistory']}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><VaccinesIcon />&nbsp; Alergies </div>
                                    {props.element['requser.patient.alergies']}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><CallIcon />&nbsp; Emergency Contact </div>
                                    {props.element['requser.patient.emergencyContact']}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><CallIcon />&nbsp; Status </div>
                                    {props.element.status}
                                      
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="text-center">

                    {props.element.status == "SCHEDULED" ? <button type="button" class="btn btn-primary disabled">Schedule Visit</button> : <Link to={`/form/addVisit/${props.element['userId']}:${props.element.id}`}>
                            <button type="button" class="btn btn-primary">Schedule Visit</button>
                    </Link> }
                    &nbsp;&nbsp;

                    <button type="button" onClick={() => updateRequests({ id: props.element.id, status: "DECLINED" }, updateRequestsCallback)} class="btn btn-danger">Decline</button>

                    </div>
                </div></div>
         
        </>
    )
}

export default Row