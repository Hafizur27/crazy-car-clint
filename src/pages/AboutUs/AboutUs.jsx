import about from "../../assets/about.jpg"

const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start p-8 shadow-xl my-10 "  data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine">
        <img
          src={about}
          alt="Toy Car Selling Website"
          className="w-64 h-72 rounded-lg object-cover"
        />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">About us</h2>
          <p className="text-lg text-gray-700">
            At our toy car selling website, we offer a wide selection of toy cars for children of all ages. Our mission is to provide high-quality, safe, and exciting toy cars that inspire imagination and play. 
          </p>
          <p className="mt-4 text-lg text-gray-700">
            We carefully curate our collection, ensuring that each toy car meets the highest standards of craftsmanship and durability. From miniature replicas of popular vehicles to remote-controlled cars with advanced features, we have something for every young car enthusiast.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Our website provides a user-friendly browsing experience, allowing you to explore our diverse range of toy cars easily. We provide detailed descriptions, vibrant images, and customer reviews to help you make informed decisions and find the perfect toy car for your child or as a gift.
          </p>
          
        </div>
      </div>
    );
};

export default AboutUs;