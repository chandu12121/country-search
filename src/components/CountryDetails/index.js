import React from "react";
import { useLocation } from "react-router-dom";

function CountryDetails() {
  const location = useLocation();
  const country = location.state;

  if (!country) {
    return <h2 style={{textAlign:"center"}}>Country not found!</h2>;
  }

  return (
    <div style={{display:"flex", justifyContent:"center" , marginTop:"100px"}}>
    <div style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",width:"30%" }}>
      <h2 style={{textAlign:"center"}}>{country.country} - Details</h2>
      <div style={{textAlign:"left"}}>
      <ul style={{listStyleType:"none"}}>
        <li><strong>Capital:</strong> {country.capital}</li>
        <li><strong>Population:</strong> {country.population.toLocaleString()}</li>
        <li><strong>Official Language:</strong> {Array.isArray(country.official_language) ? country.official_language.join(", ") : country.official_language}</li>
        <li><strong>Currency:</strong> {country.currency}</li>
      </ul>
      </div>
    </div>
    </div>
  );
}

export default CountryDetails;
