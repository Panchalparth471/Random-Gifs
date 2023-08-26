import axios from "axios";
import Spinner from "../Spinner";
import { useEffect } from "react";
import { useState } from "react";

function Tag() {
      const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const [gif, setGif] = useState("");
  const randUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);


  function changeHandler(event) {
    setName(event.target.value);
  }
  
  async function searchGif() {
    let response="";
     setLoading(true);
     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${name}`;
     if (name === "") {
       response = await axios.get(randUrl);
     }
     else {
       response = await axios.get(url);
     }
     setLoading(false);
     console.log(response);
    setGif(response.data.data.images.downsized_large.url);
  
      console.log("url is "+gif);
      
  }
  useEffect(() => {
    searchGif();
  },[])

  function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) +min;
}

  function clickHandler() {
    searchGif();
  }


  return (
    <div className="rounded-xl bg-white border border-black w-1/2 h-[450px] flex flex-col items-center justify-evenly mt-5">
      <h1 className="underline text-2xl font-bold uppercase">a random {name} gif</h1>
    {loading?(<Spinner></Spinner>):(  <img src={gif} className=" w-[250px] h-[250px] "></img>)}
    <input type="text" id="search" placeholder="Search" onChange={changeHandler} className="w-[80%] rounded-lg bg-black text-white text-center"></input>
    <button className="text-center bg-black hover:bg-gray-800 rounded-lg w-[80%] px-2 py-2 font-bold text-white" onClick={clickHandler}>GENERATE</button>
  </div>);
}

export default Tag;
