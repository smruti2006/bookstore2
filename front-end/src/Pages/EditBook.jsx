import React, { useState,useEffect } from "react";
import Spinner from "../Comonents/Spinner"
import axios from 'axios'
import {useNavigate, useParams} from "react-router-dom"
const EditBook = () => {
  const [title,setTitle]=useState('')
  const [publisher,setPublisher]=useState('')
  const [publishyear,setPublishYear]=useState('')
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const {id}=useParams()
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3000/book/${id}`)
    .then((Response)=>{
      setPublisher(Response.data.book.publisher)
      setPublishYear(Response.data.book.publishyear)
      setTitle(Response.data.book.title)
      setLoading(false)
    }).catch((error)=>{
      setLoading(false)
      alert("An error happpened please check console")
      console.log(error)
    })
  },[id])
  const handleEditBook= ()=>{
    const data={
      title,
      publisher,
      publishyear
    }
    setLoading(true)
    axios.put(`http://localhost:3000/book/update/${id}`,data)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((error)=>{
      setLoading(false)
      alert("An Error happened. Please check console")
      console.log(error)
    })
  }
  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl my-4">Edit Book</h1>
        {loading ? <Spinner/> : ""}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input 
            type="text"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publishyear</label>
            <input 
            type="text"
            value={publishyear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default EditBook;
