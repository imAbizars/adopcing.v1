import React from "react";
import HeroText from "@/components/homepage/HeroText";
import CatImageWithEyes from "@/components/homepage/ImageCatEyes";
import Carousel from "@/components/homepage/Carousel";

export default function Home({ eyeRefs }) {
  return (
    <div className="min-h-screen">
        {/* section 1 */}
      <section className="flex sm:justify-center  sm:flex-row pt-20 sm:space-x-10 pb-30 border border-black">
        <HeroText />
        <CatImageWithEyes eyeRefs={eyeRefs} />
      </section>
      {/* section 2 */}
      <section className="flex sm:justify-center sm:flex-col pt-20 ">
            <Carousel/>
      </section>
    </div>
  );
}
