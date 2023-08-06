import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import ToyGallery from "../ToyGallery/ToyGallery";
import ToysCategories from "../ToysCategories/ToysCategories";
import AboutUs from "../../../AboutUs/AboutUs";
import Service from "../Services/Service";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Reviews from "../../../Reviews/Reviews";
import TopBrand from "../TopBrand/TopBrand";
import UpcomingToys from "../../UpcomingToys/UpcomingToys";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Crazy Car</title>
      </Helmet>
      <Banner></Banner>
      <ToyGallery></ToyGallery>
      <ToysCategories></ToysCategories>
      <UpcomingToys></UpcomingToys>
      <TopBrand></TopBrand>
      <Service></Service>
      <Reviews></Reviews>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
