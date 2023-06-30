import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmailIcon from '@mui/icons-material/Email';

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
                  <div className='card-heading'><PersonIcon />&nbsp; Name </div>
                  {props.element.name}
                </div>

                <div className='grant-row'>
                  <div className='card-heading'><LocalHospitalIcon />&nbsp; Field </div>
                  {props.element.field}
                </div>
                <div className='grant-row'>
                  <div className='card-heading'><EmailIcon />&nbsp; Email </div>
                  {props.element.docuser.email}
                </div>


              </div>
            </div>


          </div>

          <div className="text-center">
            <Link to={`/form/addDocSlot/${props.element.id}`}>
              <button type="button" class="btn btn-primary">Assign Slot</button>
            </Link>
          </div>
        </div></div>

    </>


  )
}

export default Row