import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Toy = ({ toy }) => {
  const {user} = useContext(AuthContext);
  const { photo, name, price, rating } = toy;
  const handelDetails = () =>{
    if(user?.email){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<LinK to="/register"/>Register Now</Link>'
      })
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
          <p>Ratings : {rating}</p>
          <div className="">
            <button onClick={handelDetails} className="btn bg-red-700"> Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
