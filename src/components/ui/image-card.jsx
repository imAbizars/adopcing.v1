import { cn } from "@/lib/utils"

export default function ImageCard({
  imageUrl,
  caption,
  className,
  umur
}) {
  return (
    (<figure
      className={cn(
        "w-[250px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow",
        className
      )}>
      <img className="w-full aspect-4/3" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 text-main-foreground border-border p-4">
        <h3 className="font-bold text-2xl">{caption}</h3>
        <p className="text-md">{umur}</p>
      </figcaption>
    </figure>)
  );
}
