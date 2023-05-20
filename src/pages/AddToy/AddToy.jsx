import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToy = () => {

    const {user} = useContext(AuthContext);

    const handelAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const addedToyInfo ={ photo, name, seller, email, category, description, price, rating, quantity }
        console.log(addedToyInfo);


    };

  return (
    <div className=" min-h-screen bg-base-200">
      
      <form className="hero-content" onSubmit={handelAddToy}>
      
        <div className=" w-full card shadow-2xl bg-base-100">
        <h3 className="text-3xl font-bold text-center mt-4 text-teal-400">Please add a toy !!</h3>
          <div className="card-body w-5/6 mx-auto">
            <div className="flex gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo of Toy</span>
                </label>
                <input
                  type="photo"
                  placeholder="Enter Toy Photo"
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name of Toy"
                  name="name"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name of Seller"
                  name="seller"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Seller Email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="category"
                >
                  <option disabled selected>
                    Please select one !!
                  </option>
                  <option>Sports</option>
                  <option>Truck</option>
                  <option>Regular</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description of Toy"
                  name="description"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price of Toy"
                  name="price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="Available Quantity"
                  name="quantity"
                  className="input input-bordered"
                />
              </div>
            </div>
            

            <div className="form-control mt-6 w-1/5 mx-auto">
              <input
                type="submit"
                value="Add Toy"
                className="btn bg-red-700"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;