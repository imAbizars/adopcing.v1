import React from "react";
import { Button } from "@/components/ui/button";
import FadeInSection from "../animations/FadeInSection";
export default function HeroText() {
  return (
    <FadeInSection 
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    className="w-3/4 sm:w-2/4 sm:pt-20">
      <h1 className="text-6xl font-nunito font-bold">Welcome To Adopcing.</h1>
      <p className="mt-10">
        Rumah bagi mereka yang peduli dan mencintai kucing.
        Temukan sahabat berbulu yang siap diadopsi atau pilih makanan terbaik
        untuk menjaga kucing kesayangan Anda tetap sehat dan bahagia.
        Bersama, kita menciptakan dunia yang lebih baik untuk mereka.
      </p>
      <Button className=" mt-7 transition-all font-bold">
        Addopt
      </Button>
    </FadeInSection>
  );
}
