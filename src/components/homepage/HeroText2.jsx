export default function HeroText2({ cat }) {
  return (
    <div className="">
      <h1 className="text-4xl pb-5">Kisah Kecil Dari Cerita Kami</h1>
      <p className="text-gray-600 text-base">{cat.cerita}</p>
    </div>
  )
}
