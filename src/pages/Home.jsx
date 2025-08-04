import React, { useState } from "react"
import HeroText from "@/components/homepage/HeroText"
import CatImageWithEyes from "@/components/homepage/ImageCatEyes"
import Carousel from "@/components/homepage/Carousel"
import HeroText2 from "@/components/homepage/HeroText2"
import HeroText3 from "@/components/homepage/HeroText3"
import { carousellist } from "@/components/homepage/Corousellist"

export default function Home({ eyeRefs }) {
  const [selectedCat, setSelectedCat] = useState(carousellist[0])

  return (
    <div className="min-h-screen">
      {/* Section 1: Hero */}
      <section className="flex flex-col sm:flex-row px-6 pt-20 pb-20 border-b-4 sm:space-x-10">
        <HeroText />
        <CatImageWithEyes eyeRefs={eyeRefs} />
      </section>

      {/* Section 2: Carousel & Info */}
      <section className="flex flex-col pb-20 pt-10 bg-secondary-background border-b-4">
        <Carousel onSlideChange={setSelectedCat} />
        <HeroText2 cat={selectedCat} />
      </section>

      {/* Section 3: Additional Info */}
      <section className="bg-background flex sm:flex-row pb-10">
        <HeroText3 />
      </section>
    </div>
  )
}
