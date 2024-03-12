import footerBg from "../../assets/footer-bg.jpg";
import footerLogo from "../../assets/footer-logo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="font-valueSanse"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto py-5 md:flex justify-between items-center space-y-2">
        <div className="flex justify-center">
          <img
            className="h-[30px] md:h-[50px] w-[] "
            src={footerLogo}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center gap-5 md:gap-10 text-white mt-2">
            <p><a className="font-valueSanse">Terms</a></p>
            <p><a className="font-valueSanse">Policy</a></p>
            <p><a className="font-valueSanse">Cookies</a></p>
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
