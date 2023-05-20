import {  useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


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
        <div>
            {myToys.length}
        </div>
    );
};

export default MyToys;
