import playIntro from "../../assets/intro-image.png"


const PlayIntro = () => {
  return (
    <div className=" md:flex justify-between max-w-5xl mx-auto">
      <div className="bg-[] md:mr-5 md:w-[200px] flex justify-center">
        <img className="w-[200px] md:h-[200px]" src={playIntro} alt="" />
      </div>
      <div className="text-center  py-6">
        <h1 className="text-xl font-semibold font-abril">Our Opening Hours</h1>
        <p className="font-valueSanse">Mon - Sat: 07:00 - 18:00</p>
        <p className="font-valueSanse">Only Sun: 09:00 - 14:00</p>
      </div>
      <div className="text-center py-6">
        <h1 className="text-xl font-semibold font-abril">Our Live Location</h1>
        <p className="font-valueSanse">848 A 28TH ST, Brooklyn <br /> New York, UK</p>
      </div>
      <div className="text-center md:text-left py-6">
        <h1 className="text-xl font-semibold font-abril">Book A Table Now</h1>
        <p className="font-valueSanse">+1 318-254-6849</p>
        <p className="font-valueSanse">+1 452-754-6579</p>
      </div>
    </div>
  );
};

export default PlayIntro;
