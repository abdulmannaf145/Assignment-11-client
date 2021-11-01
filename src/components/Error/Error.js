import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={{padding:"100px 0px",background: "#f9676b",color: "#fff"}}>
            <div className="container">
                <i className="fa fa-chain-broken fs-1"></i>
                <h1>404</h1>
                <p className="fs-2">Page Not Found</p>
                <p className="fs-4">Looks like you are lost.</p>
                <Link to="/home">
                    <button style={{border:'3px solid',background: "#f9676b",color:'white',padding:'6px'}}><i class="fas fa-home"></i> Homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;