"use client"

import { useState, useEffect } from "react"

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  const labels: { [key: string]: string } = {
    days: 'DIAS',
    hours: 'HORAS',
    minutes: 'MINUTOS',
    seconds: 'SEGUNDOS',
  }

  useEffect(() => {
    const targetDate = new Date('2025-02-15T00:00:00')

    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / (1000 * 60)) % 60)
        const seconds = Math.floor((difference / 1000) % 60)
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="py-6 bg-white">
      <h2 className="text-center text-2xl font-bold mb-8">CONTAGEM REGRESSIVA CARNAVAL 2025.</h2>
      <div className="flex justify-center gap-8">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="text-center ">
            <div className="text-4xl font-bold">{value}</div>
            <div className="uppercase text-sm">{labels[key]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

