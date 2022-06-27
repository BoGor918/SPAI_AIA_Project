import React from "react";
import {auth, provider} from "../firebase-config";
import {signInWithPopup} from "firebase/auth";

function Login({setIsAuth}) {

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
        })
    }

    const signInWithFacebook = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
        })
    }
    return (
        <div class="loginPage">
            <p>Sign In With Google to Continue</p>
            <button class="login-with-google-btn" onClick={signInWithGoogle}>
                Sign In With Google
            </button>
        </div>
    );
}

export default Login;