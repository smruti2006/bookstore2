import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../Comonents/Spinner";
const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/book/${id}`)
      .then((Response) => {
        setBook(Response.data.book);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl my-4">Show Book</h1>
        {loading ? (
          <Spinner/>
        ) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl mr-4">Id</span>
              <span>{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4">Publish Year</span>
              <span>{book.publishyear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4">Publisher</span>
              <span>{book.publisher}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4">Created At</span>
              <span>{book.createdAt}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4">Updated At</span>
              <span>{book.updatedAt}</span>
            </div>
          </div>
        )

        }
      </div>
    </>
  );
};

export default ShowBook;
