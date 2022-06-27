import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from '../store/auh/auth.actions';

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(logoutAPI());
  };
  return (
    <div style={{display:"flex",gap:"30px"}}>
        <Link to="/">Counter</Link> 
        <Link to="/todoapp">TodoApp</Link>
        <Link to="/complete">Complete</Link>
        <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  )
}

export default Navbar