'use client'

import { useState } from 'react'
import { Sparkles, Check, Wrench, ChevronRight, Clock } from 'lucide-react'

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

/** Official EPC band colours — government specified, must not be re-branded. */
const BANDS = [
  { band: 'A', color: 'bg-[#008054] text-white', range: [92, 100] },
  { band: 'B', color: 'bg-[#19B459] text-white', range: [81, 91] },
  { band: 'C', color: 'bg-[#8DCE46] text-secondary-900', range: [69, 80] },
  { band: 'D', color: 'bg-[#FFD500] text-secondary-900', range: [55, 68] },
  { band: 'E', color: 'bg-[#FCAA1B] text-secondary-900', range: [39, 54] },
  { band: 'F', color: 'bg-[#EF8023] text-white', range: [21, 38] },
  { band: 'G', color: 'bg-[#E9153B] text-white', range: [1, 20] },
]

const BASE_SCORE = 46

/**
 * Interactive EPC rating simulator. Extracted from the hero, where it competed
 * with the primary CTA and invited interaction that led away from booking. In
 * an educational context "what would raise my score" is the actual question,
 * so it does more work here and costs the hero no height.
 */
export function EpcSimulator() {
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
        <div className="relative rounded-2xl bg-white shadow-premium-lg ring-1 ring-secondary-900/5 p-5 md:p-6 animate-fade-in animate-delay-300">
          <div className="absolute -top-3 left-6 bg-gradient-to-r from-accent-600 to-accent-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive EPC Simulator
          </div>
          
          <div className="flex justify-between items-center mt-2.5">
            <h2 className="font-sans text-base font-bold text-secondary-900">Energy Efficiency Rating</h2>
            <div className="text-right">
              <span className="text-xs font-semibold text-secondary-500 block uppercase">Current Rating</span>
              <span className="text-xl font-black text-primary-700">
                {currentScore} <span className="text-base font-bold text-secondary-600">({currentBand})</span>
              </span>
            </div>
          </div>

          <p className="text-xs text-secondary-500 mt-1 mb-3">
            Toggle upgrades below to see how they boost your property rating.
          </p>

          <ul className="space-y-1">
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
                      className={`flex items-center justify-between px-3 py-1 rounded font-extrabold text-xs transition-all duration-300 ${row.color} ${
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

          <div className="mt-4 border-t border-secondary-100 pt-4">
            <h3 className="font-sans text-sm font-bold text-secondary-900 mb-2.5 flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-secondary-500" aria-hidden="true" />
              Simulate Efficiency Upgrades
            </h3>
            
            <div className="grid grid-cols-2 gap-1.5">
              {UPGRADES.map((upgrade) => {
                const isChecked = selectedUpgrades.includes(upgrade.id)
                return (
                  <button
                    key={upgrade.id}
                    type="button"
                    onClick={() => toggleUpgrade(upgrade.id)}
                    className={`flex flex-col text-left p-2.5 rounded-lg border text-xs transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${
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
                        <span className="text-xs text-accent-700 font-bold">+{upgrade.points} pts</span>
                      )}
                    </span>
                    <span className="text-xs text-secondary-500 mt-0.5 leading-snug">{upgrade.description}</span>
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
                <p className="text-xs text-secondary-500 mt-1">
                  Based on standard UK fuel costs. Exact gains require an in-person assessment.
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-secondary-500 border-t border-secondary-100 pt-3">
            <Clock className="w-4 h-4 text-secondary-400 shrink-0" aria-hidden="true" />
            Lodged on the UK Government EPC Register
          </div>
        </div>
  )
}
