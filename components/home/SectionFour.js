import Image from "next/image";
const sectionFourContents = [
  "How can i get started?",
  "Are there any restrictions?",
  "Are there learners?",
  "When did this website start?",
  "What if i don't find my desired course?",
  "What can i do here?",
];
const SectionFour = () => {
  return (
    <div className="px-5 mb-40">
      <h5 className="text-center font-semibold text-2xl text-blue-3 mb-5 md:text-4xl">
        Frequently Asked Questions
      </h5>
      <p className="max-w-xl mx-auto text-gray-0 bg-blue-2 mb-5 px-5 py-4 text-base md:text-lg">
        Edulab is an online platform for learners to network and ask questions
        regarding their area of interest. Learners could also take certification
        courses.
      </p>
      {sectionFourContents.map((content, index) => (
        <div
          key={index}
          className="flex items-center mx-auto max-w-xl space-x-1 pb-2 mb-5 justify-between border-b"
        >
          <p className="text-base text-gray-2 font-medium md:text-xl">{content}</p>
          <Image
            alt="add icon"
            src="/images/icon/add-icon.svg"
            className="h-auto w-auto"
            height={20}
            width={20}
            loading="eager"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionFour;
