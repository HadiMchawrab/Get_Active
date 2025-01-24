import React, { useState } from "react";
import "../styles/profile.css";

function Profile() {
  // State to track the active view
  const [view, setView] = useState('login');
  const [va, setVa] = useState('Profile'); // Dynamically change `va`

  const handleButtonClick = (newView, newVa) => {
    setView(newView); // Update the active view
    setVa(newVa); // Update the header dynamically
  };

  return (
    <div>
      <header>
        <button onClick={() => handleButtonClick('profile', 'My Profile')}>My Profile</button>
        <button onClick={() => handleButtonClick('edit', 'Edit My Courts')}>Edit my Courts</button>
        <button onClick={() => handleButtonClick('reservations', 'My Court Reservations')}>
          My Court Reservations
        </button>
      </header>
      <div>
        <div className="">
          <h1>{va}</h1>
          <h2>{view === 'login' ? 'My Profile' : va}</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
