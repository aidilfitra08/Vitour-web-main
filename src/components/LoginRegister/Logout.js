import { Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./../Navbar.css";

function Logout() {
  let navigate = useNavigate();

  const logout = () => {
    // localStorage.removeItem('token-info');
    sessionStorage.clear();
    // setIsLoggedin(false);
    navigate("/");
  };

  return (
    <Button onClickCapture={logout} className="logout">
      Logout
    </Button>
  );
  // window.location.reload(true);
}

export default Logout;
