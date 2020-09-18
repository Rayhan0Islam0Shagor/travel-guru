import React, { useContext } from 'react';
import TopBar from '../TopBar/TopBar';
import { UserContext } from '../../App';
import place from '../FakeData/Places'

const Destination = () => {
    const { places } = useContext(UserContext);
    const [data, setData] = places;


    let storeId = "1";
    if (data) {
        storeId = data;
    }
    const booking = place.find(place => place.id === storeId);


    return (
        <div className="head">
            <TopBar />
            <div className="container text-light p-0 mt-5 mx-auto">
                <p className="ml-5">252 stays Apr 13-17 3 guests</p>
                <h2 className="ml-5">Stay in {booking.name} </h2>
            </div>
            <div className="row container rounded bg-light p-4 mx-auto">
                <div style={{ cursor: "pointer" }} className="col-md-6">
                    <div className="text-dark d-flex">
                        <div>
                            <img height='200px' width='300px' src="https://i.ibb.co/5WHJQGK/Rectangle-26.png" alt="" />
                        </div>
                        <div className="ml-4 mt-2">
                            <strong>Hotel Jarina</strong>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, labore? Expedita a ad minus rem?</p>
                            <div className="d-flex justify-content-between">
                                <p><img height="20px" width="20px" src="https://i.ibb.co/4W408JY/star-1.png" alt="" /> 4.9(20)</p>
                                <p><strong>$34/</strong>night</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-dark w-100 d-flex mt-3">
                        <div>
                            <img height='200px' width='300px' src="https://i.ibb.co/tMWtpKr/Rectangle-27.png" alt="" />
                        </div>
                        <div className="ml-4 mt-2">
                            <strong>Hotel Sharika</strong>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, labore? Expedita a ad minus rem?</p>
                            <div className="d-flex justify-content-between">
                                <p><img height="20px" width="20px" src="https://i.ibb.co/4W408JY/star-1.png" alt="" /> 4.8(20)</p>
                                <p><strong>$25/</strong>night</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-dark w-100 d-flex mt-3">
                        <div>
                            <img height='200px' width='300px' src="https://i.ibb.co/Yyh3Dns/Rectangle-28.png" alt="" />
                        </div>
                        <div className="ml-4 mt-2">
                            <strong>Hotel Karina</strong>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, labore? Expedita a ad minus rem?</p>
                            <div className="d-flex justify-content-between">
                                <p><img height="20px" width="20px" src="https://i.ibb.co/4W408JY/star-1.png" alt="" /> 4.9(20)</p>
                                <p><strong>$20/</strong>night</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pl-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1882321.6359577612!2d91.56056300872038!3d22.861328502383774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sdhaka!3m2!1d23.810332!2d90.4125181!4m5!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2scox&#39;s%20bazar!3m2!1d21.4272283!2d92.0058074!5e0!3m2!1sen!2sbd!4v1600287253804!5m2!1sen!2sbd" height="630px" width="450px" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Destination;