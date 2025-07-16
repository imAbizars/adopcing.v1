import { useState, useEffect } from "react";
import FadeInSection from "../animations/FadeInSection";
import cat1 from "@/assets/images/catmeow.png";

export default function HeroText3() {
  const texts = [
    "Meowww.... Aku senang kamu datang!",
    "Ayo bawa aku pulang ke rumahmu ",
    "Aku janji akan jadi teman yang baik ",
  ];

  const [textIndex, setTextIndex] = useState(-1); 
  const [displayText, setDisplayText] = useState(""); 
  const [charIndex, setCharIndex] = useState(0); 
  const [isPat,setIsPat] = useState(true);
  const handleClick = () => {
    setIsPat(false);
    if (textIndex < texts.length - 1) {
      setTextIndex((prev) => prev + 1);
    } else {
      setTextIndex(-1);
      setDisplayText("");
      setIsPat(true);
    }
  };

  useEffect(() => {
    if (textIndex >= 0 && textIndex < texts.length) {
      setDisplayText(""); 
      setCharIndex(0);
    }
  }, [textIndex]);

  useEffect(() => {
    if (textIndex >= 0 && charIndex < texts[textIndex]?.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 60); 
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <div className="relative w-full h-full pt-30 pb-50">
      {/* gambar kucing */}
      <FadeInSection
        className="absolute bottom-0 left-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="w-full max-w-[10rem] sm:ml-2 relative" onClick={handleClick}>
            {textIndex >= 0 && textIndex < texts.length && (
            <FadeInSection
                className="w-full max-w-[300px] text-center text-sm font-semibold bg-white p-2 border-2 border-black rounded-xl "
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {displayText}
                <span className="animate-pulse">|</span>
            </FadeInSection>
            )}
            {isPat&&(
                <FadeInSection 
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center mx-10  cursor-pointer bg-white border-2 border-black rounded-xl p-2 animate-bounce">
                    Pat Me
                </FadeInSection>
            )}
            <img
            
            className="object-cover cursor-pointer pt-2"
            src={cat1}
            alt="cat"
            />
        </div>
      </FadeInSection>

      {/* teks utama */}
      <FadeInSection
        className="flex flex-col text-3xl my-10 p-10 w-full justify-center items-center italic text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        "Hidup mereka berubah saat kamu berkata:
        <div>'Aku akan membawamu pulang.'</div>
      </FadeInSection>
    </div>
  );
}
