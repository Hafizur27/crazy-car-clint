import service1 from "../../../../assets/service1.jpg";
import service2 from "../../../../assets/service2.jpg";
import service3 from "../../../../assets/service3.jpg";

const Service = () => {
  return (
   <div className="my-10">
     <h2 className="text-4xl font-bold text-center  mb-10">
        Why We<span className="text-teal-400"> are best !</span>
      </h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 px-4" >
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-slate-600" >
        <img
          src={service1}
          alt="Toy Vehicle Listings"
          className="rounded mb-4 h-50 object-cover"
        />
        <h3 className="text-xl font-bold mb-4">Toy Vehicle Listings</h3>
        <p className="text-gray-700">
          Explore our extensive collection of toy vehicles from trusted brands.
          Whether you are looking for remote-controlled cars, miniature replicas,
          or collectible models, we have a wide range of options to satisfy
          every young car enthusiast. Each listing includes detailed
          descriptions and vibrant images for an exciting toy car shopping
          experience.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-slate-600">
        <img
          src={service2}
          alt="Toy Car Customization"
          className="rounded mb-4 h-50 object-cover"
        />
        <h3 className="text-xl font-bold mb-4">Toy Car Customization</h3>
        <p className="text-gray-700">
          Let your child creativity soar with our toy car customization
          options. We offer a variety of accessories, decals, and paint sets to
          personalize their toy cars. From racing stripes to unique designs,
          your child can create a one-of-a-kind toy car that reflects their
          style and imagination.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-slate-600">
        <img src={service3} alt="Toy Car Gifts" className="rounded mb-10 h-54 object-cover" />
        <h3 className="text-xl font-bold">Toy Car Gifts</h3>
        <p className="text-gray-700">
          Looking for the perfect gift for a young car enthusiast? Our toy car
          gifts are sure to bring joy and excitement. Whether it is a birthday,
          holiday, or special occasion, we have a selection of gift sets and
          premium toy cars that will make any child day. Explore our
          collection and find the ideal toy car gift today.
        </p>
      </div>
    </div>
   </div>
  );
};

export default Service;
