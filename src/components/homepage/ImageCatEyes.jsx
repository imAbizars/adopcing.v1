import React from "react";
import Kucing from "@/assets/images/kucing.png";

export default function CatImageWithEyes({ eyeRefs }) {
  return (
    <div className="relative z-[-1] pt-0  border-b-4 border-black h-80 w-full">
      {/* Mata kanan */}
      <div
        className="absolute w-12 h-14 bg-white border rounded-full border-black flex items-center justify-center top-[45%] left-[33%] sm:left-[34%]"
        ref={(el) => (eyeRefs.current[0] = el)}
      >
        <div className="pupil w-5 h-5 bg-black rounded-full transition-transform duration-75"></div>
      </div>

      {/* Mata kiri */}
      <div
        className="absolute w-12 h-14 bg-white border rounded-full border-black flex items-center justify-center top-[45%] left-[53%] sm:left-[54%]"
        ref={(el) => (eyeRefs.current[1] = el)}
      >
        <div className="pupil w-5 h-5 bg-black rounded-full transition-transform duration-75"></div>
      </div>

      {/* Gambar kucing */}
      <img
        className="object-cover h-full w-full"
        src={Kucing}
        alt="miaw"
      />
    </div>
  );
}
