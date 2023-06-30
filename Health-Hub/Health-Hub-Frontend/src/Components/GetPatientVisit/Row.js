import React, { useState } from 'react'
import { updateVisit } from "../../API/Visit"
import { useNavigate } from 'react-router-dom'

import DatasetIcon from '@mui/icons-material/Dataset';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';

function Row(props) {
    const nav = useNavigate();
    const [update, setUpdate] = useState(false)
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
                                    <div className='card-heading'><PersonIcon />&nbsp; Doctor </div>
                                    {props.element.doc.name}
                                </div>

                                <div className='grant-row'>
                                    <div className='card-heading'><DatasetIcon />&nbsp; Status </div>
                                    {props.element.status}
                                </div>

                                <div className='grant-row'>
                                    <div className='card-heading'><EmailIcon />&nbsp; Date </div>
                                    {(props.element.date).split("T")[0]}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><LocalHospitalIcon />&nbsp; Timing </div>
                                    {props.element.slot.timing}
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><VaccinesIcon />&nbsp; Field Expert </div>
                                    {props.element.doc.field}
                                </div>



                            </div>
                        </div>


                    </div>

                    <div className="text-center">
                        { props.element.status == "SCHEDULED" || props.element.status == "RESCHEDULED"?
                         <button type="button" onClick={() => updateVisit({ id: props.element.id, status: "CANCELLED BY PATIENT" }, updateVisitCallback)}  class="btn btn-danger">CANCEL</button>
                        :
                        <button type="button" onClick={() => updateVisit({ id: props.element.id, status: "CANCELLED BY PATIENT" }, updateVisitCallback)}  class="btn btn-danger disabled">CANCEL</button>
                    }
                        
                    </div>
                </div></div>

           
        </>


    )
}

export default Row