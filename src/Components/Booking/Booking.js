import React, { useContext } from 'react';
import TopBar from '../TopBar/TopBar';
import { Link, useParams, useHistory } from 'react-router-dom';
import place from '../FakeData/Places';
import { FormGroup, Form } from 'react-bootstrap';
import './Booking.css'
import { UserContext } from '../../App';



const Booking = () => {
    const { Id } = useParams();
    const booking = place.find(place => place.id === Id);
    const { name, details, origin, id } = booking;

    const { places } = useContext(UserContext);
    const [data, setData] = places;
    const history = useHistory();

    const handleDetail = (placeId) => {
        setData(placeId);
        history.push('/destination')
    }
    return (
        <div>
            <div className="head">
                <TopBar />
                <div className="custom-div">
                    <div className="row">
                        <div className="col-lg-6 p-5 mt-5">
                            <h1 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-light">{name}</h1>
                            <p style={{ fontFamily: "'Oswald', sans-serif" }} className="text-white">{details}</p>
                        </div>
                        <div className="col-lg-6 ">
                            <form action="" onSubmit={() => handleDetail(id)}>
                                <FormGroup className="bg-light w-75 h-100 p-5">
                                    <label className="text-muted">Origin</label>
                                    <Form.Control className="bg-light font-weight-bold text-body custom-input-2" disabled type="text" placeholder={`${origin}`} />
                                    <label className="text-muted mt-3">Destination</label>
                                    <Form.Control className="bg-light custom-input-2" disabled type="text" placeholder={`${name}`} />
                                    <div className="d-flex justify-content-around mt-2">
                                        <label className="text-secondary">From</label>
                                        <label className="text-secondary">To</label>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <input className="bg-light form-control mr-1" type="date" name="" id="" required />
                                        <input className="bg-light form-control ml-1" type="date" name="" id="" required />
                                    </div>
                                    {/* <Link to='/destination'> */}
                                    <button type="submit" className="btn btn-warning w-100 mt-4">Start Booking</button>
                                    {/* </Link> */}
                                </FormGroup>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Booking;