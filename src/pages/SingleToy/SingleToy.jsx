import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const singleToyDetails = useLoaderData();
  const {
    photo,
    name,
    category,
    description,
    price,
    rating
  } = singleToyDetails;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-3xl text-zinc-500">{name}</h2>
        <div className="flex gap-3 mt-4">
        <p><span className="font-bold">Price:</span> {price}</p>
       <p><span className="font-bold ">Toy-type :</span> {category}</p>
        </div>
        <p className="w-1/3">{description}</p>
       
       
        <p><span className="font-bold">Ratings :</span> {rating} stars</p>
        
      </div>
    </div>
  );
};

export default SingleToy;
