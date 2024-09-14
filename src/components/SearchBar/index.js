import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoScan } from "react-icons/io5";
import { CiMicrophoneOn } from "react-icons/ci";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    onSearch(inputValue);
  };

  return (
    <span style={{border:"1px solid black", textAlign:"center", display:"flex",flexDirection:"row", justifyContent:"space-around",alignItems:"center", marginLeft:"40%", marginRight:"40%"}}>
    <CiSearch style={{paddingRight:"5px"}}/>
      <input
        type="text"
        placeholder="Search by country or capital"
        value={query}
        onChange={handleInputChange}
        style={{ border: "none", outline: "none" }}
        
      />
      <IoScan style={{paddingLeft:"5px"}}/>
      <CiMicrophoneOn style={{paddingLeft:"5px"}}/>
    </span>
  );
};

export default SearchBar;
