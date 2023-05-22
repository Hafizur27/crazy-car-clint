import { Link } from "react-router-dom";
import banner from "../../../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="hero min-h-screen relative" style={{ backgroundImage: `url(${banner})` }} data-aos="flip-left">
 
  
 
  <div className="hero-content text-center absolute text-neutral-content bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 bottom-0 left-0 right-0 lg:flex lg:justify-start">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Perfect Toy Car at Unbeatable Prices</h1>
      <p className="mb-5">Explore Our Range of High-Quality Car Toys for Endless Entertainment . Let Your Little Ones Embark on Exciting Car Toy Journeys.</p>
      <Link to='/allToys'><button className="btn btn-outline btn-warning hover:bg-orange-700">Explore Toy</button></Link>
    </div>
  </div>
  
</div>
    );
};

export default Banner;