import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import { createAccountAndLogin, initializeFirebase } from './LoginManager';
import { Redirect, useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const CreateAccount = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignUp: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })




    initializeFirebase();


    const handleChange = e => {
        let  isInputValid;
        if(e.target.name === 'email'){
            isInputValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if(e.target.name === 'password'){
            isInputValid = e.target.value.length > 6;
        }
        if(isInputValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    
    const handleSubmit = e => {
        if(user.email && user.password){
            createAccountAndLogin(user.name,user.email, user.password)
            .then(res => {
                setUser(res);
            })
        }
        e.preventDefault();
    }

    const handleSignIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          const {displayName, email} = user;
          const signInUser = {name: displayName, email}; 
          setLoggedInUser(signInUser);
          history.replace(from);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = error.credential;
          console.log(errorCode, errorMessage, email, credential);
        });
    }
    const home = useHistory();
    const handleHome = () => {
        home.push('/')
    }
    return (
        <div>
            <a href='#' onClick={handleHome} className='back-to-home'>Back to home</a>
            <div className="login-section text-center">
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                <input onBlur={handleChange} style={{borderRadius: '3px', padding: '5px'}} name='email' type="text" placeholder='your email' required/><br/><br/>
                <input onBlur={handleChange} style={{borderRadius: '3px', padding: '5px'}}  type="password" name='password' placeholder='your password' required /><br/><br/>
                <p style={{color:'red'}}>{user.error}</p>
                {
                    user.success && <p style={{color:'green'}}>user create successfully</p>
                }
                <input className='mb-4' style={{borderRadius: '3px', padding: '8px', cursor: 'pointer'}} type="submit" value="Sign up"/> <span className='ml-5'><Link to="/login">login</Link></span>
            </form>
            {
                user.isSignUp && <Redirect to='/login'/>
            }
                <div className="signIn mt-10">
                    <input className='login-btn' style={{borderRadius: '3px', cursor: 'pointer'}} onClick={handleSignIn} type="button" value='Login with Google'/>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;