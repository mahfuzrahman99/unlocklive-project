import footerBg from "../../assets/footer-bg.jpg";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto py-5 md:flex justify-between items-center">
        <div>
          <img
            className="h-[50px] w-[] "
            src="/src/assets/footer-logo.png"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center gap-10 text-white mt-2">
            <p><a>Terms</a></p>
            <p><a>Policy</a></p>
            <p><a>Cookies</a></p>
        </div>
        <div className="flex justify-center items-center gap-3">
            <span className="text-white text-xl rounded-full p-1 border"><FaLinkedinIn /></span>
            <span className="text-white text-xl rounded-full p-1 border"><FaFacebookF /></span>
            <span className="text-white text-xl rounded-full p-1 border"><FaTwitter /></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
