import React from 'react';
import MutiSlider from '../MutiSlider/MutiSlider';
import './Home.css'
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <div>
                <Carousel fade>
          <Carousel.Item>
            <div
              className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "550px",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg) no-repeat center center / cover",
              }}
            >
              <h1 className="logoHeading">
                CRUISE
              </h1>
              <h2 className="text-light">
                With <span className="text-danger">US</span> on the way of
                <span className="text-danger"> JOURNEY</span>
              </h2>
              <h5 className="w-50 mx-auto text-light p-2">
                Discover cities from London to Tokyo in more than 80+ countries
                on a budget with our free tours and unforgettable local guides.
              </h5>
              <button className="btn btn-secondary">About us</button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "550px",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://chopra.brightspotcdn.com/dims4/default/dfb2b37/2147483647/strip/true/crop/571x300+36+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.amazonaws.com%2F61%2Fcc%2F9b0ff8c8aaba0ff21eafee50293c%2F6reasonswhytravelingisgoodforyou.jpg) no-repeat center center / cover",
              }}
            >
              <h1 className="logoHeading">
               CRUISE
              </h1>
              <h2 className="text-light">
                With <span className="text-danger">US</span> on the way of
                <span className="text-danger"> JOURNEY</span>
              </h2>
              <h5 className="w-50 mx-auto text-light p-2">
                Discover cities from London to Tokyo in more than 80+ countries
                on a budget with our free tours and unforgettable local guides.
              </h5>
              <button className="btn btn-secondary">About us</button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "550px",
                background:
                  "linear-gradient(#00000094, #00000094), url(http://limpidthemes.com/Themeforest/html/cruise-demo/light/assets/images/hotel-slide.jpg) no-repeat center center / cover",
              }}
            >
              <h1 className="logoHeading">ons
                CRUISE
              </h1>
              <h2 className="text-light">
                With <span className="text-danger">US</span> on the way of
                <span className="text-danger"> JOURNEY</span>
              </h2>
              <h5 className="w-50 mx-auto text-light p-2">
                Discover cities from London to Tokyo in more than 80+ countries
                on a budget with our free tours and unforgettable local guides.
              </h5>
              <button className="btn btn-secondary">About us</button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "550px",
                background:
                  "linear-gradient(#00000094, #00000094), url(http://limpidthemes.com/Themeforest/html/cruise-demo/light/assets/images/holiday-slide3.jpg) no-repeat center center / cover",
              }}
            >
              <h1 className="logoHeading">
                CRUISE
              </h1>
              <h2 className="text-light">
                With <span className="text-danger">US</span> on the way of
                <span className="text-danger"> JOURNEY</span>
              </h2>
              <h5 className="w-50 mx-auto text-light p-2">
                Discover cities from London to Tokyo in more than 80+ countries
                on a budget with our free tours and unforgettable local guides.
              </h5>
              <button className="btn btn-secondary">About us</button>
            </div>
          </Carousel.Item>
        </Carousel>
            </div>
              <Services></Services>
            <MutiSlider></MutiSlider>
        </>
    );
};

export default Home;