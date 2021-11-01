import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
import img1 from '../../images/popular01.jpg'
import img2 from '../../images/popular02.jpg'
import img3 from '../../images/popular03.jpg'

const MutiSlider = () => {
             const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
    return (
        <div className="container">
            <h1>Most Beautiful Places</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maiores. A eius exercitationem repudiandae. Reiciendis doloremque nesciunt adipisci facilis culpa.</p>
            <Carousel responsive={responsive}>
              <div className="m-2">
                  <div className="col">
                    <div className="card h-100">
                    <img src={img1} className="card-img-top" alt="..."/>
                        <div className="card-body text-start">
                            <h5 className="card-title">Bahamas</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between">
                                <p><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i></p>
                                <button className="border-0 d-inline-block p-2" style={{background:'orange'}}>See All</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="m-2">
                  <div className="col">
                    <div className="card h-100">
                    <img src={img2} className="card-img-top" alt="..."/>
                        <div className="card-body text-start">
                            <h5 className="card-title">Bahamas</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between">
                                <p><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star-half-alt text-golden"></i></p>
                                <button className="border-0 d-inline-block p-2" style={{background:'orange'}}>See All</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="m-2">
                  <div className="col">
                    <div className="card h-100">
                    <img src={img3} className="card-img-top" alt="..."/>
                        <div className="card-body text-start">
                            <h5 className="card-title">Bahamas</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between">
                                <p><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i></p>
                                <button className="border-0 d-inline-block p-2"style={{background:'orange'}}>See All</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
              <div className="m-2">
                  <div className="col">
                    <div className="card h-100">
                    <img src={img1} className="card-img-top" alt="..."/>
                        <div className="card-body text-start">
                            <h5 className="card-title">Bahamas</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between">
                                <p><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star-half-alt text-golden"></i></p>
                                <button className="border-0 d-inline-block p-2 text-white" style={{background:'orange'}}>See All</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="m-2">
                  <div className="col">
                    <div className="card h-100">
                    <img src={img1} className="card-img-top" alt="..."/>
                        <div className="card-body text-start">
                            <h5 className="card-title">Bahamas</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between">
                                <p><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star-half-alt text-golden"></i></p>
                                <button className="border-0 d-inline-block p-2 text-white" style={{background:'orange'}}>See All</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="m-2">
                  <div className="col">
                    <div className="card h-100">
                    <img src={img1} className="card-img-top" alt="..."/>
                        <div className="card-body text-start">
                            <h5 className="card-title">Bahamas</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between">
                                <p><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star text-golden"></i><i className="fas fa-star-half-alt text-golden"></i></p>
                                <button className="border-0 d-inline-block p-2 text-white" style={{background:'orange'}}>See All</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </Carousel>
        </div>
    );
};

export default MutiSlider;