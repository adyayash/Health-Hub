import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import GetPatientVisit from "../Components/GetPatientVisit/GetPatientVisit"
import { Fade } from 'react-slideshow-image';
import BackgroundSlider from 'react-background-slider'
import 'react-slideshow-image/dist/styles.css'




function Patient() {
  const [currentTable, setCurrentTable] = useState()

  useEffect(() => {
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1597764690523-15bea4c581c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)"

  })



  const switchTable = (action) => {
    console.log("ACTION", action)
    setCurrentTable(action)
  }

  return (
    <div >
      
     

      <Navbar options={[{ name: "REQUEST VISIT", endpoint: "/form/addRequest/0" }]} />
      {currentTable ?
        null
        :
        <>
          <div className='pageTitle' style={{ fontSize: "clamp(1rem, 10vw, 10rem)", color: "white", fontWeight:"1000", textShadow:"4px 2px 5px black" }}>Hey There...! </div>
          <hr style={{ borderColor: "white", borderBlockWidth: "8px", opacity: 1 }} />

        </>}

      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" style={{color: "#fff", fontSize:"30px", fontWeight:"1000", textShadow:"4px 2px 5px black"}} href="#" onClick={() => { return switchTable("getVisits") }}>Visit Requests</a>
        </li>

       
      </ul>

      
      {currentTable == "getVisits" ? <GetPatientVisit /> : null}

    </div >
  )
}

export default Patient