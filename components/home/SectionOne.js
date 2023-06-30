import Image from "next/image";

const SectionOne = () => {
  return (
    <div className="relative bg-blue-0 pb-24 h-max w-full text-white md:pb-96">
      <Image
        src="/images/icon/gradient-left.svg"
        width={32}
        height={32}
        loading="eager"
        priority
        alt="background image"
        className="h-full w-1/2 blur-xl absolute left-0"
      />
      <Image
        src="/images/icon/gradient-right.svg"
        width={32}
        alt="background image"
        height={32}
        loading="eager"
        priority
        className="h-full w-1/2 blur-4xl absolute right-0"
      />

      <div className="mx-auto pt-10 px-5 pb-10 text-center font-semibold max-w-5xl md:pb-20 md:pt-28">
        <h1 className="text-3xl leading-normal pb-3 md:text-[56px]">
          A Sound <span className="text-green-0">Education</span> is the Key to
          Success
        </h1>
        <p className="font-light text-base pb-11 md:text-lg">
          Wecome to EduLab please choose the action you want to carry out. Don't
          forget to sign up and have fun with your fellow leraners.
        </p>
        <div className="flex justify-center text-sm space-x-5 md:text-lg">
          <button className="px-2 py-3 bg-green-0 rounded-md md:px-5">
            Get Started
          </button>
          <button className="text-green-0 flex items-center space-x-1">
            <Image
              src="/images/icon/play-icon.svg"
              alt="play icon"
              width={32}
              height={32}
              loading="eager"
              priority
              className="h-7 w-7"
            />
            <div>Watch Video</div>
          </button>
        </div>
      </div>

      <div className="absolute h-[20rem] w-full md:h-[34.2rem]">
        {" "}
        <div className="relative max-w-max mx-auto">
          <Image
            src="/images/hero-image.svg"
            alt="hero image"
            width={908}
            height={548}
            className="h-full w-auto mx-auto" 
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
         
          />
          <Image
            src="/images/icon/play-icon-white.svg"
            loading="eager"
            alt="play icon"
            priority
            width={96}
            height={96}
            className="h-16 w-16 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="absolute bottom-7 left-5 flex items-center space-x-2  md:bottom-14 md:left-10">
            <Image
              src="/images/group-image.svg"
              loading="eager"
              alt="group image"
              priority
              width={128}
              height={32}
              className="h-7 w-auto md:h-auto"
            />{" "}
            <div>32 listeners</div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default SectionOne;
