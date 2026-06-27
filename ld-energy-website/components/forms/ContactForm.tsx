'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { 
  CheckCircle2, 
  AlertTriangle, 
  Loader2, 
  ChevronRight, 
  ChevronLeft, 
  BadgePoundSterling,
  Calendar,
  Sparkles,
  ClipboardCheck
} from 'lucide-react'
import { Field, Input, Textarea } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'
import { pricing } from '@/lib/site'
import {
  contactSchema,
  propertyTypes,
  services as serviceOptions,
  speeds,
  type ContactInput,
} from '@/lib/validators'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const STEP_TITLES = [
  'Services & Size',
  'Speed & Date',
  'Contact Details'
]

export function ContactForm() {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
      postcode: '',
      services: ['EPC Certificate'], // default select
      propertyType: '2 Bedroom', // default select
      speed: 'Standard (72 hours)', // default select
      preferredDate: '',
      notes: '',
      website: '',
    },
  })

  // Watch form fields for the live pricing calculator
  const watchPropertyType = watch('propertyType')
  const watchServices = watch('services') || []
  const watchSpeed = watch('speed')

  // Calculate live pricing
  const calculatePrice = () => {
    const sizeMap: Record<string, string> = {
      'Studio': 'studio',
      '1 Bedroom': '1-bed',
      '2 Bedroom': '2-bed',
      '3 Bedroom': '3-bed',
      '4 Bedroom': '4-bed',
      '5+ Bedroom': '5-bed-plus'
    }

    const typeKey = sizeMap[watchPropertyType] || 'studio'
    const pricingRow = pricing.find((p) => p.type === typeKey)
    if (!pricingRow) return { epcPrice: 0, floorPlanPrice: 0, discount: 0, speedPrice: 0, total: 0 }

    const wantsEpc = watchServices.includes('EPC Certificate') || watchServices.includes('Both (Bundle)')
    const wantsFloorPlan = watchServices.includes('Floor Plan') || watchServices.includes('Both (Bundle)')

    let epcPrice = wantsEpc ? pricingRow.epc : 0
    let floorPlanPrice = wantsFloorPlan ? pricingRow.floorPlan : 0
    let discount = 0
    let total = 0

    if (wantsEpc && wantsFloorPlan) {
      total = pricingRow.bundle
      discount = (pricingRow.epc + pricingRow.floorPlan) - pricingRow.bundle
    } else {
      total = epcPrice + floorPlanPrice
    }

    const isExpress = watchSpeed?.includes('Express')
    const speedPrice = isExpress ? 12 : 0
    total += speedPrice

    return {
      epcPrice,
      floorPlanPrice,
      discount,
      speedPrice,
      total,
      wantsEpc,
      wantsFloorPlan,
      isExpress
    }
  }

  const { epcPrice, floorPlanPrice, discount, speedPrice, total, wantsEpc, wantsFloorPlan, isExpress } = calculatePrice()

  const onSubmit = async (data: ContactInput) => {
    setStatus('submitting')
    setServerError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error || 'Something went wrong. Please call us instead.')
      }
      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setServerError(err instanceof Error ? err.message : 'Unknown error')
    }
  }

  const handleNext = async () => {
    let isValid = false
    if (step === 1) {
      isValid = await trigger(['propertyType', 'services'])
    } else if (step === 2) {
      isValid = await trigger(['speed'])
    }
    if (isValid) {
      setStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    setStep((prev) => prev - 1)
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-2xl border border-primary-200 bg-primary-50 p-6 md:p-8 shadow-premium"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-4">
          <CheckCircle2 className="w-8 h-8 text-primary-700 mt-0.5 shrink-0" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-bold text-secondary-900">Booking Request Received!</h3>
            <p className="mt-3 text-secondary-700 leading-relaxed text-sm md:text-base">
              Thank you for choosing L&D Energy. We have received your request and will contact you within **2 hours** to confirm your booking slot (Mon–Sun, 8am–8pm).
            </p>
            <p className="mt-3 text-secondary-700 text-sm">
              If your request is urgent, please feel free to call or text us directly on{' '}
              <a href="tel:+447492575396" className="font-bold text-primary-700 hover:underline">
                07492 575 396
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus('idle')
                setStep(1)
              }}
              className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary-700 hover:text-primary-850"
            >
              Send another request
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-start">
      {/* Form Steps Column */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="lg:col-span-8 rounded-2xl border border-secondary-200 bg-white p-5 md:p-8 shadow-premium"
        aria-describedby="form-help"
      >
        {/* Progress Tracker */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-xs font-semibold text-secondary-500 uppercase tracking-wider mb-2.5">
            <span>Step {step} of 3</span>
            <span className="text-primary-700 font-bold">{STEP_TITLES[step - 1]}</span>
          </div>
          <div className="h-2 w-full bg-secondary-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label>
            Website
            <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
          </label>
        </div>

        {/* Step 1: Services & Size */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h4 className="text-lg font-bold text-secondary-900">What service do you need?</h4>
              <p className="text-xs text-secondary-500 mt-1">Select the tasks you need assessed.</p>
              
              <Controller
                control={control}
                name="services"
                render={({ field }) => (
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {[
                      { value: 'EPC Certificate', label: 'Domestic EPC', desc: 'Official 10-year energy performance rating' },
                      { value: 'Floor Plan', label: 'Floor Plan', desc: 'Scale drawing detailing layout & room sizes' },
                      { value: 'Both (Bundle)', label: 'EPC + Floor Plan', desc: 'Get both together & save up to 50% on floor plan!' },
                    ].map((s) => {
                      const checked = field.value?.includes(s.value as any)
                      const isBundle = s.value === 'Both (Bundle)'
                      return (
                        <button
                          key={s.value}
                          type="button"
                          onClick={() => {
                            // If user clicks bundle, set value to Both (Bundle)
                            if (isBundle) {
                              field.onChange(['Both (Bundle)'])
                            } else {
                              // If they clicked individual service, remove bundle selection
                              const current = (field.value ?? []).filter(v => v !== 'Both (Bundle)')
                              const idx = current.indexOf(s.value as any)
                              if (idx > -1) {
                                current.splice(idx, 1)
                              } else {
                                current.push(s.value as any)
                              }
                              field.onChange(current.length === 0 ? ['EPC Certificate'] : current)
                            }
                          }}
                          className={cn(
                            'flex flex-col text-left p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 shadow-sm min-h-[100px]',
                            checked
                              ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-500'
                              : 'border-secondary-200 bg-white hover:border-secondary-300'
                          )}
                        >
                          <span className="flex items-center gap-1.5 font-bold text-sm text-secondary-900">
                            {s.label}
                            {isBundle && (
                              <span className="text-[9px] uppercase tracking-wider bg-accent-500 text-white font-black px-1.5 py-0.5 rounded">
                                Best Value
                              </span>
                            )}
                          </span>
                          <span className="text-xs text-secondary-500 mt-1.5 leading-snug">{s.desc}</span>
                        </button>
                      )
                    })}
                  </div>
                )}
              />
              {errors.services && (
                <p className="mt-1.5 text-xs text-danger" role="alert">
                  {errors.services.message}
                </p>
              )}
            </div>

            <div>
              <h4 className="text-lg font-bold text-secondary-900">Select Property Size</h4>
              <p className="text-xs text-secondary-500 mt-1">Pricing depends on bedroom size. Please select the correct option.</p>
              
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {propertyTypes.map((p) => {
                  const active = watchPropertyType === p
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setValue('propertyType', p, { shouldValidate: true })}
                      className={cn(
                        'flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm',
                        active
                          ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-500'
                          : 'border-secondary-200 bg-white hover:border-secondary-300'
                      )}
                    >
                      <span className="font-bold text-sm text-secondary-900">{p}</span>
                    </button>
                  )
                })}
              </div>
              {errors.propertyType && (
                <p className="mt-1.5 text-xs text-danger" role="alert">
                  {errors.propertyType.message}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Speed & Date */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h4 className="text-lg font-bold text-secondary-900">Select Delivery Speed</h4>
              <p className="text-xs text-secondary-500 mt-1">Need your certificate quickly? Next-day service is available.</p>
              
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { value: 'Standard (72 hours)', label: 'Standard Delivery', desc: 'Certificate sent within 72 hours of visit', priceBadge: 'Included' },
                  { value: 'Express (Next day, +£12)', label: 'Express Delivery (+£12)', desc: 'Guaranteed certificate within 24 hours of visit', priceBadge: '£12 extra' },
                ].map((s) => {
                  const active = watchSpeed === s.value
                  return (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => setValue('speed', s.value as any, { shouldValidate: true })}
                      className={cn(
                        'flex flex-col text-left p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 shadow-sm min-h-[90px]',
                        active
                          ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-500'
                          : 'border-secondary-200 bg-white hover:border-secondary-300'
                      )}
                    >
                      <span className="flex justify-between items-center w-full font-bold text-sm text-secondary-900">
                        {s.label}
                        <span className={cn(
                          'text-[10px] font-bold px-2 py-0.5 rounded-full',
                          active ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-650'
                        )}>
                          {s.priceBadge}
                        </span>
                      </span>
                      <span className="text-xs text-secondary-500 mt-1.5 leading-snug">{s.desc}</span>
                    </button>
                  )
                })}
              </div>
              {errors.speed && (
                <p className="mt-1.5 text-xs text-danger" role="alert">
                  {errors.speed.message}
                </p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Preferred Visit Date" htmlFor="preferredDate" hint="Select a date for the assessor's visit. Optional.">
                <div className="relative">
                  <Input id="preferredDate" type="date" {...register('preferredDate')} />
                </div>
              </Field>
              <Field label="Additional Instructions" htmlFor="notes" hint="e.g. key codes, parking info, property details. Optional.">
                <Input id="notes" placeholder="Notes for the assessor..." {...register('notes')} />
              </Field>
            </div>
          </div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <h4 className="text-lg font-bold text-secondary-900">Enter Contact & Property Address</h4>
            <p className="text-xs text-secondary-500">Provide the property details and where we should send the invoice and certificate.</p>
            
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
              <Field label="Full Name" htmlFor="name" required error={errors.name?.message}>
                <Input
                  id="name"
                  autoComplete="name"
                  hasError={!!errors.name}
                  aria-invalid={!!errors.name}
                  {...register('name')}
                />
              </Field>
              <Field label="Phone Number" htmlFor="phone" required error={errors.phone?.message}>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  hasError={!!errors.phone}
                  aria-invalid={!!errors.phone}
                  {...register('phone')}
                />
              </Field>
              <Field
                label="Email Address"
                htmlFor="email"
                required
                error={errors.email?.message}
                className="col-span-2"
              >
                <Input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  hasError={!!errors.email}
                  aria-invalid={!!errors.email}
                  {...register('email')}
                />
              </Field>
              <Field
                label="Full Property Address"
                htmlFor="address"
                required
                error={errors.address?.message}
                className="col-span-2"
              >
                <Textarea
                  id="address"
                  rows={2}
                  placeholder="Include street number, block name, and flat number..."
                  autoComplete="street-address"
                  hasError={!!errors.address}
                  aria-invalid={!!errors.address}
                  {...register('address')}
                />
              </Field>
              <Field label="Postcode" htmlFor="postcode" required error={errors.postcode?.message}>
                <Input
                  id="postcode"
                  autoComplete="postal-code"
                  placeholder="e.g. E15 3JZ"
                  hasError={!!errors.postcode}
                  aria-invalid={!!errors.postcode}
                  {...register('postcode')}
                />
              </Field>
            </div>

            <div className="mt-4 pt-2">
              <label className="flex items-start gap-2.5 text-xs text-secondary-650 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                  {...register('consent')}
                />
                <span>
                  I agree to be contacted about my enquiry. We only use your details for this booking request. Read our{' '}
                  <a href="/privacy-policy" className="text-primary-700 font-semibold hover:underline">
                    privacy policy
                  </a>
                  .
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1.5 text-xs text-danger" role="alert">
                  {errors.consent.message}
                </p>
              )}
            </div>

            {status === 'error' && serverError && (
              <div className="mt-4 flex items-start gap-2 rounded-xl border border-danger/30 bg-danger/5 p-3 text-xs text-danger animate-fade-in" role="alert">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                <p>{serverError}</p>
              </div>
            )}
          </div>
        )}

        {/* Wizard Controls */}
        <div className="mt-8 pt-5 border-t border-secondary-100 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 min-h-[44px] font-bold text-sm text-secondary-700 hover:text-secondary-900 px-4 rounded-xl border border-secondary-200 hover:bg-secondary-50"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 min-h-[44px] font-bold text-sm bg-primary-600 text-white hover:bg-primary-700 px-5 rounded-xl shadow-sm hover:shadow-md transition-all ml-auto"
            >
              Next Step
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <Button
              type="submit"
              variant="accent"
              size="md"
              className="ml-auto"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                'Submit Booking Request'
              )}
            </Button>
          )}
        </div>
      </form>

      {/* Live Quote Summary Sidebar */}
      <div className="lg:col-span-4 rounded-2xl border border-secondary-200 bg-glass p-5 md:p-6 shadow-premium lg:sticky lg:top-24 lg:mt-0 mt-4">
        <h4 className="text-sm font-bold text-secondary-900 tracking-wider uppercase flex items-center gap-1.5 border-b border-secondary-100 pb-3 mb-4">
          <BadgePoundSterling className="w-4 h-4 text-primary-650" />
          Live Price Estimate
        </h4>

        <div className="space-y-3.5 text-xs text-secondary-700">
          <div className="flex justify-between items-start">
            <div>
              <span className="font-semibold block text-secondary-900">Services:</span>
              <span className="text-[10px] text-secondary-500 mt-0.5 block leading-relaxed">
                {wantsEpc && wantsFloorPlan ? 'EPC + Floor Plan Bundle' : wantsEpc ? 'Domestic EPC Only' : wantsFloorPlan ? 'Floor Plan Only' : 'No service selected'}
              </span>
            </div>
            {wantsEpc && wantsFloorPlan ? (
              <div className="text-right">
                <span className="text-secondary-405 line-through">£{epcPrice + floorPlanPrice}</span>
                <span className="font-bold text-secondary-900 block">£{epcPrice + floorPlanPrice - discount}</span>
              </div>
            ) : (
              <span className="font-bold text-secondary-900">£{epcPrice + floorPlanPrice}</span>
            )}
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Property Size:</span>
            <span className="font-bold text-secondary-900">{watchPropertyType}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Delivery Speed:</span>
            <span className="font-bold text-secondary-900">{watchSpeed?.split(' (')[0]}</span>
          </div>

          {isExpress && (
            <div className="flex justify-between text-xs text-secondary-900">
              <span>Express Delivery Surcharge:</span>
              <span className="font-bold">+£12</span>
            </div>
          )}

          {discount > 0 && (
            <div className="flex justify-between text-xs text-success font-semibold bg-success/5 border border-success/20 p-2 rounded-lg items-center">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Bundle Discount Included:
              </span>
              <span>-£{discount}</span>
            </div>
          )}

          <div className="border-t border-secondary-100 pt-4 mt-4 flex justify-between items-baseline">
            <span className="text-sm font-bold text-secondary-905">Total Estimate:</span>
            <span className="text-2xl font-black text-primary-750 font-display">£{total}</span>
          </div>
        </div>

        <div className="mt-5 border-t border-secondary-100 pt-4 space-y-2">
          <h5 className="text-[10px] font-bold uppercase tracking-wider text-secondary-500">What&apos;s Included:</h5>
          <ul className="space-y-1.5 text-[10px] text-secondary-600">
            <li className="flex items-center gap-1.5">
              <ClipboardCheck className="w-3.5 h-3.5 text-primary-600 shrink-0" />
              Elmhurst Lodgement Fee
            </li>
            <li className="flex items-center gap-1.5">
              <ClipboardCheck className="w-3.5 h-3.5 text-primary-600 shrink-0" />
              Official Government Register Listing
            </li>
            <li className="flex items-center gap-1.5">
              <ClipboardCheck className="w-3.5 h-3.5 text-primary-600 shrink-0" />
              No Travel/Call-out Surcharges
            </li>
            <li className="flex items-center gap-1.5">
              <ClipboardCheck className="w-3.5 h-3.5 text-primary-600 shrink-0" />
              Digital PDF copy emailed to you
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
