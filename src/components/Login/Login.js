import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
const Login = () => {
    document.title = "Login Page"
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    let history = useHistory();
  let location = useLocation();


  let { from } = location.state || { from: { pathname: "/" } };

   
    const googleHeandle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
               
                setUserLoggedIn(user)
                history.replace(from);
                // setUserToken()

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)

            });
    }

    // const setUserToken = () => {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    //        sessionStorage.setItem('email', idToken)
    //       }).catch(function(error) {
    //         // Handle error
    //       });
    // }
    

    console.log("dsfgsdf",userLoggedIn.displayName)
    return (
        <div className="container d-flex align-items-center justify-content-center login-container">
            <div className="bg-light p-5 text-center">
                <Link to="/" class="navbar-brand LogoBrand">TRUST HOME CLENER</Link>
                <h4 className="pb-3 pt-4">Login With</h4>

                <button type="button" class="btn brand-button text-light" onClick={googleHeandle}>Conintue with Google</button>
            </div>
        </div>
    );
};

export default Login;