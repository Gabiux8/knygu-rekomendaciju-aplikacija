import React, { useState, useEffect } from "react";
import "./detailsSection.css";
import { useParams } from "react-router-dom";
import { BookData } from "../../../util/BookData";

const DetailsSection = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    let newData = BookData.filter((book) => book.id === parseInt(id));
    setBookData(newData[0]);
  }, [id]);

  return (
    <section className="detail-section-container">
      <div className="container">
        <div className="flex-container">
          <div className="book-img-container">
            <img src={bookData.book_url} alt="book" />
          </div>

          <div className="book-detail-container">
            <h2>{bookData.book_name}</h2>
            <p className="text-primary">{bookData.author_name}</p>
            <p className="book-description">{bookData.book_description}</p>
            <p>
              <b>Kalba</b>: {bookData.language}
            </p>
            <p>
              <b>Puslapių skaičius</b> : {bookData.print_length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
