

import React from 'react'
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
function Row(props) {

    console.log("PROPS", props)
    const updateVisitCallback = async (response) => {
        response = await response.json()
        console.log("UPDATE VISIT RESPONSE", response)

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
                                    <div className='card-heading'><PersonIcon />&nbsp; Name </div>
                                    {props.element.name}
                                </div>

                                <div className='grant-row'>
                                    <div className='card-heading'><DateRangeIcon />&nbsp; Joined On </div>
                                    {(props.element.createdAt).split("T")[0]} 
                                </div>
                                <div className='grant-row'>
                                    <div className='card-heading'><EmailIcon />&nbsp; Email </div>
                                    {props.element.receptionistuser.email}
                                </div>


                            </div>
                        </div>


                    </div>

                    <div className="text-center">
                        <button type="button" onClick={() => props.reloadFunc()} class="btn btn-danger">BLOCK</button>
                    </div>
                </div></div>
         

        </>



    )
}

export default Row