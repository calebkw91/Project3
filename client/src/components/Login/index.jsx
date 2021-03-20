import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css"
require("dotenv").config();

function Login() {

    console.log(process.env.GOOGLE_URL);

    const googleLogin = () => {
        window.open("https://orcastrator.herokuapp.com/auth/google", "_self");
    }
    const githubLogin = () => {
        window.open("https://orcastrator.herokuapp.com/auth/github", "_self");
    }
    const localSignup = () => {
        window.location.assign("/signup");
    }
    const localLogin = () => {
        window.location.assign("/login");
    }

    return (
        <div className="mx-auto row justify-content-center align-self-center">
            <h1 className="title-header">Orcastrate</h1>
            <h3 className="title-subheader">Market your group</h3>
            <div className="col-12">
                <div className="justify-content-center">
                    <div className="card card-position">
                        <div className="card-header">
                            <h3>Sign In With:</h3>
                        </div>
                        <div className="card-body">
                            <Button variant="primary"><span onClick={googleLogin}><i className="fab fa-google-plus-square"></i></span></Button>{' '}
                            <Button variant="dark"><span onClick={githubLogin}><i className="fab fa-github"></i></span></Button>
                            <h3>Or Create an Account</h3>
                            <Button variant="secondary" onClick={localSignup}>Create Account</Button>
                            <h3>Already have an Account?</h3>
                            <Button variant="primary" onClick={localLogin}>Login</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;