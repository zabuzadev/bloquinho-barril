import Image from "next/image";

export default function Sponsors() {
    return (
      <div className="py-16 bg-white">
        <h2 className="text-center text-2xl font-bold mb-8">Patrocinadores Oficiais</h2>
        <div className="flex justify-center gap-8">
          <div className="w-48 h-32  flex items-center justify-center">
           <Image src="/images/aes.png" alt="Patrocinador" width={150} height={150} />
          </div>
        </div>
      </div>
    )
  }
  
  