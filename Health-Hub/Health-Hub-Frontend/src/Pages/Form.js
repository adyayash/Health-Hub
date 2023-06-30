import React, { useEffect, useState } from 'react'
import { addDoctor, addReceptionist, getDoctors } from "../API/Admin"
import { addPatient } from "../API/Receptionist"
import { getAvailableSlot } from "../API/Doctor"
import { addRequest, addVisit, updateVisit, updateRequests } from "../API/Visit"
import { addDocSlot, addSlot, getSlots } from "../API/Slots"
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

function Form(props) {



  const [data, setData] = useState({})
  const [finalForm, setFinalForm] = useState()
  const [formReady, setFormReady] = useState(0)
  const [doctors, setDoctors] = useState()
  const [availSlots, setAvailSlots] = useState()
  const [slots, setSlots] = useState()
  const route = useParams()
  const navigate = useNavigate();

  let addDoctorForm = { formName: "Sign Up a Doctor", fields: [{ fieldName: "email", fieldType: "text" }, { fieldName: "password", fieldType: "text" }, { fieldName: "name", fieldType: "text" }, { fieldName: "field", fieldType: "text" }], api: addDoctor }

  let addReceptionistForm = { formName: "Sign Up a Receptionist", fields: [{ fieldName: "email", fieldType: "text" }, { fieldName: "password", fieldType: "text" }, { fieldName: "name", fieldType: "text" }], api: addReceptionist }

  let addSlotForm = { formName: "Sign Up New Slot", fields: [{ fieldName: "timing", fieldType: "text" }], api: addSlot }

  let addDocSlotForm = { formName: "Asign New Slot", fields: [/*{ fieldName: "slotId", fieldType: "number" }, { fieldName: "docId", fieldType: "number" }*/], api: addDocSlot }

  let addPatientForm = { formName: "Sign Up New Patient", fields: [{ fieldName: "email", fieldType: "text" }, { fieldName: "password", fieldType: "text" }, { fieldName: "name", fieldType: "text" }, { fieldName: "medicalHistory", fieldType: "text" }, { fieldName: "alergies", fieldType: "text" }, { fieldName: "emergencyContact", fieldType: "text" }], api: addPatient }

  let addRequestForm = { formName: "Request a Visit", fields: [{ fieldName: "userId", fieldType: "number" }, { fieldName: "subject", fieldType: "text" }], api: addRequest }

  let addVisitForm = { formName: "Schedule Visit", fields: [{ fieldName: "date", fieldType: "date" }] }

  let reScheduleVisitForm = { formName: "Re Schedule Visit", fields: [{ fieldName: "date", fieldType: "date" }] }



  const setFinalFormData = () => {
    console.log("ON IT")
    switch (route.formtype) {
      case "addDoctor":
        setFinalForm({ ...addDoctorForm })
        break;
      case "addReceptionist":
        setFinalForm({ ...addReceptionistForm })
        break;
      case "addPatient":
        setFinalForm({ ...addPatientForm })
        break;
      case "addSlot":
        setFinalForm({ ...addSlotForm })
        break;
      case "addRequest":
        setFinalForm({ ...addRequestForm })
        break;
      case "addDocSlot":
        setFinalForm({ ...addDocSlotForm })
        getSlots(getSlotsCallback)
        break;
      case "addVisit":
        setFinalForm({ ...addVisitForm })
        getDoctors(getDoctorDataCallback)
        break;
      case "reScheduleVisit":
        setFinalForm({ ...reScheduleVisitForm })
        getDoctors(getDoctorExceptDataCallback)
        updateVisit({ id: (route.userId.split(':'))[2], status: "RESCHEDULED" })
        break;
      default:
        break;
    }
    setFormReady(1)
  }

  const getSlotsCallback = async (response) => {
    response = await response.json()
    console.log("GET DOCTORS RESPONSE", response)
    setSlots(response.data)

  }


  const getDoctorDataCallback = async (response) => {
    response = await response.json()
    console.log("GET DOCTORS RESPONSE", response)
    setDoctors(response.data)
  }

  const getDoctorExceptDataCallback = async (response) => {
    response = await response.json()
    console.log("GET DOCTORS RESPONSE", response)
    let exceptDocId = (route.userId.split(':'))[1]

    setDoctors(response.data)

    for (let i = 0; i < response.data.length; i++) {

      if (response.data[i].id == exceptDocId) {
        response.data.splice(i, 1)
        console.log("GET EXCEPTEDDD DOCTORS RESPONSE", response.data)
        setDoctors(response.data)
        break;
      }

    }

  }

  useEffect(() => {
    if (formReady) {
      console.log("pass")
    }
    else {
      setFinalFormData()
    }

    console.log("data ==>", data, availSlots)
    document.body.style.backgroundImage = "none"
  })

  useEffect(() => {
    if ((route.formtype == "addVisit" && data.docId && data.date)
      ||
      (route.formtype == "reScheduleVisit" && data.docId && data.date)
    ) {
      console.log("YESSS")
      getAvailableSlot(data.date, data.docId, getAvailableSlotCallback)
    }
  }, [data])


  const getAvailableSlotCallback = async (response, e) => {
    response = await response.json()
    console.log("AVAILABLE SLOTS", response)
    setAvailSlots(response.finalData)
  }



  const submitHandlerCallback = async (response) => {
    response = await response.json()
    console.log("FINAL POST RESPONSE", response)
    navigate(-1)

  }

  const addVisitCallback = async (response) => {
    updateRequests({ id: (route.userId.split(':'))[1], status: "SCHEDULED" }, submitHandlerCallback)
  }

  const submitHandler = async () => {

    console.log("data ==> ", data)
    switch (route.formtype) {
      case "addDoctor":
        addDoctor(data.email, data.password, data.name, data.field, submitHandlerCallback)
        break;
      case "addReceptionist":
        addReceptionist(data.email, data.password, data.name, submitHandlerCallback)
        break;
      case "addPatient":
        addPatient(data.email, data.password, data.name, data.medicalHistory, data.alergies, data.emergencyContact, submitHandlerCallback)
        break;
      case "addSlot":
        addSlot(data.timing, submitHandlerCallback)
        break;
      case "addRequest":
        addRequest(data.userId, data.subject, submitHandlerCallback)
        break;
      case "addVisit":
        addVisit(data.date, (route.userId.split(':'))[0], data.docId, data.slotId, addVisitCallback)
        break;
      case "reScheduleVisit":
        addVisit(data.date, (route.userId.split(':'))[0], data.docId, data.slotId, submitHandlerCallback)
        break;
      case "addDocSlot":
        addDocSlot(data.slotId, route.userId, submitHandlerCallback)
        break;

      default:
        break;
    }


  }

  return (
    <div>
      <Navbar />

      <div className='pageTitle' style={{ margin: "10px" }}>

        <h3>

          {finalForm ? <div className='pageTitle' style={{ fontSize: "clamp(1rem, 5vw, 10rem)", color: "white" }}>{finalForm.formName} </div> : null}
        </h3>
      </div>

      <form id='postForm' onSubmit={() => { submitHandler() }}>
        {console.log("finalForm ==>", finalForm)}
        {finalForm ? finalForm.fields.map((element, index) => {
          return <>
            <div class="mb-3">
              <label for="exampleFormControlInput1" style={{ color: "white" }} class="form-label">{element.fieldName.toUpperCase()}</label>
              <input type={`${element.fieldType}`} class="form-control" id="exampleFormControlInput1" placeholder={`${element.fieldName}...`} onChange={(event) => { event.preventDefault(); setData({ ...data, [element.fieldName]: event.target.value })/*setData(data[`${element.fieldName}`] = event.target.value)*/ }} />
            </div>
          </>
        }) : null}

        {
          (route.formtype == "addVisit" && doctors) || (route.formtype == "reScheduleVisit" && doctors) ?
            <>
              <label for="exampleFormControlInput1" style={{ color: "white" }} class="form-label">SELECT DOCTOR</label>
              <select class="form-control" id="exampleFormControlInput1" onChange={(event) => { event.preventDefault(); setData({ ...data, docId: event.target.value }) }} >
                <option class="form-control" id="exampleFormControlInput1" value="Blank">Name - Field</option>

                {doctors.map((element, index) => {
                  return <>
                    <option class="form-control" id="exampleFormControlInput1" value={element.id}>{element.name} - {element.field}</option>
                  </>
                })}
              </select>
            </>
            :
            null
        }

        {availSlots ?
          <>
            <label for="exampleFormControlInput1" style={{ color: "white" }} class="form-label">SELECT SLOT</label>

            <select class="form-control" id="exampleFormControlInput1"/*value={value}*/ onChange={(event) => { event.preventDefault(); setData({ ...data, slotId: event.target.value }) }} >
              <option class="form-control" id="exampleFormControlInput1" value="Blank">From - Till</option>

              {availSlots ? availSlots.map((element, index) => {
                return <>
                  <option class="form-control" id="exampleFormControlInput1" value={element.id}>{element.timing}</option>
                </>
              }) : null
              }

            </select>

          </> : null}

        {
          route.formtype == "addDocSlot" ?
            <>
              <label for="exampleFormControlInput1" style={{ color: "white" }} class="form-label">SELECT SLOT</label>

              <select class="form-control" id="exampleFormControlInput1"/*value={value}*/ onChange={(event) => { event.preventDefault(); setData({ ...data, slotId: event.target.value }) }} >
                <option class="form-control" id="exampleFormControlInput1" value="Blank">From - Till</option>

                {slots ? slots.map((element, index) => {
                  return <>
                    <option class="form-control" id="exampleFormControlInput1" value={element.id}>{element.timing}</option>
                  </>
                }) : null
                }

              </select>
            </>
            : null
        }

        <div style={{ textAlign: "center" }}>
          <br />
          <button type="submit" style={{}} class="btn btn-success" onClick={(event) => { event.preventDefault(); submitHandler() }}>Post</button>
          &nbsp;
          <button onClick={() => navigate(-1)} type="button" class="btn btn-danger">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Form