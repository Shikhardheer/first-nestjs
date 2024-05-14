'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { useRouter } from "next/router";
export default function addcourse() {
  // const router=useRouter();
    const [bookId,setBookId]=useState("");
    const [bookTitle,setBookTitle]=useState("");
    const [bookImageUrl,setBookImageUrl]=useState("");
    const [bookPrice,setBookPrice]=useState("");
    function onSubmitHandler(e){
      e.preventDefault();
      const book={
        booId: bookId,
        bookTitle: bookTitle,
        bookImageUrl: bookImageUrl,
        bookPrice: bookPrice,
      }
    
      axios.post('https://localhost:8080/book/sendbook', book)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
    }
  return (
    <main className="flex   min-h-screen flex-col items-center justify-between p-24">
      <div className="border-2 my-4 space-y-5  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] py-3 px-3">
        <h1>Add book</h1>
        <div>
            <label htmlFor="bookId" className=" text-white" >Book Id</label>
            <input  type="text" id="bookId" value={bookId} onChange={(e)=>setBookId(e.target.value)} />
        </div>
        <div>
            <label htmlFor="bookTitle" className=" text-white">Book Title</label>
            <input type="text" id="bookTitle" value={bookTitle}onChange={(e)=>setBookTitle(e.target.value)} />
        </div>
        <div>
            <label htmlFor="bookImageUrl" className=" text-white">Book Image</label>
            <input type="text" id="bookImageUrl" value={bookImageUrl} onChange={(e)=>setBookImageUrl(e.target.value)} />
        </div>
        <div>
            <label htmlFor="bookPrice" className=" text-white">Book Price</label>
            <input type="number" id="bookPrice" value={bookPrice} onChange={(e)=>setBookPrice(e.target.value)}/>
        </div>
        <div>
            <Button type="submit" className="" onClick={(e)=>onSubmitHandler(e)}> Add</Button>
        </div>
      </div>
    </main>
  );
}