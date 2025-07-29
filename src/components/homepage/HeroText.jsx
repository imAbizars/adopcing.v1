import React from "react";
import { Button } from "@/components/ui/button";
import FadeInSection from "../animations/FadeInSection";
export default function HeroText() {
  return (
    <FadeInSection 
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    className="w-3/4 sm:w-2/4 ">
      <h1 className="text-6xl font-nunito font-bold">Welcome To Adopcing.</h1>
      <p className="text-lg mt-10">
        Rumah bagi mereka yang peduli dan mencintai kucing.
        Temukan sahabat berbulu yang siap diadopsi atau pilih makanan terbaik
      </p>
      <Button className=" mt-7 font-bold text-xl p-6 ">
        Addopt
      </Button>
    </FadeInSection>
  );
}
