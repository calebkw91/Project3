import React from "react";
import Login from "../../components/Login";

function Landing(props){
    return(
        <div className="container">
            <div className="row">
                <h1>OrcaStrator</h1>
            </div>
            <div className="row">
                <h3>Orchestrate your team</h3>
            </div>
            <Login />
        </div>
        
    )
}


export default Landing;