import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchinputform.css";

const SearchInputForm = ({ darkTheme }) => {
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const redirectToSearch = () => {
    if (searchField === "") {
      alert("SearchField is Empty");
    } else {
      navigate("/search", { state: searchField });
    }
  };

  return (
    <div
      className={`search-input-form-container ${
        darkTheme ? "dark-box-shadow" : "light-box-shadow"
      }`}
    >
      <input
        type="text"
        className="search-input"
        placeholder="Surask knygą, kuri tau labai patinka"
        value={searchField}
        onChange={handleChange}
      />
      <button onClick={redirectToSearch} className="search-button">
        Ieškoti
      </button>
    </div>
  );
};

export default SearchInputForm;
