import FadeInSection from "../animations/FadeInSection"
import { Button } from "../ui/button"
export default function HeroText2({ cat}) {
  return (
        <div className="p-6">
            <h1 className="text-4xl ">Kisah Kecil Dari Cerita Kami</h1>
            <FadeInSection
            initial={{opacity:0,x:-20}}
            animate={{opacity:1,x:0}}
            >
                <h2 className="text-2xl py-10">{cat.nama}</h2>
            </FadeInSection>

            <FadeInSection
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className=""
            >
                <p className="text-gray-800 text-base">{cat.cerita}</p>

                <div className="flex space-x-10 mt-7">
                    <Button className="font-bold h-17 w-[140px] text-sm leading-tight text-center">
                    Addopt <br /> {cat.nama}
                    </Button>
                    <Button className="font-bold h-17 w-[140px] text-sm leading-tight text-center">
                    Feed <br /> {cat.nama} <br /> RP.5000/gram
                    </Button>
                </div>
            </FadeInSection>

        </div>
  )
}
