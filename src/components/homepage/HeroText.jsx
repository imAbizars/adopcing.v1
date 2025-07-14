import React from "react";
import { Button } from "@/components/ui/button";
import FadeInSection from "../animations/FadeInSection";
export default function HeroText() {
  return (
    <FadeInSection className="w-3/4 sm:w-2/4 sm:pt-20">
      <h1 className="text-6xl font-nunito font-bold">Welcome To Adopcing.</h1>
      <p className="mt-10">
        Rumah bagi mereka yang peduli dan mencintai kucing.
        Temukan sahabat berbulu yang siap diadopsi atau pilih makanan terbaik
        untuk menjaga kucing kesayangan Anda tetap sehat dan bahagia.
        Bersama, kita menciptakan dunia yang lebih baik untuk mereka.
      </p>
      <Button className="mt-7 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all font-bold">
        Addopt
      </Button>
    </FadeInSection>
  );
}
