'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
export default function Home() {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    async function getNews() {
        const apiKey = "65289642fedd44ac8d7e4ea936306d11";
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apiKey}`
        );
        setArticles(response.data.articles);
        console.log(response)
    }
    getNews();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div >
        {articles.map((article, index) => (
          <div key={index}>
            <Link href="article.url"> 
            <div className="border-2 my-4 space-y-5  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] py-3 px-3 text-white">
            
            <h2 className="underline bold"> {article.title}</h2>
            
            <p>{article.description}</p>
            <div >
            {/* <img className="img" src={article.urlToImage==null?"https://c8.alamy.com/comp/2H5RADC/globe-world-news-flat-icon-vector-illustration-news-symbol-logo-illustration-2H5RADC.jpg" :article.urlToImage}alt="" /> */}
            </div>
            
            </div>
           
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
