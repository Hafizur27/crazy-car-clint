import { GrCycle } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const MyToyRow = ({ toyRow }) => {
  const {
    photo,
    name,
    seller,
    email,
    category,
    price,
    rating,
    quantity,
  } = toyRow;
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
        <Link to='/update' className="btn bg-blue-500">
          <GrCycle />
        </Link>
      </td>
      <td>
        <button className="btn bg-red-600">
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

export default MyToyRow;
