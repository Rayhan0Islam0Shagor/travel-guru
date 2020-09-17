import React, { useContext, useState } from 'react';
import TopBar from '../TopBar/TopBar';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import facebookImg from '../../info/Icon/fb.png';
import googleImg from '../../info/Icon/google.png';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';




const Login = () => {
    const { userData } = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);

    const [loggedInUser, setLoggedInUser] = userData;
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPassValid = e.target.value.length > 6;
            const passHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPassValid && passHasNumber;
        }
        if (isFieldValid) {
            console.log(e.target.name, e.target.value)
            const newUserInfo = { ...loggedInUser };
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        console.log(newUser, loggedInUser.password)
        if (newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo)
                });
        }

        if (!newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    const newUserInfo = { ...loggedInUser };
                    // newUserInfo.error = '';
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
                });
        }

        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email: email, photoURL }
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => {
                const errorMessage = error.message;
            });
    }

    const handleFbSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(fbProvider)
            .then(result => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email }
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => {
                const errorMessage = error.message;
            });
    }

    return (
        <div className="head">
            <TopBar />
            <div className="bg-light mt-5 p-4 w-50 mx-auto">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        {
                            newUser &&
                            <Form.Control onBlur={handleBlur} name="name" type="name" placeholder="Enter name" required />

                        }
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleBlur} name="email" type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleBlur} name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <div className="d-flex justify-content-between">
                            <Form.Check type="checkbox" label="Remember me?" />
                            <Link to="/login"><u>forgotten password</u></Link>
                        </div>
                    </Form.Group>
                    <Button variant="primary w-100" type="submit">
                        Login
                    </Button>
                </Form>
                <div className='text-center mt-3'>
                    {newUser ?
                        <span>You already have an account? <button className='btn btn-outline-warning' onClick={() => setNewUser(!newUser)}> Log in</button> </span> : <span>Don’t have an account? <button className='btn btn-outline-warning ml-5' onClick={() => setNewUser(!newUser)}> Create an account</button> </span>
                    }
                </div>

            </div>
            <div className="form-bottom mx-auto w-25 ">
                <div className="d-flex">
                    <span></span>
                    <h3 className="text-light">OR</h3>
                    <span></span>
                </div>
            </div>
            <button onClick={handleFbSignIn} className="btn rounded-pill w-25 text-dark mx-auto bg-light mt-3 p-2 d-flex">
                <img src={facebookImg} height="35px" width="35px" alt="" />
                <h6 className="mx-auto">Continue with Facebook</h6>
            </button>

            <button onClick={handleGoogleSignIn} className="btn rounded-pill w-25 text-dark mx-auto bg-light mt-3 p-2 d-flex">
                <img src={googleImg} height="30px" width="30px" alt="" />
                <h6 className="mx-auto">Continue with Google</h6>
            </button>
        </div >
    );
};

export default Login;