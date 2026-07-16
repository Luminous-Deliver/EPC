'use client'

import { useState } from 'react'
import { Phone, ShieldCheck, Clock, MapPin, Star, Sparkles, Check, Wrench, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { site } from '@/lib/site'

const GOOGLE_REVIEWS_URL = 'https://share.google/4LTPb4XMjeNq7TpXk'

interface Upgrade {
  id: string
  name: string
  points: number
  savings: number
  description: string
}

const UPGRADES: Upgrade[] = [
  { id: 'led', name: 'LED Lighting', points: 5, savings: 45, description: '100% low-energy bulbs' },
  { id: 'thermostat', name: 'Smart Thermostat', points: 4, savings: 55, description: 'Heating control upgrades' },
  { id: 'glazing', name: 'Double Glazing', points: 8, savings: 115, description: 'Replace single glazing' },
  { id: 'loft', name: 'Loft Insulation', points: 12, savings: 185, description: 'To recommended 270mm' },
  { id: 'panels', name: 'Solar PV Panels', points: 16, savings: 340, description: '3kW solar panel system' },
]

const BANDS = [
  { band: 'A', color: 'bg-[#008054] text-white', range: [92, 100], displayRange: '92+' },
  { band: 'B', color: 'bg-[#19B459] text-white', range: [81, 91], displayRange: '81–91' },
  { band: 'C', color: 'bg-[#8DCE46] text-secondary-900', range: [69, 80], displayRange: '69–80' },
  { band: 'D', color: 'bg-[#FFD500] text-secondary-900', range: [55, 68], displayRange: '55–68' },
  { band: 'E', color: 'bg-[#FCAA1B] text-secondary-900', range: [39, 54], displayRange: '39–54' },
  { band: 'F', color: 'bg-[#EF8023] text-white', range: [21, 38], displayRange: '21–38' },
  { band: 'G', color: 'bg-[#E9153B] text-white', range: [1, 20], displayRange: '1–20' },
]

const BASE_SCORE = 46

export function Hero() {
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([])

  const currentScore = selectedUpgrades.reduce((score, upgradeId) => {
    const upgrade = UPGRADES.find((u) => u.id === upgradeId)
    return score + (upgrade ? upgrade.points : 0)
  }, BASE_SCORE)

  const currentBand = BANDS.find((b) => currentScore >= b.range[0] && currentScore <= b.range[1])?.band || 'G'

  const totalSavings = selectedUpgrades.reduce((savings, upgradeId) => {
    const upgrade = UPGRADES.find((u) => u.id === upgradeId)
    return savings + (upgrade ? upgrade.savings : 0)
  }, 0)

  const toggleUpgrade = (id: string) => {
    setSelectedUpgrades((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-canvas to-canvas border-b border-secondary-100">
      {/* Decorative overlays */}
      <div
        className="bg-dot-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="bg-hero-glow pointer-events-none absolute -top-24 right-0 h-[480px] w-[640px]"
        aria-hidden="true"
      />

      <Container className="relative py-10 md:py-20 lg:py-24 grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wide font-semibold text-primary-700 bg-primary-50 ring-1 ring-primary-100 rounded-full px-3 py-1 animate-fade-in">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Elmhurst Accredited · All London Boroughs
          </p>
          <h1 className="mt-4 text-[2.1rem] leading-[1.07] sm:text-5xl md:text-6xl font-semibold tracking-tight text-secondary-900 animate-fade-in-up animate-delay-100">
            Fast, <span className="text-gradient-brand">Reliable</span> &amp; Certified EPCs in London
          </h1>
          <p className="mt-5 text-lg md:text-xl text-secondary-700 leading-relaxed max-w-2xl animate-fade-in-up animate-delay-200">
            Elmhurst-accredited Domestic Energy Assessor. Guide prices from{' '}
            <span className="font-semibold text-secondary-900">£49</span>. Certificate within 72 hours, or next day for just £12 extra.
          </p>
          <p className="mt-3 text-sm text-secondary-600">
            Based in Stratford, East London, covering all 32 London boroughs, 7 days a week.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="#contact" variant="accent" size="lg" className="w-full sm:w-auto text-base">
              Book Your EPC
            </Button>
            <Button href="#pricing" variant="secondary" size="lg" className="w-full sm:w-auto text-base">
              View Pricing
            </Button>
          </div>
          <p className="mt-3 text-sm text-secondary-500">
            No call-out fees · Same-price guarantee · 2-hour response (8am–8pm)
          </p>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 min-h-[44px] text-sm font-medium text-secondary-700 hover:text-secondary-900"
          >
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-semibold">Rated on Google</span>
            <span className="text-secondary-400">·</span>
            <span className="text-secondary-400 underline underline-offset-2 decoration-secondary-300 hover:text-secondary-600">Read our reviews</span>
          </a>

          <dl className="mt-10 grid grid-cols-3 gap-3 max-w-md">
            {[
              { dt: 'From', dd: '£49' },
              { dt: 'Standard', dd: '72h' },
              { dt: 'Boroughs', dd: '32+' },
            ].map((stat) => (
              <div
                key={stat.dt}
                className="rounded-xl bg-white/70 ring-1 ring-secondary-900/5 backdrop-blur px-4 py-3"
              >
                <dt className="text-xs uppercase tracking-wide font-medium text-secondary-500">{stat.dt}</dt>
                <dd className="mt-1 text-2xl font-bold text-secondary-900">{stat.dd}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 mt-10 lg:mt-0">
          <div className="relative rounded-2xl bg-white shadow-premium-lg ring-1 ring-secondary-900/5 p-6 md:p-8 animate-fade-in animate-delay-300">
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-accent-700 to-accent-800 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive EPC Simulator
            </div>
            
            <div className="flex justify-between items-center mt-3">
              <h2 className="font-sans text-lg font-bold text-secondary-900">Energy Efficiency Rating</h2>
              <div className="text-right">
                <span className="text-xs font-semibold text-secondary-500 block uppercase">Current Rating</span>
                <span className="text-2xl font-black text-primary-700">
                  {currentScore} <span className="text-lg font-bold text-secondary-600">({currentBand})</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-secondary-500 mt-1 mb-4">
              Toggle upgrades below to see how they boost your property rating.
            </p>

            <ul className="space-y-1.5">
              {BANDS.map((row, i) => {
                const isActive = currentBand === row.band
                const widthPercent = 100 - i * 8
                return (
                  <li key={row.band} className="flex items-center gap-2">
                    <div className="w-6 flex justify-center text-primary-600">
                      {isActive ? <ChevronRight className="w-4 h-4" aria-hidden="true" /> : null}
                    </div>
                    <div className="flex-1">
                      <div
                        className={`flex items-center justify-between px-3 py-1.5 rounded font-extrabold text-sm transition-all duration-300 ${row.color} ${
                          isActive ? 'ring-2 ring-primary-600 ring-offset-1 scale-[1.03] shadow-md' : 'opacity-65'
                        }`}
                        style={{ width: `${widthPercent}%` }}
                      >
                        <span>{row.band}</span>
                        <span className="text-xs font-semibold opacity-95">{row.range[0] === 92 ? '92+' : `${row.range[0]}–${row.range[1]}`}</span>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 border-t border-secondary-100 pt-5">
              <h3 className="font-sans text-sm font-bold text-secondary-900 mb-3 flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-secondary-500" aria-hidden="true" />
                Simulate Efficiency Upgrades
              </h3>
              
              <div className="grid grid-cols-2 gap-2">
                {UPGRADES.map((upgrade) => {
                  const isChecked = selectedUpgrades.includes(upgrade.id)
                  return (
                    <button
                      key={upgrade.id}
                      type="button"
                      onClick={() => toggleUpgrade(upgrade.id)}
                      className={`flex flex-col text-left p-3 min-h-[56px] rounded-xl border text-xs transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${
                        isChecked
                          ? 'border-accent-500 bg-accent-50/50 ring-1 ring-accent-500'
                          : 'border-secondary-200 bg-white hover:border-secondary-300 hover:bg-secondary-50'
                      }`}
                    >
                      <span className="flex items-center justify-between w-full font-bold text-secondary-900">
                        {upgrade.name}
                        {isChecked ? (
                          <Check className="w-4 h-4 text-accent-700 font-bold shrink-0" />
                        ) : (
                          <span className="text-[10px] text-accent-700 font-bold">+{upgrade.points} pts</span>
                        )}
                      </span>
                      <span className="text-[11px] text-secondary-500 mt-0.5 leading-snug">{upgrade.description}</span>
                    </button>
                  )
                })}
              </div>

              {selectedUpgrades.length > 0 && (
                <div className="mt-4 p-3 bg-gradient-to-br from-primary-50 to-white ring-1 ring-primary-100 rounded-xl animate-fade-in">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-secondary-700">Simulated Annual Savings:</span>
                    <span className="text-sm font-extrabold text-primary-700">£{totalSavings}/yr</span>
                  </div>
                  <p className="text-[10px] text-secondary-500 mt-1">
                    Based on standard UK fuel costs. Exact gains require an in-person assessment.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-secondary-500 border-t border-secondary-100 pt-3">
              <Clock className="w-4 h-4 text-secondary-400 shrink-0" aria-hidden="true" />
              Lodged on the UK Government EPC Register
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
