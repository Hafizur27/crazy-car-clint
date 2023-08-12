import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";

const Toy = ({ toy }) => {
  const {user} = useContext(AuthContext);
  const { photo, name, price, rating, _id  } = toy;

  
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
    <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine">
      <div className="card h-screen bg-base-100 shadow-xl mb-4 mr-4">
        <figure>
          <img src={photo} alt="toys" className="w-full h-96"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="flex items-center gap-1">Price : {price}<TbCurrencyTaka className="text-orange-500 h-4 w-4"/></p>
          <p>Ratings : {rating} star</p>
          <div className="">
           <Link to={`/allToys/${_id}`}> <button onClick={handelDetails} className="btn bg-red-500 border-none"> Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
