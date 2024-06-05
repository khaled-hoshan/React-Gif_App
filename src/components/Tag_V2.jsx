import React, { useState } from "react";
import useGif from "../useGif";

function Tag_V2() {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Tag</h1>
      <img width="500" src={gif} alt="gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>Click For New {tag} Gif</button>
    </div>
  );
}

export default Tag_V2;
