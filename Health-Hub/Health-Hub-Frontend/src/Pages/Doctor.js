import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import GetDoctorVisits from '../Components/GetDoctorVisits/GetDoctorVisits'

function Doctor() {

  const [currentTable, setCurrentTable] = useState()

    useEffect(() => {
        //document.body.style.backgroundImage = "none"
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)"

    })

    const switchTable = (action) => {
      console.log("ACTION", action)
      setCurrentTable(action)
    }
  

  return (
    <>
      <Navbar options={[{name:"",endpoint:""}]}/>
      <br/><br/><br/>
      
      {currentTable ?
        null
        :
        <>
          <div className='pageTitle' style={{ fontSize: "clamp(1rem, 10vw, 10rem)", color: "white", fontWeight:"1000", textShadow:"4px 2px 5px black" }}>Doctor's Panel </div>
          <hr style={{ borderColor: "white", borderBlockWidth: "8px", opacity: 1 }} />

        </>}
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" style={{color: "#fff", fontSize:"30px", fontWeight:"1000", textShadow:"4px 2px 5px black"}} href="#" onClick={() => { return switchTable("getVisits") }}>Visits</a>
         </li>

      </ul>

      {currentTable == "getVisits" ? <GetDoctorVisits/> : null}
      

    </>
  )
}

export default Doctor