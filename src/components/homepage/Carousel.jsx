import ImageCard from "@/components/ui/image-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext, 
  CarouselPrevious,
} from "@/components/ui/carousel"
import { carousellist } from "./Corousellist"
import { useEffect, useState } from "react"

export default function CarouselDemo({ onSlideChange }) {
  const [api, setApi] = useState(null)

  useEffect(() => {
    if (!api) return
    const handleSelect = () => {
      const index = api.selectedScrollSnap()
      onSlideChange?.(carousellist[index])
    }
    api.on("select", handleSelect)
    handleSelect() // panggil pertama kali

    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  return (
      <Carousel className="w-full max-w-[450px]" setApi={setApi}>
        <CarouselContent>
          {carousellist.map((cat) => (
            <CarouselItem key={cat.id}>
              <div className="p-[30px]">
                <ImageCard
                  imageUrl={cat.image}
                  caption={cat.nama}
                  umur={cat.umur}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  )
}
