import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [places,setPlaces] = useState([]);
    useEffect(()=>{
        fetch('https://safe-ocean-01500.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setPlaces(data))
    },[])
    return (
        <div className="container">
            <h1>Most Review places {places.length}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    places.map(place =><div className="col">
            <div className="card h-100">
                <img style={{height:"300px"}} src={place.img} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body text-start">
                    <h5 className="card-title">{place.placeName}</h5>
                    <p className="card-text">{place.paragraph}</p>
                    <p className="card-text">{place.price}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/service/${place._id}`}>
                            <button style={{border:'3px solid',background: "#f9676b",color:'white',padding:'6px'}}>Details</button>
                        </Link>
                        <button style={{border:'3px solid',background: "#f9676b",color:'white',padding:'6px'}}>Book now</button>
                    </div>
                </div>
            </div>
        </div>)
                }
            </div>
        </div>
    );
};

export default Services;