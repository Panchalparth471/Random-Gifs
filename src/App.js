import React from "react";
import Tag from "./components/Tag";
import Random from "./components/Random";
function App() {
  return (
  <div className= "w-full h-full flex flex-col background items-center relative overflow-x-hidden"> 
       <h1 className="w-11/12 bg-white rounded-md text-center mt-[40px] px-10 py-2 text-2xl font-bold">RANDOM GIFS</h1>
  <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">
      <Random></Random>
      <Tag></Tag>
      </div>
       </div>
  );
}

export default App;
