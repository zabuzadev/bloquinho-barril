import Link from "next/link";
import { Button } from "../ui/button";
import { CreditCard } from "lucide-react";

export default function CallToAction() {
  return (
    <div className="bg-[#FFD400] py-4 text-black">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <p className="">
            GARANTA O SEU LUGAR NO 
            <span className="font-bold">
             {" "} 1ª LOTE {""}
            </span>
             DO MELHOR CARNAVAL DE BLOCOS DE TERESINA!
            </p>
          </div>
          <div className="flex items-center gap-4 mt-8 md:mt-0">
            <Button 
                variant="outline"
                className="bg-transparent p-6 border-2 border-black" 
                >
                    <Link  href="https://wa.me/5586999060477?text=Ol%C3%A1%2C%20quero%20garantir%20meu%20ingresso%20para%20o%20Bloquinho%20do%20Barril" className="flex gap-2 items-center">
                    <CreditCard />
                    COMPRAR INGRESSO
                    </Link>
                </Button>
        </div>
        </div>
        </div>
        </div>
    )
}
