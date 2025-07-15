import FadeInSection from "../animations/FadeInSection";
import cat1 from "@/assets/images/catmeow.png";

export default function HeroText3() {
  return (
    <div className="relative w-full h-full pt-20 pb-20">
      <FadeInSection
        className="absolute bottom-0 left-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }} // delay khusus gambar
      >
        <img
          className="w-40 h-40"
          src={cat1}
          alt="cat"
        />
      </FadeInSection>

      <FadeInSection
        className="flex flex-col text-3xl my-10 p-10 w-full justify-center items-center italic text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0 }} // tidak ada delay
      >
        "Hidup mereka berubah saat kamu berkata:
        <div>'Aku akan membawamu pulang.'</div>
      </FadeInSection>
    </div>
  );
}
