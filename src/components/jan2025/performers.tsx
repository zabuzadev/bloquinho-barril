import Image from "next/image"

export default function Performers() {
    const performers = [
      {
        name: "WAGNÃO LUIZ",
        image: "/images/luiz.webp",
        bgColor: "bg-pink-500",
      },
      {
        name: "LEO CACHORRÃO",
        image: "/images/leo.webp",
        bgColor: "bg-cyan-500",
      },
      {
        name: "WANDERSON BARULHO",
        image: "/images/barulho.webp",
        bgColor: "bg-violet-500",
      },
      {
        name: "DJ ALONY",
        image: "/images/alony.webp",
        bgColor: "bg-orange-500",
      }
    ]
  
    return (
      <div className="pt-10 bg-white bg-[url(/images/cantores-bg.png)] bg-cover bg-center" id="atracoes">
        <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-2xl font-bold mb-8">ATRAÇÕES BLOQUINHO DA BARRIL 2025</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {performers.map((performer) => (
            <div key={performer.name} className={`flex justify-between items-center flex-col group ${performer.bgColor}`}>
            <h3 className="max-w-60 text-center mt-4 text-white  text-xl md:text-2xl lg:text-4xl font-bold mix-blend-overlay group-hover:mix-blend-normal transition-all duration-700">{performer.name}</h3>
              <Image
                width={300}
                height={300}
                src={performer.image}
                alt={performer.name}
                className="w-auto h-auto mix-blend-multiply group-hover:mix-blend-normal transition-all duration-700 place-self-center"
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    )
  }
  
  