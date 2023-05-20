import { useLoaderData } from "react-router-dom";


const AllToys = () => {
  const allToys = useLoaderData();
  return (
    <div className="overflow-x-auto my-10 p-8">
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
       {
        allToys?.map(toy =>  <tbody key={toy._id}>
            <tr>
              <th>{toy.seller}</th>
              <td>{toy.name}</td>
              <td>{toy.category}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td><button className="btn bg-red-600">Details</button></td>
              
            </tr>
          </tbody>)
       }
      </table>
    </div>
  );
};

export default AllToys;
