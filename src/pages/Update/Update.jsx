import { useLoaderData } from "react-router-dom";
import update from "../../assets/update.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";

const Update = () => {

  const UpdateToy = useLoaderData();
  console.log(UpdateToy)
  const {price, quantity, description, _id} = UpdateToy;
    const handelUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateToyInfo = {price, quantity, description};
       fetch(`http://localhost:5000/myToys/${_id}`,{
        method: "PUT",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(updateToyInfo)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
              title: 'Success!',
              text: 'Toy Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
          })
      }
      event.target.reset();
      

       })


    };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div className="px-10 pt-10 shadow-xl rounded">
              <Lottie animationData={update} loop={true} className="" />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h3 className="text-xl font-bold">please update now !!</h3>
              <hr/>
              <form onSubmit={handelUpdate}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Update price"
                    name="price"
                    defaultValue={price}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Update quantity"
                    name="quantity"
                    defaultValue={quantity}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Update description"
                    name="description"
                    defaultValue={description}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="update now"
                    className="btn btn-outline btn-warning"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
