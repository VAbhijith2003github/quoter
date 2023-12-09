import React from 'react';
import { useSelector } from 'react-redux';
import Card from './card';
import NavBar from './navbar';
import { Link } from 'react-router-dom';
import {  useDispatch } from "react-redux";
import { removeFromBookmarks } from "../features/quoter/quoterSlice";

const BookMarks = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.quoter.bookmarks);
  const handleDelete = (index) => {
    dispatch(removeFromBookmarks(index));
  };
  return (
    <>
      <NavBar />
      <div className="homepage">
        <div className="cardholder container">
          {bookmarks.map((bookmark, index) => (
            <Card
              key={index}
              quote={bookmark.content} 
              author={bookmark.author} 
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
        <div className="findmore">
          <Link className="navlink" to="/">
            <h4> Find more quotes ....</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookMarks;
