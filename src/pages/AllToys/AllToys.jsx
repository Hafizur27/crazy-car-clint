import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AllToys = () => {
  const loadedAllToys = useLoaderData();
  const [allToys, SetAllToys] = useState(loadedAllToys);
  const [searchText, setSearchText] = useState("");

  const handelToySearch = () => {
    fetch(`https://crazy-car-server.vercel.app/searchToyByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        SetAllToys(data);
      });
  };

  return (
    <div className="overflow-x-auto my-8 p-8">
      <Helmet>
        <title>Toy Information</title>
      </Helmet>
      <h3 className="text-3xl font-bold mb-8">
        All crazy cars <span className="text-teal-500 ">Information</span>
      </h3>
      <div className="mb-4">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search toy here"
          className="input input-bordered w-full max-w-xs"
        />
        <button onClick={handelToySearch} className="btn btn-outline ml-2 text-red-400">
          Search
        </button>
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
          {allToys?.map((toy) => (
            <ToyRow key={toy._id} toy={toy}></ToyRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
