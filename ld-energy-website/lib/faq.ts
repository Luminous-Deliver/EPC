export interface FaqItem {
  q: string
  a: string
}

export const homepageFaq: FaqItem[] = [
  {
    q: 'How long is an EPC valid for?',
    a: 'An EPC is valid for 10 years from the date of issue. After 10 years, you’ll need a new EPC if you’re selling or letting the property.',
  },
  {
    q: 'Do I need an EPC to sell my house in London?',
    a: 'Yes. You’re legally required to have a valid EPC before marketing your property for sale in England and Wales. Estate agents cannot legally list your property without one.',
  },
  {
    q: 'Do I need an EPC to rent out my property?',
    a: 'Yes. Under MEES regulations, landlords must have a valid EPC rated E or above to legally let a property in England and Wales. Letting without one can result in fines up to £5,000 per property.',
  },
  {
    q: 'How much does an EPC cost in London?',
    a: 'Our EPC prices in London are fixed by property size: £49 for studios, £60 for 1-bedroom, £65 for 2-bedroom, £67 for 3-bedroom, £69 for 4-bedroom, and £79 for 5+ bedroom homes. Next-day service is available for £12 extra.',
  },
  {
    q: 'How long does an EPC assessment take?',
    a: 'An EPC assessment typically takes 45 minutes for a studio and up to 2 hours for a 5+ bedroom property. We’ll provide an accurate time estimate when you book.',
  },
  {
    q: 'How quickly will I receive my EPC certificate?',
    a: 'Standard delivery is within 72 hours of the assessment. Our next-day service guarantees your certificate within 24 hours for an additional £12.',
  },
  {
    q: 'What does the assessor check during an EPC?',
    a: 'Our assessor measures the property, then records construction details, insulation, heating systems, hot water, lighting, windows, and ventilation. No preparation is needed from you — just normal access to all rooms.',
  },
  {
    q: 'Can I improve my EPC rating?',
    a: 'Yes. Your EPC includes specific improvement recommendations. Common cost-effective upgrades include loft insulation, LED lighting, cavity wall insulation, and modern condensing boilers.',
  },
  {
    q: 'What are MEES regulations?',
    a: 'Minimum Energy Efficiency Standards (MEES) require all rental properties in England and Wales to have an EPC rating of E or above. The government is consulting on raising this to C for new tenancies by 2028 and all tenancies by 2030.',
  },
  {
    q: 'Which areas of London do you cover?',
    a: 'We cover all 32 London boroughs and the City of London, plus surrounding areas within a 1.5-hour radius of Stratford, East London.',
  },
]

export interface FaqCategory {
  id: string
  title: string
  items: FaqItem[]
}

export const fullFaq: FaqCategory[] = [
  {
    id: 'about-epcs',
    title: 'About EPCs',
    items: [
      {
        q: 'What is an EPC?',
        a: 'An Energy Performance Certificate (EPC) is an official UK government document that rates a property’s energy efficiency from A (most efficient) to G (least efficient). It shows current and potential energy efficiency, estimated annual energy costs, CO₂ emissions, and recommendations for improvement.',
      },
      {
        q: 'How long is an EPC valid?',
        a: 'An EPC is valid for 10 years from the date of issue. After 10 years, you’ll need a new EPC if you’re selling or letting the property.',
      },
      {
        q: 'What information is on an EPC?',
        a: 'Your EPC shows the current rating (A–G), the potential rating after recommended improvements, estimated annual energy costs, CO₂ emissions, and a list of specific improvement recommendations with estimated costs and savings.',
      },
      {
        q: 'Who can issue an EPC?',
        a: 'Only an accredited Domestic Energy Assessor (DEA) registered with a government-approved scheme can issue a domestic EPC. We are accredited with Elmhurst Energy, the UK’s largest energy assessor scheme. Every EPC we produce is lodged on the official UK Government EPC Register.',
      },
      {
        q: 'How is the EPC rating calculated?',
        a: 'The rating is calculated using the Reduced data Standard Assessment Procedure (RdSAP) — currently RdSAP 10. The assessor records construction details, insulation, heating, hot water, lighting, windows, and ventilation. The software calculates a Standard Assessment Procedure (SAP) score from 1–100, which maps to a band from A to G.',
      },
    ],
  },
  {
    id: 'legal-requirements',
    title: 'Legal Requirements',
    items: [
      {
        q: 'Do I need an EPC to sell my home?',
        a: 'Yes. You’re legally required to have an EPC commissioned before marketing your property for sale in England and Wales. Estate agents cannot legally list your property without one.',
      },
      {
        q: 'Do I need an EPC to rent out my property?',
        a: 'Yes. Under MEES regulations, all rental properties in England and Wales must have a valid EPC rated E or above. Letting without a compliant EPC can result in fines up to £5,000 per property.',
      },
      {
        q: 'What are MEES regulations?',
        a: 'Minimum Energy Efficiency Standards (MEES) require all rental properties to have an EPC rating of E or above. The government has consulted on raising this to C for new tenancies by 2028 and all tenancies by 2030.',
      },
      {
        q: 'What if my property is below an E rating?',
        a: 'You cannot legally let a property rated F or G unless you have a registered exemption. You’ll need to make improvements to reach at least E. Your EPC report includes specific recommendations to help you do this.',
      },
      {
        q: 'Are there any exemptions?',
        a: 'Yes, limited exemptions exist (for example, all relevant improvements completed but rating still below E, third-party consent refused, or wall insulation that would damage the fabric of the property). Exemptions must be registered on the PRS Exemptions Register and last up to 5 years.',
      },
    ],
  },
  {
    id: 'process',
    title: 'Process',
    items: [
      {
        q: 'How do I book an EPC?',
        a: 'Call us on 07492 575 396, send a WhatsApp message, email contact@luminousanddeliver.co.uk, or use our online booking form. We respond within 2 hours during business hours (Mon–Sun, 8am–8pm).',
      },
      {
        q: 'How long does the assessment take?',
        a: 'Typically 45 minutes for a studio and up to 2 hours for a 5+ bedroom property. We’ll provide an accurate time estimate when you book.',
      },
      {
        q: 'What do I need to prepare?',
        a: 'No specific preparation is required. Just provide normal access to all rooms, loft hatches if accessible, the boiler, hot water cylinder, and any heating controls. Documentation such as boiler service records or insulation guarantees can be helpful but is not required.',
      },
      {
        q: 'How quickly will I get my certificate?',
        a: 'Standard delivery is within 72 hours of the assessment. Our next-day service guarantees your certificate within 24 hours for an additional £12.',
      },
      {
        q: 'Can I see the assessor’s credentials?',
        a: 'Yes. We’re happy to share our Elmhurst Energy accreditation details on request. You can also verify any Domestic Energy Assessor on the EPC Register at gov.uk.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing',
    items: [
      {
        q: 'How much does an EPC cost?',
        a: 'Our EPC prices are fixed by property size: £49 for studios, £60 for 1-bedroom, £65 for 2-bedroom, £67 for 3-bedroom, £69 for 4-bedroom, and £79 for 5+ bedroom homes. Next-day service is available for £12 extra.',
      },
      {
        q: 'Are there hidden fees?',
        a: 'No. The price you see is the price you pay. There are no hidden fees, no call-out charges, and no travel surcharges for any property within our service area.',
      },
      {
        q: 'Do you charge for travel?',
        a: 'No. Travel is included in the standard price for all properties within our service area (all 32 London boroughs and the City of London, plus a 1.5-hour radius of Stratford). For properties outside this area, contact us for a tailored quote.',
      },
      {
        q: 'Can I get a discount for multiple properties?',
        a: 'Yes. We offer portfolio rates for landlords and letting agents with multiple properties. Contact us directly for a quote.',
      },
      {
        q: 'What is the next-day service?',
        a: 'For £12 extra, we guarantee your EPC certificate within 24 hours of the assessment. This applies to assessments completed during our standard hours. Book before noon for the best chance of a same-day or next-morning appointment.',
      },
    ],
  },
  {
    id: 'improvements',
    title: 'Improvements',
    items: [
      {
        q: 'How can I improve my EPC rating?',
        a: 'Your EPC includes specific improvement recommendations tailored to your property. Common cost-effective upgrades include loft insulation, LED lighting, cavity wall insulation, modern condensing boilers with smart controls, double glazing, and renewable systems like solar PV or heat pumps.',
      },
      {
        q: 'Which improvements give the best return?',
        a: 'For most London properties, the highest-return upgrades are LED lighting (low cost, immediate impact), loft insulation, a modern condensing boiler with proper controls, and cavity wall insulation where applicable. Solar PV and heat pumps deliver bigger rating jumps but require larger investment.',
      },
      {
        q: 'Will I need a new EPC after improvements?',
        a: 'Your current EPC remains valid for 10 years regardless of improvements. However, if you want the new, higher rating to appear on the EPC Register (for example to prove MEES compliance or support a sale), you’ll need a fresh assessment.',
      },
    ],
  },
]
