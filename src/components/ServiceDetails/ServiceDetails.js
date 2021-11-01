import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const ServiceDetails = () => {
  const { user, logOut } = useFirebase();
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.package = ExactItem[0];
    console.log(data);
    axios
      .post("https://safe-ocean-01500.herokuapp.com/booking", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert(
            "Booking Added. You can see your booking in My Booking or Dashboard page. Thank you"
          );
          reset();
        }
      });
  };
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://safe-ocean-01500.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    fetch("https://safe-ocean-01500.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const ExactItem = data.filter((td) => td._id === id);
  const ExactUsers = users.filter((td) => td.id === id);


  return (
    <div>
      <div
        style={{
          height: "400px",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.7)),url(${ExactItem[0]?.img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-12 shadow my-2">
            <h1>Place name : {ExactItem[0]?.placeName}</h1>
            <h1>How many tour have : {ExactItem[0]?.tours}</h1>
            <p>How many tour have : {ExactItem[0]?.showDetails}</p>
            <div className="d-flex justify-content-center cart-dl my-3 mt-4">
              <p>
                <i class="far fa-clock color-pink me-3"></i>
                {ExactItem[0]?.days} Days
              </p>
              <p>|</p>
              <p>
                <i class="far fa-user color-pink me-3"></i> Age{" "}
                {ExactItem[0]?.ageRequire}
              </p>
              <p>|</p>
              <p>
                <i class="far fa-map color-pink me-3"></i>{" "}
                {ExactItem[0]?.loaciton}
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12 my-5">
            <div className="shadow p-5 m-3 borderRadius-4">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="my-2 p-4 rounded text-start"
              >
                <div className="mb-3">
                  <h2 className="text-center">Book Now</h2>
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    {...register("name", { required: true, maxLength: 40 })}
                    placeholder="name"
                  />
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    {...register("phone", { required: true, maxLength: 40 })}
                    placeholder="phone"
                  />
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2"
                  >
                    Email address
                  </label>
                  <input
                    value={user.email || ""}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    {...register("email", { required: true, maxLength: 40 })}
                    placeholder="email"
                  />

                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    {...register("city", { required: true, maxLength: 40 })}
                    placeholder="city"
                  />
                </div>
                <div className="row mb-3 text-danger"></div>
                  <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetails;