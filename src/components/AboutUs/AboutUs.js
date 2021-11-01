import React from 'react';
import './AboutUs.css';
import img from'../../images/about2.jpg';
import team1 from '../../images/team.jpg';
import team2 from '../../images/team2.jpg';
import team3 from '../../images/team3.jpg';
const AboutUs = () => {
    return (
        <>
        <div className="backgrounImgSet">
            <h1>ABOUT US</h1>
            <h3>A Few Words About Us</h3>
        </div>
        <div className="container">
            <div className="row row-cols-lg-2 row-cols-md-1 row-cols-1 py-4">
                <div className="col text-start">
                    <h2>INTRODUCTION</h2>
                    <h3>What We Do</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quo rem quae vel odio, esse aut natus veniam quibusdam, nesciunt iure? Consectetur ab mollitia molestiae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam adipisci, dolorem voluptas laborum facere ipsa.</p>
                </div>
                <div className="col">
                    <img style={{height:'300px'}} src={img} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
        <div style={{background:'#F7941D'}} className="py-4">
            <div className="container">
                <h2 className="text-white">OUR TEAM</h2> 
                <h3 className="text-white pb-3">Meet The Team Behind Cruise</h3>        
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="cardHover pt-2 card h-100 border-0 img-fluid" style={{background:'#F7941D'}}>
                        <img src={team1} style={{width:'100px',height:'100px', margin:'auto'}} className="card-img-top rounded-circle" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Sarena Doe</h5>
                            <p className="card-title">Graphic Designer</p>
                            <div className="d-flex justify-content-around">
                                <p><i className="fab fa-facebook-f"></i></p>
                                <p><i className="fab fa-twitter"></i></p>
                                <p><i className="fab fa-instagram"></i></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="cardHover pt-2 card h-100 border-0 img-fluid" style={{background:'#F7941D'}}>
                        <img src={team2} style={{width:'100px',height:'100px', margin:'auto'}} className="card-img-top rounded-circle" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Lenore</h5>
                            <p className="card-title">Graphic Designer</p>
                            <div className="d-flex justify-content-around">
                                <p><i className="fab fa-facebook-f"></i></p>
                                <p><i className="fab fa-twitter"></i></p>
                                <p><i className="fab fa-instagram"></i></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="cardHover pt-2 card h-100 border-0 img-fluid" style={{background:'#F7941D'}}>
                        <img src={team3} style={{width:'100px',height:'100px', margin:'auto'}} className="card-img-top rounded-circle" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Kim</h5>
                            <p className="card-title">Web devloper</p>
                            <div className="d-flex justify-content-around">
                                <p><i className="fab fa-facebook-f"></i></p>
                                <p><i className="fab fa-twitter"></i></p>
                                <p><i className="fab fa-instagram"></i></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutUs;