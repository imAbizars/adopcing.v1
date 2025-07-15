import React, { useState } from "react"
import HeroText from "@/components/homepage/HeroText"
import CatImageWithEyes from "@/components/homepage/ImageCatEyes"
import Carousel from "@/components/homepage/Carousel"
import HeroText2 from "@/components/homepage/HeroText2"
import { carousellist } from "@/components/homepage/Corousellist"
import HeroText3 from "@/components/homepage/HeroText3"

export default function Home({ eyeRefs }) {
  const [selectedCat, setSelectedCat] = useState(carousellist[0])

  return (
    <div className="min-h-screen">
      {/* section 1 */}
      <section className="flex sm:justify-center sm:flex-row pt-20 sm:space-x-10 pb-30">
        <HeroText />
        <CatImageWithEyes eyeRefs={eyeRefs} />
      </section>

      {/* section 2 */}
      <section className="bg-secondary-background flex sm:justify-center gap-40 sm:flex-row p-20 ">
        <Carousel onSlideChange={setSelectedCat} />
        <HeroText2 
        cat={selectedCat}
        key={selectedCat.id}/>
      </section>
      <section className="bg-background flex sm:flex-row pt-20 pb-20">
        <HeroText3/>
      </section>
    </div>
  )
}
