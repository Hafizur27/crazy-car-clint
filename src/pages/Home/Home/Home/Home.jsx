import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import ToyGallery from "../ToyGallery/ToyGallery";
import ToysCategories from "../ToysCategories/ToysCategories";
import AboutUs from "../../../AboutUs/AboutUs";
import Service from "../Services/Service";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Crazy Car</title>
      </Helmet>
      <Banner></Banner>
      <ToyGallery></ToyGallery>
      <ToysCategories></ToysCategories>
      <AboutUs></AboutUs>
      <Service></Service>
      
    </div>
  );
};

export default Home;
