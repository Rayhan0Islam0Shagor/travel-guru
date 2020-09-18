import React, { useState } from 'react';
import './Home.css'
import TopBar from '../TopBar/TopBar';
import place from '../FakeData/Places'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="head">
                <TopBar />
                <div className="custom-div">
                    <div className="row">
                        <div className="col-lg-6 p-5">
                            <h1 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-light">COX'S BAZAR</h1>
                            <p style={{ fontFamily: "'Oswald', sans-serif" }} className="text-white">Cox's Bazar (Bengali: কক্সবাজার, pronounced [kɔksbadʒaɾ]) is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.</p>
                            <Link to='/booking'>
                                <button style={{ fontFamily: "'Oswald', sans-serif" }} className='btn btn-warning pl-3 pr-3'>Booking 🡆</button>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                {
                                    place.map(place =>
                                        <div key={Math.random()} className="col-lg-4">
                                            <div>
                                                <div className="image">
                                                    <Link to={`/booking/${place.id}`}><img className="img-fluid" src={place.imgURL} alt="" /></Link>
                                                </div>
                                                <div className="name">
                                                    <h3 className="text-light">{place.name}</h3>
                                                </div>
                                            </div>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;