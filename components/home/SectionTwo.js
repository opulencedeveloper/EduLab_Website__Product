import Image from "next/image";
const sectionTwoContents = [
  {
    image: "people",
    title: "Network with learners",
    description:
      "Meet energeritic and aspiring learners, lean, make friends and have fun while at it",
  },
  {
    image: "fivestarbadge",
    title: "Earn a badge",
    description:
      "After learning, you could earn a badge to increase your learning and visibility to other learners",
  },
  {
    image: "certificate",
    title: "Get Certified",
    description:
      "Certificates are given to only those that have complete their learnings",
  },
];

const SectionTwo = () => {
  return (
    <div className="px-5 px-10 mt-80 mb-48 text-center">
      <div className="text-3xl font-semibold text-blue-0 mb-3">
        Benefits of Joining Us?
      </div>
      <p className="text-gray-1 font-light max-w-3xl mx-auto mb-10">
        Check out all the unique benefits for joining us, realize that we are
        one big and unique family that do things together and achieve together.
      </p>
      <div className="flex flex-wrap justify-evenly items-center mx-auto max-w-6xl">
        {sectionTwoContents.map((content, index) => (
          <div
            key={index}
            className="bg-white mb-2 max-w-xs space-y-8 h-80 px-5 pt-7 pb-16 rounded-md"
          >
            <div className="mx-auto bg-blue-1 h-20 w-20 flex items-center rounded-full shadow-xl overflow-hidden">
              <Image
                src={`/images/icon/${content.image}-icon.svg`}
                loading="eager"
                priority
                width={31}
                height={31}
                className="h-auto w-auto m-auto"
              />
            </div>
            <div className="text-xl font-medium text-center">
            {content.title}
            </div>
            <p className="font-light text-sm text-start">
            {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
