import React, { useState, useEffect } from "react";
import Image from "next/image";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const comments = [
    "Honestly, I really thank my recommending edulab to me. I me fellow learners and been able to achieve more and understand certain concepts and ideas.",
    "Honestly, I really thank my recommending edulab to me. I me fellow learners and been able to achieve more and understand certain concepts and ideas.",
    "Honestly, I really thank my recommending edulab to me. I me fellow learners and been able to achieve more and understand certain concepts and ideas.",
    "Honestly, I really thank my recommending edulab to me. I me fellow learners and been able to achieve more and understand certain concepts and ideas.",
    "Honestly, I really thank my recommending edulab to me. I me fellow learners and been able to achieve more and understand certain concepts and ideas.",
  ];

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + comments.length) % comments.length
    );
  };

  return (
    <div className="relative max-w-5xl px-5 mb-48 mx-auto">
      <div className="overflow-hidden mb-8 rounded-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${activeIndex * (100 / comments.length)}%)`,
            width: `${comments.length * 100}%`,
          }}
        >
          {comments.map((comment, index) => (
            <div
              key={index}
              style={{
                width: `${100 / comments.length}%`,
              }}
              className="flex items-start w-full h-40 md:h-96"
            >
              <Image
                src="/images/hero-image1.svg"
                alt="hero image"
                height={526}
                width={352}
                className="h-full w-auto"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
              />

              <div className="px-1 bg-blue-2 pr-20 h-full overflow-y-auto pt-2 rounded-tr-2xl rounded-br-2xl md:pt-10 md:px-9">
                <Image
                  src="/images/quote-left.svg"
                  alt="quotes images"
                  height={40}
                  width={40}
                  className="h-8 w-8 mb-3 md:h-auto md:w-auto"
                  priority
                  loading="eager"
                />
                <p className="text-gray-2 mb-2 text-sm md:mb-14 md:text-lg">
                  {comment}
                </p>
                <div className="flex justify-end">
                  <Image
                    src="/images/quote-right.svg"
                    alt="quotes image"
                    height={40}
                    width={40}
                    className="h-8 w-8 md:h-auto md:w-auto"
                    priority
                    loading="eager"
                  />
                </div>
                <div className="font-semibold text-xl text-blue-0">
                  Amobi Victor
                </div>
                <div className="text-blue-0">Student</div>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>

      <div className="flex justify-center space-x-2">
        {comments.map((comments, index) => {
          const color = index === activeIndex ? "bg-blue-0" : "bg-gray-3";
          return (
            <div key={index} className={`h-5 w-5 rounded-full ${color}`}></div>
          );
        })}
      </div>

      <button
        className="absolute top-1/3 -translate-y-1/2 -translate-y-1/2 right-3 bg-blue-0 py-1 px-2 md:py-3 md:px-4"
        onClick={goToPrevSlide}
      >
        <Image
          src="/images/icon/angle-right.svg"
          className="h-5 w-5  transform rotate-180 md:h-auto md:w-auto"
          alt="angle right"
          height={38}
          width={17}
          priority
          loading="eager"
        />
      </button>

      <button
        className="absolute top-1/2 mt-2 -translate-y-1/2 right-3 bg-blue-0  py-1 px-2 md:py-3 md:px-4"
        onClick={goToNextSlide}
      >
        <Image
          src="/images/icon/angle-right.svg"
          className="h-5 w-5 md:h-auto md:w-auto"
          alt="angle right"
          height={38}
          width={17}
          priority
          loading="eager"
        />
      </button>
    </div>
  );
};

export default Slider;
