
import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";




const AllToys = () => {
  
  const allToys = useLoaderData();

  
  return (
    <div className="overflow-x-auto my-8 p-8">
      <h3 className="text-3xl font-bold text-teal-500 mb-8">
        All crazy cars Information
      </h3>
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
