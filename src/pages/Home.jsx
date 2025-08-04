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
      <section className="flex flex-col px-6 pt-20 sm:space-x-10 pb-20 border-b-4">
        <HeroText />
        <CatImageWithEyes eyeRefs={eyeRefs} />
      </section>

      {/* section 2 */}
      <section className="flex flex-col pb-20 pt-10 bg-secondary-background border-b-4 ">
        <div className="">
          <Carousel onSlideChange={setSelectedCat} />
        </div>
        <div>
          <HeroText2 
          cat={selectedCat}
          key={selectedCat.id}/>
        </div>
      </section>
      <section className="bg-background flex sm:flex-row pb-10 ">
        <HeroText3/>
      </section>
    </div>
  )
}
