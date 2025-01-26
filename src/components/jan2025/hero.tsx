import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative min-h-fit bg-[url('/images/bg-hero.webp')] bg-cover bg-bottom">
      <div className="container mx-auto px-4 py-6 pt-24 md:py-12 ">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            <div className="max-w-[200px] bg-purple-700 text-white rounded-full  flex justify-between items-center gap-2 mb-2 md:mb-8">
              <span className="text-xl sm:text-3xl font-bold ml-5">15FEV</span>
              <span className="bg-white text-purple-700 rounded-full px-6 py-3 text-xl sm:text-3xl font-bold">19H</span>
            </div>

            <p className="text-purple-900 text-center text-lg sm:text-xl font-bold mb-8 max-w-sm">
              Concentração na Barril da Santana.
            
              Até o Clube do Detran.
            </p>  
          </div>

          <div className="relative w-full xl:max-w-xl lg:max-w-md md:max-w-sm" >
            <Image
              src="/images/logo.webp"
              alt="Bloquinho Banner"
              width={900}
              height={900}
              className="w-full h-auto"
            />
          </div>

          <div className="text-center mt-8">
            <h2 className="text-yellow-900 font-semibold text-sm sm:text-lg md:text-2xl">PARTICIPAÇÃO ESPERCIAL</h2>
            <div className="text-purple-700 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
              <p>LEO CACHORRÃO,</p>
              <p>WANDERSON BARULHO</p>
              <p>WAGNÃO LUIZ</p>
              <p>DJ ALONE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

