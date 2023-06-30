import React, { useEffect, useState } from 'react'
import Row from "./Row"
import { getVisit } from "../../API/Doctor"

function GetDoctorVisits() {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(1)

    const getVisitCallback = async (response) => {
        response = await response.json()
        console.log("GET DOCTOR VisitS RESPONSE", response)
        setData(response.data)
        setLoading(0)
        console.log("DATA", data)

    }
    useEffect(() => {
        if (loading) {
            getVisit(1, getVisitCallback)
        }
    })

    const [reload, setRelaod] = useState(0)
    const reloadFunc = () => {
        reloadFunc2()
    }
    const reloadFunc2 = () => {
        setRelaod(reload + 1)
        setLoading(1)
    }

    return (
        <div>

           
            {data ? data.map((element, index) => {
                console.log("data", data)
                return <Row element={element} index={index} reloadFunc={reloadFunc} />

            }) : null}
        </div>

    )
}

export default GetDoctorVisits