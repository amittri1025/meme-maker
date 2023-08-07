
import React, { useEffect, useState, createContext } from "react";


export const MemeContext = createContext();

const MemeProvider = ({ children }) => {
  const [memeData, setMemeData] = useState([]);

  // useEffect(() => {
  //   const url = "https://api.imgflip.com/get_memes";

  //   const fetchImages = async()=>{
  //     const res = await fetch(url);
  //     const rec_data = await res.json();
  //     setMemeData(rec_data.data.memes);
  //   }

  //   fetchImages();
  // }, []);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes", {
      method: "GET",
      credentials: "omit", // or "same-origin"
    })
      .then((response) => response.json())
      .then((rec_data) => {
        // Handle the API response data
        setMemeData(rec_data.data.memes);
      })
      .catch((error) => {
        // Handle errors
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <MemeContext.Provider value={{ memeData }}>{children}</MemeContext.Provider>
  );
};

export default MemeProvider;
