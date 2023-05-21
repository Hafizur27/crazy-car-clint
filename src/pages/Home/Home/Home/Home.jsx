import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import ToyGallery from "../ToyGallery/ToyGallery";
import ToysCategories from "../ToysCategories/ToysCategories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Crazy Car</title>
      </Helmet>
      <Banner></Banner>
      <ToyGallery></ToyGallery>
      <ToysCategories></ToysCategories>
    </div>
  );
};

export default Home;
