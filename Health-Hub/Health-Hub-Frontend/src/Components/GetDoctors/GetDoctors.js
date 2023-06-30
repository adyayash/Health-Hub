import React, { useEffect, useState } from 'react'
import { getDoctors } from "../../API/Admin"
import Row from "./Row"
function GetDoctors(props) {

  const [data, setData] = useState()
  const [loading, setLoading] = useState(1)

  const getDoctorsCallback = async (response) => {
    response = await response.json()
    console.log("GET DOCTORS RESPONSE", response)
    setData(response.data)
    setLoading(0)
    console.log("DATA", data)

  }
  useEffect(() => {
    if (loading) {
      getDoctors(getDoctorsCallback)
    }
  })

  return (
    <div>

   
      {data ? data.map((element, index) => {
            console.log("data", data)
            return <Row element={element} index={index} />

          }) : null}
      
    </div>

  )
}

export default GetDoctors