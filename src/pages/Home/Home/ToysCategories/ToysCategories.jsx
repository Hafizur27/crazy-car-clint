import { useEffect, useState } from "react";
import Toy from "./Toy";

const ToysCategories = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("allToys");
  
      useEffect(()=>{
          fetch(`http://localhost:5000/toys/${activeTab}`)
          .then(res => res.json())
          .then(data =>{
              setToys(data);
          })
      },[activeTab]);
  
      const handleTabClick = (tabName) => {
          setActiveTab(tabName);
        };
    return (
        <div>
     <div className="w-1/5 mx-auto mb-12">
        <h2 className="text-teal-400 font-bold text-3xl mb-4">Toy Categories</h2>
      <div className="tabs font-extrabold">
        <a onClick={() => handleTabClick("Sports")} className="tab tab-bordered">Sport</a>
        <a onClick={() => handleTabClick("Truck")} className="tab tab-bordered ">Truck</a>
        <a onClick={() => handleTabClick("Regular")} className="tab tab-bordered">Regular</a>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2  w-11/12 mx-auto">
    {
            toys?.map(toy => <Toy key={toy._id} toy={toy}></Toy> )
        }
    </div>
   </div>
    );
};

export default ToysCategories;