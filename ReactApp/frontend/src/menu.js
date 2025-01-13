import React from "react";
import { useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();
  const { email, password } = location.state || {};

  return (
    <div>
      {/* We directly fetch the data from the database given the email signed in 
      and knowing that if registered, all the data would be in the database and would be extractable*/}
      <h1>Welcome to the main menu of the app</h1>
      <h2>Email: {email || "No email provided"}</h2>
      <h2>Password: {password || "No password provided"}</h2>
    </div>
  );
}

export default Menu;
