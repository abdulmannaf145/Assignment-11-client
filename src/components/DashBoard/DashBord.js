import React, { useEffect, useState } from 'react';
import Users from '../users/users';
// import Users from '../users/users';

const DashBord = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch("https://safe-ocean-01500.herokuapp.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);
  const handleDeleteUser = (id) => {
      console.log(id)
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url =  `https://safe-ocean-01500.herokuapp.com/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
          }
        });
    }
  }

    return (
      <div>
        <div className="container">
          <h1 className="text-center m-4">Dashboard</h1>
          <h4>Users Details : </h4>
          <div className="row mb-5 mt-5">
            {users.map((user) => (
              <Users key={users._id} handleDeleteUser={handleDeleteUser} user={user}></Users>
            ))}
          </div>
        </div>
      </div>
    );
};

export default DashBord;