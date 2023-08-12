import Lottie from "lottie-react";
import toy1 from "../../../../assets/toy/toy1.json";
import toy2 from "../../../../assets/toy/toy2.json";
import toy3 from "../../../../assets/toy/toy3.json";
import toy4 from "../../../../assets/toy/toy4.json";
import toy5 from "../../../../assets/toy/toy5.json";
import toy6 from "../../../../assets/toy/toy6.json";


const ToyGallery = () => {
 
  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        Toy <span className="text-teal-400">Gallery</span>
      </h2>

      <div className="card w-full shadow-xl grid grid-col-1 md:grid-cols-3 space-x-4 space-y-4 pb-4 pr-4">
        <div className="px-10 pt-10 mt-3.5 ml-3.5 shadow-xl rounded border-4 border-slate-600">
          <Lottie animationData={toy4} loop={true} className="" />
        </div>
        <div className="px-10 pt-10 shadow-xl rounded border-4 border-slate-600">
          <Lottie animationData={toy3} loop={true} className="" />
        </div>

        <div className="px-10 pt-10 shadow-xl rounded border-4 border-slate-600">
          <Lottie animationData={toy2} loop={true} className="" />
        </div>

        <div className="px-10 pt-10 shadow-xl rounded border-4 border-slate-600">
          <Lottie animationData={toy5} loop={true} className="" />
        </div>
        <div className="px-10 pt-10 shadow-xl rounded border-4 border-slate-600">
          <Lottie animationData={toy6} loop={true} className="" />
        </div>
        <div className="px-10 pt-10 shadow-xl rounded border-4 border-slate-600">
          <Lottie animationData={toy1} loop={true} className="" />
        </div>
      </div>
    </div>
  );
};

export default ToyGallery;
