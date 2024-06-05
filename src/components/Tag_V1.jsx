import axios from "axios";
import React, { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

function Tag_V1() {
  const [tag, setTag] = useState("dogs");
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Tag_V1</h1>
      <img width='500' src={gif} alt="gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Click For New {tag} Gif</button>
    </div>
  );
}

export default Tag_V1;
