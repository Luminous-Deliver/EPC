'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'
import { Field, Input, Textarea, Select } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'
import {
  contactSchema,
  propertyTypes,
  services as serviceOptions,
  speeds,
  type ContactInput,
} from '@/lib/validators'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
      postcode: '',
      services: [],
      preferredDate: '',
      notes: '',
      website: '',
    },
  })

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

  if (status === 'success') {
    return (
      <div
        className="rounded-lg border border-primary-200 bg-primary-50 p-6 md:p-8"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-primary-700 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-semibold text-secondary-900">Booking request received</h3>
            <p className="mt-2 text-secondary-700 leading-relaxed">
              Thanks — we’ll be in touch within 2 hours during business hours (Mon–Sun, 8am–8pm). For urgent requests, call us on{' '}
              <a href="tel:+447492575396" className="font-semibold text-primary-700 hover:underline">
                07492 575 396
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm font-semibold text-primary-700 hover:underline"
            >
              Send another request
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-xl border border-secondary-200 bg-white p-4 md:p-8 shadow-sm"
      aria-describedby="form-help"
    >
      <p id="form-help" className="text-xs text-secondary-500">
        Fields marked <span className="text-danger">*</span> are required.
      </p>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
        </label>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Field label="Full Name" htmlFor="name" required error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            hasError={!!errors.name}
            aria-invalid={!!errors.name}
            {...register('name')}
          />
        </Field>
        <Field label="Phone" htmlFor="phone" required error={errors.phone?.message}>
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
          label="Property Address"
          htmlFor="address"
          required
          error={errors.address?.message}
          className="col-span-2"
        >
          <Textarea
            id="address"
            rows={2}
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
        <Field label="Property Type" htmlFor="propertyType" required error={errors.propertyType?.message}>
          <Select
            id="propertyType"
            defaultValue=""
            hasError={!!errors.propertyType}
            aria-invalid={!!errors.propertyType}
            {...register('propertyType')}
          >
            <option value="" disabled>
              Select…
            </option>
            {propertyTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <fieldset className="mt-3">
        <legend className="text-sm font-medium text-secondary-800">
          Service Required <span className="text-danger">*</span>
        </legend>
        <Controller
          control={control}
          name="services"
          render={({ field }) => (
            <div className="mt-1.5 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
              {serviceOptions.map((s) => {
                const checked = field.value?.includes(s)
                return (
                  <label
                    key={s}
                    className={cn(
                      'flex items-center gap-2 rounded-md border px-3 py-2 cursor-pointer text-sm',
                      checked
                        ? 'border-primary-500 bg-primary-50 text-primary-900'
                        : 'border-secondary-200 bg-white text-secondary-800 hover:border-secondary-300',
                    )}
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                      checked={!!checked}
                      onChange={(e) => {
                        const next = new Set(field.value ?? [])
                        if (e.target.checked) next.add(s)
                        else next.delete(s)
                        field.onChange(Array.from(next))
                      }}
                    />
                    {s}
                  </label>
                )
              })}
            </div>
          )}
        />
        {errors.services && (
          <p className="mt-1.5 text-xs text-danger" role="alert">
            {errors.services.message as string}
          </p>
        )}
      </fieldset>

      <fieldset className="mt-3">
        <legend className="text-sm font-medium text-secondary-800">
          Service Speed <span className="text-danger">*</span>
        </legend>
        <div className="mt-1.5 grid grid-cols-2 gap-1.5">
          {speeds.map((s) => (
            <label
              key={s}
              className="flex items-center gap-2 rounded-md border border-secondary-200 bg-white px-3 py-2 cursor-pointer text-sm text-secondary-800 hover:border-secondary-300 has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 has-[:checked]:text-primary-900"
            >
              <input
                type="radio"
                value={s}
                className="h-4 w-4 border-secondary-300 text-primary-600 focus:ring-primary-500"
                {...register('speed')}
              />
              {s}
            </label>
          ))}
        </div>
        {errors.speed && (
          <p className="mt-1.5 text-xs text-danger" role="alert">
            {errors.speed.message}
          </p>
        )}
      </fieldset>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Field label="Preferred Date" htmlFor="preferredDate" hint="Optional">
          <Input id="preferredDate" type="date" {...register('preferredDate')} />
        </Field>
        <Field label="Additional Notes" htmlFor="notes" hint="Optional">
          <Textarea id="notes" rows={1} {...register('notes')} />
        </Field>
      </div>

      <div className="mt-3">
        <label className="flex items-start gap-2.5 text-sm text-secondary-700">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
            {...register('consent')}
          />
          <span>
            I agree to be contacted about my EPC enquiry. We’ll only use your details to respond to this booking request. See our{' '}
            <a href="/privacy-policy" className="text-primary-700 underline hover:text-primary-800">
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
        <div className="mt-5 flex items-start gap-2 rounded-md border border-danger/30 bg-danger/5 p-3 text-sm text-danger" role="alert">
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <p>{serverError}</p>
        </div>
      )}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="mt-4 w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Send Booking Request'
        )}
      </Button>
    </form>
  )
}
