import Image from "next/image";
const icons = [
  "facebook-icon",
  "instagram-icon",
  "twitter-icon",
  "linkedin-icon",
];
const Footer = () => {
  return (
    <footer className="bg-blue-0 text-base px-5 text-white font-normal pb-10 pt-12 md:text-2xl md:pt-28 md:px-10">
      <div className="flex flex-col space-y-8 justify-between xl:flex-row xl:space-y-0">
        {" "}
          <div className="space-y-2 md:space-y-8">
            <div>Please <span className="text-blue-4">Subscribe</span> to our newsletter</div>
            <div className="flex w-full">
              <input type="text" className="w-full" />
              <div className="py-1.5 pr-3 bg-white">
                <button className="bg-blue-4 py-1 text-base w-16">
                  I'm In
                </button>
              </div>
            </div>
          </div>
        <div className="flex space-x-4 md:ml-auto">
          <div className="space-y-4">
            <div>Services</div>
            <div>Carrer</div>
            <div>FAQs</div>
          </div>
          <div className="space-y-4">
            <div>About</div>
            <div>Blog</div>
            <div>Registration</div>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <div>Follow us on Social media</div>
          <div className="flex space-x-8">
            {icons.map((icon, index) => (
              <Image
                key={index}
                className="w-auto h-auto"
                alt={icon}
                height={30.72}
                width={30.72}
                src={`images/icon/${icon}.svg`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 mt-20 text-sm font-normal text-lg text-center pt-5">
        Property of <span className="font-bold">opulencedeveloper.com</span>{" "}
        2023, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;