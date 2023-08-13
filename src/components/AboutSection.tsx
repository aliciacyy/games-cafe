import { useEffect } from "react";
import AboutPic from "../assets/about.svg";

function AboutSection() {
  useEffect(() => {
    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeIn");
          observer.unobserve(entry.target);
        }
      });
    };
    const options = {
      threshold: 1,
    };
    const myObserver = new IntersectionObserver(callback, options);

    const imgList = document.querySelectorAll(".leCards");
    imgList.forEach((img) => {
      myObserver.observe(img!);
    });
  });

  return (
    <section className="bg-gray-900">
      <div className="leCards grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold md:text-5xl xl:text-6xl text-white">
            About us
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-200">
            Embracing a growing interest for board games since 2020, what
            started off as just a few board games flourished into an evergrowing
            collection with each passing year.
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-200">
            As our passion for games blossomed, so did the idea for an imaginary
            games cafe tailored for intimate gatherings. After all, the true
            magic of board games comes to life in the company of a close-knit
            group.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img className="h-60" src={AboutPic} />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
