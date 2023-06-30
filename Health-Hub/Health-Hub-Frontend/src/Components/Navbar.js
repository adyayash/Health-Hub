import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {

    useEffect(() => {
        console.log("PROPS OF NAVBAR ==", props.options)
    })
    return (
        <div style={{ "box-shadow": "0px 0px 5px 0px" }}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand"  style={{color:"white",   textShadow: "0 0 1px black, 0 0 2px black, 0 0 3px black, 0 0 5px black"}} href="#">&nbsp; <b>Zoinged</b> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav active">
                        {props.options ? props.options.map((element, index) => {
                           
                            return<>
                                <li class="nav-item active">
                                    <Link to={element.endpoint}> {element.name} &nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                </li>
                            </>

                        }) : null}
                     

                    </ul>
                </div>

                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/logout">LOGOUT &nbsp;</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar