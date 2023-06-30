import React, { useEffect, useState } from 'react'
import { getReceptionists } from "../../API/Admin"
import Row from "./Row"
function GetReceptionists(props) {

  const [data, setData] = useState()
  const [loading, setLoading] = useState(1)
  const getReceptionistsCallback = async (response) => {
    response = await response.json()
    console.log("GET RECEPTIONIST RESPONSE", response)
    setData(response.data)
    /* Setting the loading state to 1. */
    setLoading(0)
    //console.log("DATA", data)

  }
  const [reload, setRelaod] = useState(0) 
  const reloadFunc = ()=>{
    reloadFunc2()
  } 
  const reloadFunc2 = () =>{
    setRelaod(reload + 1)
  }
  useEffect(() => {
    if (loading) {
      getReceptionists(getReceptionistsCallback)
    }
  })

  return (
    <div>

     
      {data ? data.map((element, index) => {
            console.log("data", data)
            return <Row element={element} index={index} reloadFunc={reloadFunc} />

          }) : null}
    </div>

  )
}

export default GetReceptionists