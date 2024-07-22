import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";
import '../App.css'
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => {
      console.log(memes);
      setData(memes.data.memes);
    });
  }, []);

  return (
    <div className="row container">
      {data.map((meme) => (
        <MemeCard key={meme.id} img={meme.url} title={meme.name} />
      ))}
    </div>
  );
};

export default Home;
