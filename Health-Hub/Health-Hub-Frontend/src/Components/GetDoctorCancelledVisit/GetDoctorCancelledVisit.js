import React, { useEffect, useState } from 'react'
import { getDoctorCancelledVisit } from "../../API/Visit"
import Row from "./Row"
function GetDoctors(props) {

  const [data, setData] = useState()
  const [loading, setLoading] = useState(1)

  const getDoctorCancelledVisitCallback = async (response) => {
    response = await response.json()
    console.log("GET DOCTORS CANCELLED VISIT RESPONSE", response)
    setData(response.data)
    setLoading(0)
    console.log("DATA", data)

  }
  useEffect(() => {
    if (loading) {
        getDoctorCancelledVisit(getDoctorCancelledVisitCallback)
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