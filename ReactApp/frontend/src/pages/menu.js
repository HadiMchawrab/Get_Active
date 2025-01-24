import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/menu.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  // const { email, password } = location.state || {};

  // Example data for courts
  const [courts] = useState([
    { id: 2, name: "Sports Ville Hamra", area: "Beirut", country: "Lebanon", sports: ["Basketball", "Tennis"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZ_mCWG2fgWH652We_GTCdYuJJaaXB_FGGw&s" },
    { id: 3, name: "Fox Sport Saida", area: "Saida", country: "Lebanon", sports: ["Football", "Swimming"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HVfXQUSYv7epy45ExhnygFh6nSIL1vmiRw&s" },
    { id: 4, name: "4B Saida", area: "Saida", country: "Lebanon", sports: ["Basketball", "Volleyball"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyhP7gw0EQZ8IOzQP0GuwFlNrw3S7D-Dyig&s" },
    { id: 5, name: "City Sport Nabatieh", area: "Nabatieh", country: "Lebanon", sports: ["Swimming", "Tennis"], image: "https://en.reformsports.com/oxegrebi/2023/10/what-is-an-olymp-swimming-pool.jpg" },
    { id: 6, name: "Streetball Saida", area: "Saida", country: "Lebanon", sports: ["Basketball", "Football"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQIa56dQ8siG3EB5rK_7G6rPDRV6dqPpNmA&s" }
  ]);

  const [areaFilter, setareaFilter] = useState("");
  const [sportFilter, setSportFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");



  const handleAreaFilterChange = (e) => {
    setareaFilter(e.target.value);
  };

  const handleCountryFilterChange = (e) => {
    setCountryFilter(e.target.value);
  };

  const handleSportFilterChange = (e) => {
    setSportFilter(e.target.value);
  }

  const handleProfileButton = () => {
    navigate("/profile");
  }

  const filteredCourts = courts.filter(
    (court) =>
      court.area.toLowerCase().includes(areaFilter.toLowerCase()) &&
      court.country.toLowerCase().includes(countryFilter.toLowerCase()) &&
      court.sports.some(sport => sport.toLowerCase().includes(sportFilter.toLowerCase()))
  );

  return (
    <div className="menu">
      <header className="menu-header">
        <h1>Welcome to the Main Menu</h1>
        <button className = "profile-button" onClick ={handleProfileButton}>Profile</button>
      <div className="filter-input-group">
        <input
          type="text"
          placeholder="Filter by area"
          className="filter-input"
          value={areaFilter}
          onChange={handleAreaFilterChange}
        />
          <input
            type="text"
            placeholder="Filter by country"
            className="filter-input"
            value={countryFilter}
            onChange={handleCountryFilterChange}
          />
          <input
            type="text"
            placeholder="Filter by sport"
            className="filter-input"
            value={sportFilter}
            onChange={handleSportFilterChange}
          />
        </div>
      </header>
      <div className="court-cards">
        {filteredCourts.map((court) => (
          <div key={court.id} className="court-card">
            <img src={court.image} alt={court.name} className="court-image" />
            <h2 className="court-name">{court.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
