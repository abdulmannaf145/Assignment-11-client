import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './users.css';

const Users = (props ) => {
    const {name, photo, email,_id} = props.user;

    const handleDelete = (id) =>{
        props.handleDeleteUser(id);
        console.log(id);
    }
    return (
        //  row-cols-lg-3 row-cols-md-2 row-cols-1
        <div class="col">
        <div class="card h-100">
        <img src={photo} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{email}</p>
        </div>
        <div class="card-footer">
            <Link to={`/users/update/${_id}`}>
                <button className="btn mybtn">Update</button>
            </Link>
            <button
                    onClick={() => handleDelete(_id)}
                    type="button"
                    className="btn mybtn"
            >
                    Delete
            </button>
        </div>
        </div>
        </div>
    );
};

export default Users;