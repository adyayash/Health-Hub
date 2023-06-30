import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import GetRequests from "../Components/GetRequests/GetRequests"
import GetDoctorCancelledVisit from "../Components/GetDoctorCancelledVisit/GetDoctorCancelledVisit"
function Receptionist() {
  const [currentTable, setCurrentTable] = useState()

  useEffect(() => {
   
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1553775282-20af80779df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"

  })
  const switchTable = (action) => {
    console.log("ACTION", action)
    setCurrentTable(action)
  }

  return (
    <div>
      <Navbar options={[{ name: "SIGN UP PATIENT", endpoint: "/form/addPatient/0" }]} />
      {currentTable ?
        null
        :
        <>
          <div className='pageTitle' style={{ fontSize: "clamp(1rem, 10vw, 10rem)", color: "white", fontWeight:"1000", textShadow:"4px 2px 5px black" }}>Reception Panel </div>
          <hr style={{ borderColor: "white", borderBlockWidth: "8px", opacity: 1 }} />

        </>}
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" style={{color: "#fff", fontSize:"30px", fontWeight:"1000", textShadow:"4px 2px 5px black"}} href="#" onClick={() => { return switchTable("getRequests") }}>Visit Requests</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" style={{color: "#fff", fontSize:"30px", fontWeight:"1000", textShadow:"4px 2px 5px black"}} href="#" onClick={() => { return switchTable("getDoctorCancelledVisit") }}>Reschedule Visits</a>
        </li>
      </ul>

      

      <br/>
      {currentTable == "getRequests" ? <GetRequests/> : null}
      {currentTable == "getDoctorCancelledVisit" ? <GetDoctorCancelledVisit/> : null}
    

    </div>
  )
}

export default Receptionist