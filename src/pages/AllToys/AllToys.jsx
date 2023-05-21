
import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";
import { useState } from "react";




const AllToys = () => {
  
  const loadedAllToys = useLoaderData();
  const [allToys, SetAllToys] = useState(loadedAllToys);
  const [searchText, setSearchText] = useState('');

  const handelToySearch = () =>{
    fetch(`http://localhost:5000/searchToyByText/${searchText}`)
    .then(res => res.json())
    .then(data => {
      SetAllToys(data);
    })
  }
  

  
  return (
    <div className="overflow-x-auto my-8 p-8">
      <h3 className="text-3xl font-bold text-teal-500 mb-8">
        All crazy cars Information
      </h3>
      <div className="mb-4">
      <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search toy here" className="input input-bordered w-full max-w-xs" />
      <button onClick={handelToySearch} className="btn btn-outline ml-2">Search</button>
      </div>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Seller</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            allToys?.map(toy =><ToyRow key={toy._id} toy={toy}></ToyRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
