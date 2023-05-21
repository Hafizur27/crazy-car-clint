import Lottie from "lottie-react";
import toy1 from "../../../../assets/toy/toy1.json";
import toy2 from "../../../../assets/toy/toy2.json";
import toy3 from "../../../../assets/toy/toy3.json";
import toy4 from "../../../../assets/toy/toy4.json";
import toy5 from "../../../../assets/toy/toy5.json";
import toy6 from "../../../../assets/toy/toy6.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ToyGallery = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="mt-4 mb-10">
      <h2 className="text-4xl font-bold text-center text-teal-400">
        Toy Gallery
      </h2>
      
        <div className="card w-full shadow-xl grid grid-col-1 md:grid-cols-3 space-x-4 space-y-4">
        <div className="px-10 pt-10 shadow-xl rounded"  data-aos="fade-up-left">
            <Lottie animationData={toy4} loop={true} className="" />
          </div>
        <div className="px-10 pt-10 shadow-xl rounded"  data-aos="fade-up-left">
            <Lottie animationData={toy3} loop={true} className="" />
          </div>
          
          <div className="px-10 pt-10 shadow-xl rounded"  data-aos="fade-up-left">
            <Lottie animationData={toy2} loop={true} className="" />
          </div>
          
         
          <div className="px-10 pt-10 shadow-xl rounded"  data-aos="fade-up-left">
            <Lottie animationData={toy5} loop={true} className="" />
          </div>
          <div className="px-10 pt-10 shadow-xl rounded"  data-aos="fade-up-left">
            <Lottie animationData={toy6} loop={true} className="" />
            
          </div>
          <div className="px-10 pt-10 shadow-xl rounded"  data-aos="fade-up-left">
            <Lottie animationData={toy1} loop={true} className="" />
          </div>
        
        </div>
      
    </div>
  );
};

export default ToyGallery;
