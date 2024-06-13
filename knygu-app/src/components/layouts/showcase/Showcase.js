import React from "react";
import "./showcase.css";
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchInputForm/SearchInputForm";

const Showcase = () => {
  return (
    <section className="showcase-container">
      <Navbar darkTheme={false} />

      <div className="overlay"></div>
      <div className="showcase-content">
        <h1>
          Geriausios <span className="text-primary">knygos</span> yra čia
        </h1>
        <SearchInputForm darkTheme={true} />
      </div>
    </section>
  );
};

export default Showcase;
