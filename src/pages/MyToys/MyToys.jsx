import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyRow from "./MyToyRow/MyToyRow";
import { Helmet } from "react-helmet";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const url = `https://crazy-car-server.vercel.app/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

  return (
    <div className="overflow-x-auto my-8 p-8">
      <Helmet>
        <title>User Toy</title>
      </Helmet>
      <h3 className="text-3xl font-bold text-teal-500 mb-8">
        User and Car Information
      </h3>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Seller</th>
            <th>Email</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {myToys?.map((toyRow) => (
            <MyToyRow
              key={toyRow._id}
              toyRow={toyRow}
              myToys={myToys}
              setMyToys={setMyToys}
            ></MyToyRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
