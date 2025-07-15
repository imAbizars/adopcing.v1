import FadeInSection from "../animations/FadeInSection"
import { Button } from "../ui/button"
export default function HeroText2({ cat }) {
  return (
    <div className="h-20 w-120">
        <h1 className="text-4xl pb-5">Kisah Kecil Dari Cerita Kami</h1>
        <FadeInSection
        animate={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        >
            <h2 className="text-2xl py-10">{cat.nama}</h2>
        </FadeInSection>

        <FadeInSection
        animate={{opacity:1,y:0}}
        initial={{opacity:0,y:100}} 
        >
            <p className="text-gray-800 text-base">{cat.cerita}</p>
            <div className="flex space-x-10 mt-10 ">
                <Button className="font-bold h-20 w-35">Addopt <br />{cat.nama}</Button>
                <Button className="font-bold h-20 w-35  ">Feed <br />{cat.nama} <br />RP.5000/gram</Button>
            </div>
        </FadeInSection>
    </div>
  )
}
