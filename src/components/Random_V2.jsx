import React from "react";
import useGif from "../useGif";

function Random_V2() {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random</h1>
      <img width="500" src={gif} alt="gif" />
      <button onClick={fetchGif}>Click For New Gif</button>
    </div>
  );
}

export default Random_V2;
