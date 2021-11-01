import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';
import useAuth from '../../hooks/useAuth'
import './Header.css'
const Header = () => {
      const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavLink to='/home' className="navbar-brand" >CRUISE</NavLink>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-NavLink active" to="/home"  aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/contact' className="nav-NavLink">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about' className="nav-NavLink" >About us</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to='/userUpdate' className="nav-NavLink" >UserUpdate</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink to='/dashboard' className="nav-NavLink" >DashBoard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/booking' className="nav-NavLink" >My Booking</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/addservice' className="nav-NavLink" >Add Service</NavLink>
        </li>
        <li className="nav-item">
          <Link to="/home" className="nav-link">{user.displayName}</Link>
        </li>
        {user?.email &&
        <li className="nav-item">
          <button className="btn mybtn" onClick={logOut}>Logout</button>
        </li>}
      </ul>
      <form className="d-flex">
        <button className="m-1 rounded border-0 mybtn">Book a tour</button>
        <Link to="/login">
          <button className="m-1 rounded border-0" style={{border:'3px solid',background: "#f9676b",color:'white',padding:'6px'}}>Login</button>
        </Link>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;