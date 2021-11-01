import React, { useEffect, useState } from 'react';

const BookingShows = () => {
    const [booking,setBooking] = useState([]);
    useEffect(()=>{
        fetch('https://safe-ocean-01500.herokuapp.com/booking')
        .then(res=>res.json())
        .then(data=>setBooking(data))
    },[]);
  useEffect(() => {
    fetch("https://safe-ocean-01500.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url =  `https://safe-ocean-01500.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = booking.filter(
              (userService) => userService._id !== id
            );
            setBooking(remainingUsers);
          }
        });
    }
  };

    return (
    <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                booking.map(booked => <div class="col">
    <div class="card h-100">
      <img src={booked.package.img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{booked.package.placeName}</h5>
        <p class="card-text">{booked.package.showDetails}</p>
      </div>
      <div class="card-footer">
        <button onClick={()=> handleDeleteUserService(booked._id)}>Booking Delete</button>
      </div>
    </div>
  </div>)
            }
        </div>
    </div>
    );
};

export default BookingShows;