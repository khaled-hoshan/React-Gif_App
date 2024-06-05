import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

function Random_V1() {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url); // promise
    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };

  //COMPONENT DID MOUNT .... first render
  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random_Gif</h1>
      <img width="500" src={gif} alt="random gif" />
      <button onClick={handleClick}>Click For New GIF</button>
    </div>
  );
} //

export default Random_V1;
