import Image from "next/image";

export default function Sponsors() {
    return (
      <div className="py-16 bg-white">
        <h2 className="text-center text-2xl font-bold mb-8">Patrocinadores Oficiais</h2>
        <div className="flex justify-center flex-wrap gap-8">
            <div className="w-48 h-32 flex  items-center justify-center">
              <Image src="/images/protrocinadores/01.png" alt="Patrocinador" width={150} height={150} />
            </div>
            <div className="w-48 h-32 flex  items-center justify-center">
              <Image src="/images/protrocinadores/02.png" alt="Patrocinador" width={150} height={150} />
            </div>
            <div className="w-48 h-32 flex  items-center justify-center">
              <Image src="/images/protrocinadores/03.png" alt="Patrocinador" width={150} height={150} />
            </div>
            <div className="w-48 h-32 flex  items-center justify-center">
              <Image src="/images/protrocinadores/04.png" alt="Patrocinador" width={150} height={150} />
            </div>
          </div>
        </div>

    )
  }
  
  
