import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import GetDoctors from '../Components/GetDoctors/GetDoctors'
import GetReceptionists from '../Components/GetReceptionists/GetReceptionists'

function Admin() {

  const [currentTable, setCurrentTable] = useState()

  useEffect(() => {
   
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=90 )"

  })

  const switchTable = (action) => {
    console.log("ACTION", action)
    setCurrentTable(action)
  }

  return (
    <div >

      <Navbar options={[{ name: "SIGN UP DOCTOR", endpoint: "/form/addDoctor/0" },
      { name: "SIGN UP RECEPTIONIST", endpoint: "/form/addReceptionist/0" },
      { name: "ADD SLOT", endpoint: "/form/addSlot/0" }]}
      />

      {currentTable ?
        null
        :
        <>
          <div className='pageTitle' style={{ fontSize: "clamp(1rem, 10vw, 10rem)", color: "white", fontWeight:"1000", textShadow:"4px 2px 5px black" }}>Admin Panel </div>
          <hr style={{ borderColor: "white", borderBlockWidth: "8px", opacity: 1 }} />

        </>}
      <ul style={{}} class="nav justify-content-center">

        <li class="nav-item">
          <a class="nav-link" style={{color: "#fff", fontSize:"30px", fontWeight:"1000", textShadow:"4px 2px 5px black"}} href="#" onClick={() => { return switchTable("getDoctors") }}>Doctors</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" style={{color: "#fff", fontSize:"30px", fontWeight:"1000", textShadow:"4px 2px 5px black"}} href="#" onClick={() => { return switchTable("getReceptionists") }}>Receptionists</a>
        </li>
      </ul>



        

      <br />
      {currentTable == "getDoctors" ? <GetDoctors /> : null}
      {currentTable == "getReceptionists" ? <GetReceptionists /> : null}
    </div>
  )
}

export default Admin