/* eslint-disable react/prop-types */


const CreationImageCard = ({image1, image2, image3, image4, image5}) => {
    return (
        <div className="grid grid-cols-12 gap-3">
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src={image1}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-8">
              <img
                className="rounded-lg h-[250px] w-full"
                src={image2}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src={image3}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src={image4}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src={image5}
                alt=""
              />
            </div>
          </div>
    );
};

export default CreationImageCard;