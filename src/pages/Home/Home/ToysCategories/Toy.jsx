import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Toy = ({ toy }) => {
  const {user} = useContext(AuthContext);
  const { photo, name, price, rating } = toy;

  
  const handelDetails = () =>{
    if(!(user?.email)){
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'log in first to view details',
        text: 'You have to log in first to view details!',
        showConfirmButton: false,
        timer: 2000
      })
      window.location.href = "/logIn";
     
    }
  }
  return (
    <div>
      <div className="card h-screen bg-base-100 shadow-xl mb-4 mr-4">
        <figure>
          <img src={photo} alt="Shoes" className=""/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price : {price}</p>
          <p>Ratings : {rating} star</p>
          <div className="">
            <button onClick={handelDetails} className="btn bg-red-500"> Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
