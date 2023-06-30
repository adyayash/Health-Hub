import React, { useEffect } from 'react'
import { SET_AUTH_STATUS, SET_USER_ROLE } from '../Reducers/types';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const nav = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
        document.body.style.backgroundImage = "none"
    })

    useEffect(() => {
        dispatch({ type: SET_AUTH_STATUS, payload: { authStatus: false } });
        dispatch({ type: SET_USER_ROLE, payload: { userRole: "FREE_ROAM" } });
        nav("/login");
    }, [])
    
    return (
        <div>Loging Out</div>
    )
}

export default Logout