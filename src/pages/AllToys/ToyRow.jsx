import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ToyRow = ({toy}) => {
    const {user} = useContext(AuthContext);
    const {seller, name, category, price, quantity, _id} = toy;
    const handelDetails = (id) => {
        console.log(id);
        if (!user?.email) {
          Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "log in first to view details",
            text: "You have to log in first to view details!",
            showConfirmButton: false,
            timer: 3000,
          });
    
          window.location.href = "/logIn";
        }
      };

    return (
        <tr>
             
        <th>{seller}</th>
        
         <td>{name}</td>
         <td>{category}</td>
         <td>{price}</td>
         <td>{quantity}</td>
         <td><Link to={`/allToys/${_id}`}><button onClick={() => handelDetails(_id)} className="btn bg-red-600 border-none">Details</button></Link></td>
         
       </tr>
    );
};

export default ToyRow;