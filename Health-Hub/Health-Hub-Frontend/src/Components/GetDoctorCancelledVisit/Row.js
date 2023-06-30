import React from 'react'
import { Link } from 'react-router-dom'

import DatasetIcon from '@mui/icons-material/Dataset';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CallIcon from '@mui/icons-material/Call';

function Row(props) {

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
                                    {props.element["user.patient.name"]}
                                </div>

                                <div className='grant-row'>
                                    <div className='card-heading'><DatasetIcon />&nbsp; Doctor Previously Assigned </div>
                                    {props.element["doc.name"]}
                                </div>

                                <div className='grant-row'>
                                    <div className='card-heading'><EmailIcon />&nbsp; Email ID </div>
                                    {props.element["user.email"]}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><LocalHospitalIcon />&nbsp; Medical History </div>
                                    {props.element["user.patient.medicalHistory"]}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><VaccinesIcon />&nbsp; Alergies </div>
                                    {props.element["user.patient.alergies"]}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><CallIcon />&nbsp; Emergency Contact </div>
                                    {props.element["user.patient.emergencyContact"]}
                                </div>


                            </div>
                        </div>


                    </div>

                    <div className="text-center">
                        <Link to={`/form/reScheduleVisit/${props.element['userId']}:${props.element['docId']}:${props.element['id']}`}>
                            <button type="button" class="btn btn-primary">Reschedule Visit</button>
                        </Link>
                    </div>
                </div></div>
           
        </>

    )
}

export default Row