import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './users.css';

const Users = (props ) => {
    const {name, photo, email,_id} = props.user;

    const handleDelete = (id) =>{
        props.handleDeleteUser(id);
    }
    return (
      <div className="col-lg-3 col-md-6 col-sm-12 text-center">
        <div className="show mb-4">
          <p>
            <span className="user-output">Name: </span> {name}
          </p>
          <p>
            <span className="user-output">Email: </span>
            {email}
          </p>
          <img className="img-thumbnail mb-2" src={photo} alt="" />
          <Link to={`/users/update/${_id}`}>
            <button className="up-user-btn ml-1 mb-2">Update</button>
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
    );
};

export default Users;