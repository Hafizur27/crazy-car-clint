import footer from "../../../assets/logo.png";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { SiAdguard } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" footer p-10 bg-neutral text-neutral-content">
      <div>
      <p className="font-bold text-lg lg:text-4xl lg:ml-11">
          Crazy <span className="text-red-500">Car</span>
        </p>
        <img src={footer} alt="" className="w-1/2" />
       
      </div>

      <div>
        <span className="footer-title">branches</span>
        <a className="link link-hover">Dhaka</a>
        <a className="link link-hover">Rajshahi</a>
        <a className="link link-hover">khulna</a>
      </div>

      <div>
        <span className="footer-title">Contact Info</span>
        <a className="link link-hover">Phone: +008-999-555-888</a>
        <a className="link link-hover">Email: info@gmail.com</a>
      </div>
      <div>
        <span className="footer-title"><SiAdguard className="w-8 h-8 text-rose-600" /></span>
        <a className="link link-hover">
          <BsFacebook className="w-6 h-6 text-blue-600" />
        </a>
        <a className="link link-hover">
          <BsTwitter className="w-6 h-6 text-blue-600" />
        </a>
        <a className="link link-hover">
          <BsYoutube className="w-6 h-6 text-red-600" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
