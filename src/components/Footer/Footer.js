
import React from 'react';

const Footer = () => {
    return (
        <div style={{background:'#07253F',color:'white',padding:'60px 0'}}>
             <div className="container">
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
            <div className="col text-start">
                <h4 className="text-orange">CRUISE</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <button className="text-orange fw-bold border-0" style={{border: "2px solid !important"}}>Read More</button>
            </div>
            <div className="col text-start">
                <h4 className="text-orange">POPULAR TOURS</h4>
                <ul className="list-unstyled">
                    <li><i className="fas fa-angle-right"></i> Romantic France</li>
                    <li><i className="fas fa-angle-right"></i> Wonderful Lodnon</li>
                    <li><i className="fas fa-angle-right"></i> Awesome Amsterdam</li>
                    <li><i className="fas fa-angle-right"></i> Wild Africa</li>
                    <li><i className="fas fa-angle-right"></i> Beach Goa</li>
                    <li><i className="fas fa-angle-right"></i> Casino Los Vages</li>
                    <li><i className="fas fa-angle-right"></i> Romantic France</li>
                </ul>
            </div>
            <div className="col text-start">
                <h4 className="text-orange">OUR SERVICES</h4>
                <ul className="list-unstyled">
                    <li><i className="fas fa-angle-right"></i> Domestic Flights</li>
                    <li><i className="fas fa-angle-right"></i> International Flights</li>
                    <li><i className="fas fa-angle-right"></i> Tours & Holidays</li>
                    <li><i className="fas fa-angle-right"></i> Domestic Hotels</li>
                    <li><i className="fas fa-angle-right"></i> International Hotels</li>
                    <li><i className="fas fa-angle-right"></i> Cruise Holidays</li>
                    <li><i className="fas fa-angle-right"></i> Car Rental</li>
                </ul>
            </div>
            <div className="col text-start">
                <h4 className="text-orange">CONTACT US</h4>
                <ul className="list-unstyled">
                    <li><span><i style={{border: "2px solid #bec4c8",borderRadius: "50%",
    color: "#f9676b",
    display: "inline-block",
    height: "40px",
    marginRight: "10px",
    marginTop: '10px',
    padding: "10px 11px",
    width: "40px"
}} className="fas fa-home"></i> </span> Street #156 Burbank, Studio City Hollywood, California USA</li>
                    <li><span><i style={{border: "2px solid #bec4c8",borderRadius: "50%",
    color: "#f9676b",
    display: "inline-block",
    height: "40px",
    marginRight: "10px",
    marginTop: '10px',
    padding: "10px 11px",
    width: "40px"
}} className="fas fa-phone-alt"></i></span> +91 1234567890</li>
                    <li><span><i style={{border: "2px solid #bec4c8",borderRadius: "50%",
    color: "#f9676b",
    display: "inline-block",
    height: "40px",
    marginRight: "10px",
    marginTop: '10px',
    padding: "10px 11px",
    width: "40px"
}} className="fas fa-envelope-open"></i></span>  support@domain.com</li>
                </ul>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Footer;