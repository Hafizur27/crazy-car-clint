import { GrCycle } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyRow = ({ toyRow, myToys, setMyToys }) => {
  const {
    photo,
    name,
    seller,
    email,
    category,
    price,
    rating,
    quantity,
    _id
  } = toyRow;

  const handelDelete = id =>{
    console.log(id);
     
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    
    fetch(`https://crazy-car-server.vercel.app/toys/${id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount > 0){
        Swal.fire(
          'Deleted!',
          'Toy has been deleted.',
          'success'
        )
        const remaining = myToys.filter(toy => toy._id !== _id);
        setMyToys(remaining);
       
      }
    })
  }
})

  }

  return (
    <tr>
      <th>{seller}</th>

      <td>{email}</td>
      <td>{name}</td>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/${_id}`} className="btn bg-blue-500 border-none">
          <GrCycle />
        </Link>
      </td>
      <td>
        <button onClick={()=>handelDelete(_id)} className="btn bg-red-600 border-none">
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

export default MyToyRow;
