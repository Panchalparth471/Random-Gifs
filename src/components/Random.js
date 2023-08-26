import axios from "axios";
import Spinner from "../Spinner";
import { useEffect, useState } from "react";

function Random() {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const response = await axios.get(url);
    setLoading(false);
    setGif(response.data.data.images.downsized_large.url);
  
  }
  
  useEffect(() => {
    fetchData();
  },[])


  function clickHandler() {
    fetchData();
  }



  return (
    <div className="rounded-xl bg-green-500 border border-black w-1/2 h-[450px] flex flex-col items-center justify-evenly mt-5">
      <h1 className=" mt-[15px] underline text-2xl font-bold">A RANDOM GIF</h1>
    {loading?(<Spinner></Spinner>):(  <img src={gif} className=" w-[250px] h-[250px] "></img>)}
    
      <button className="text-center bg-white rounded-lg w-[80%] px-2 py-2 font-bold opacity-60 text-black hover:opacity-100" onClick={clickHandler}>GENERATE</button>
    </div>);

}
export default Random;