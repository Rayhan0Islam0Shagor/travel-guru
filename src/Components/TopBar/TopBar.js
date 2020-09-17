import React, { useContext, useState } from 'react';
import image from '../../info/Logo.png'
import './TopBar.css'
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from '../Login/firebase.config';
import firebase from 'firebase';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const TopBar = () => {
    const { userData } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userData;
    const history = useHistory();

    const isLogged = userData[0].email;

    const handleProceedCheckout = () => {
        history.push('/login')
    }

    const handleLoggedOut = () => {
        firebase.auth()
            .signOut()
            .then(() => {
                setLoggedInUser({})
                history.push('/home')
            })
            .catch(error => {

            });
    }


    return (
        <nav className="navbar navbar-expand-lg">
            <Link to="/home" className="navbar-brand ml-5">
                <img className="custom-logo" src={image} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <form className="form-inline my-2 my-lg-0 ml-5">
                <input className="form-control mr-sm-2 ml-5 custom-input" type="search" placeholder="Search your Destination..." aria-label="Search" />
            </form>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active ml-4">
                        <Link className="nav-link" to="/home">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item ml-4">
                        <Link className="nav-link" to="/destination">Destination</Link>
                    </li>
                    <li className="nav-item ml-4 mr-5">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                {isLogged ? <button onClick={handleLoggedOut} className="btn btn-warning mr-5 my-2 my-sm-0 pl-4 pr-4" type="submit">log out</button> :
                    <button onClick={handleProceedCheckout} className="btn btn-warning mr-5 my-2 my-sm-0 pl-4 pr-4" type="submit">login</button>}

                <Link className="nav-link" to="/contact">{loggedInUser.name}</Link>
            </div>
        </nav>
    );
};

export default TopBar;