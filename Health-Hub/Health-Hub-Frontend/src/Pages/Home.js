import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

function Home() {

  const nav = useNavigate();
  
  useEffect(()=>{

    nav("/login");
  
  })
  
  return (
    <>/</>
  )
}

export default Home