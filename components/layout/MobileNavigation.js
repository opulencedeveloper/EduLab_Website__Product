import Link from "next/link";
import { useRouter } from "next/router";

import handleWhatsAppClick from "@/helpers/whatsapp";
import Image from "next/image";

const linkContent = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "" },
    { title: "Course", link: "" },
    { title: "Pricing", link: "" },
    { title: "Blog", link: "" },
  ];

const MobileNavigation = () => {
  const router = useRouter();
  const activeLink = router.pathname;

  return (
    <div className="flex flex-col bg-blue-0 text-white w-94 h-screen w-64 pt-4 pl-[1rem] lg:hidden">
      <div className="flex justify-center items-center space-x-1 mb-4">
        <h1 className="text-xl font-medium text-white mb-4 mt-8">EduLab</h1>
      </div>
      <div className="text-xl flex flex-col items-center border-b border-secondaryshade">
        {" "}
        {linkContent.map((content, index) => {
          const textColor =
            activeLink === content.link ? "text-white" : "text-gray-0";
          return (
            <Link
              onClick={handleWhatsAppClick}
              key={index}
              className={`${textColor} mb-5`}
              href={content.link}
            >
              {content.title}
            </Link>
          );
        })}{" "}
      </div>{" "}
      <div className="text-sm flex justify-center"> Product of opulencedeveloper</div>
    </div>
  );
};

export default MobileNavigation;
