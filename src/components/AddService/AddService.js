import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./addservice.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://safe-ocean-01500.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Add Successfull");
          reset();
        }
      });
  };

  return (
    <div className="container  p-5">
      <div className="m-5 addservice p-3">
        <h1 className="service-text">Add a New Service</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="add">
          <input
            className="mt-3"
            {...register("placeName", { required: true, maxLength: 20 })}
            placeholder="Place Name"
          />
          <input
            className="mt-3"
            {...register("loaciton", { required: true, maxLength: 20 })}
            placeholder="Place loaction"
          />
          <textarea
            className="mt-3"
            {...register("paragraph")}
            placeholder="Description"
          />
          <textarea
            className="mt-3"
            {...register("showDetails")}
            placeholder="show more details"
          />
          <input
            className="mt-3"
            type="number"
            {...register("days")}
            placeholder="How many days Travel"
          />
          <input
            className="mt-3"
            type="number"
            {...register("tours")}
            placeholder="How many tours have"
          />
          <input
            className="mt-3"
            type="number"
            {...register("ageRequire")}
            placeholder="age require"
          />
          <input
            className="mt-3"
            type="number"
            {...register("price")}
            placeholder="Travel price"
          />
          <input
            className="mt-3"
            {...register("img")}
            placeholder="Image URL"
          />
          <button type="submit" className="addbtn">
            <nav className="btn-nav">
              <ul className="btn-ul">
                <li className="btn mybtn">
                  Submit
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </nav>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;