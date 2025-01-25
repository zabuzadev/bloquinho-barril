"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Bloquinho Barril Logo"
              width={100}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <button
            className="md:hidden text-gray-800 hover:text-purple-600"
            onClick={() => setIsSidebarOpen(true)}
          >
            &#9776;
          </button>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-gray-800 hover:text-purple-600">
              INÍCIO
            </Link>
            <Link href="#" className="text-gray-800 hover:text-purple-600">
              BLOCO
            </Link>
            <Link href="#atracoes" className="text-gray-800 hover:text-purple-600">
              ATRAÇÕES
            </Link>
            <Link href="#contato" className="text-gray-800 hover:text-purple-600">
              CONTATO
            </Link>
            <Link href="#ingresso" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              COMPRAR INGRESSO
            </Link>
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="w-64 bg-white shadow-lg p-4">
            <button
              className="mb-4 text-gray-800 hover:text-purple-600"
              onClick={() => setIsSidebarOpen(false)}
            >
              &times;
            </button>
            <nav className="flex flex-col">
              <Link href="#home" className="mb-4 text-gray-800 hover:text-purple-600">
                INÍCIO
              </Link>
              <Link href="#" className="mb-4 text-gray-800 hover:text-purple-600">
                BLOCO
              </Link>
              <Link href="#atracoes" className="mb-4 text-gray-800 hover:text-purple-600">
                ATRAÇÕES
              </Link>
              <Link href="#contato" className="mb-4 text-gray-800 hover:text-purple-600">
                CONTATO
              </Link>
              <Link href="#ingresso" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                COMPRAR INGRESSO
              </Link>
            </nav>
          </div>
          <div
            className="flex-1 bg-black opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        </div>
      )}
    </nav>
  )
}

