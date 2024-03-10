


const PlayIntro = () => {
  return (
    <div className=" flex justify-between max-w-5xl mx-auto">
      <div className="bg-[] mr-5 w-[200px]">
        <img className="w-[200px] h-[200px]" src="/src/assets/intro-image.png" alt="" />
      </div>
      <div className="text-center  py-6">
        <h1 className="text-xl font-semibold">Our Opening Hours</h1>
        <p>Mon - Sat: 07:00 - 18:00</p>
        <p>Only Sun: 09:00 - 14:00</p>
      </div>
      <div className="text-center py-6">
        <h1 className="text-xl font-semibold">Our Live Location</h1>
        <p>848 A 28TH ST, Brooklyn <br /> New York, UK</p>
      </div>
      <div className=" py-6">
        <h1 className="text-xl font-semibold">Book A Table Now</h1>
        <p>+1 318-254-6849</p>
        <p>+1 452-754-6579</p>
      </div>
    </div>
  );
};

export default PlayIntro;
