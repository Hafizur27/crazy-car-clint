import {  useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyRow from "./MyToyRow/MyToyRow";


const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url =`http://localhost:5000/myToys?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setMyToys(data);
        })
    },[])
    

    return (
        <div className="overflow-x-auto my-8 p-8">
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
            {
                myToys?.map(toyRow =><MyToyRow key={toyRow._id} toyRow = {toyRow}></MyToyRow>)
            }
          </tbody>
        </table>
      </div>
    );
};

export default MyToys;
