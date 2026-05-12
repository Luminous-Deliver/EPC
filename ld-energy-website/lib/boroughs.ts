export interface BoroughMeta {
  slug: string
  name: string
  /** Short note used in local intros (postcodes, nearby stations, character) */
  blurb: string
  /** 5–6 neighbouring borough slugs for internal linking */
  neighbours: string[]
}

export const boroughMeta: Record<string, BoroughMeta> = {
  stratford: {
    slug: 'stratford',
    name: 'Stratford',
    blurb:
      'Our local home base in the E15 and E20 postcodes — covering Westfield, the Olympic Park and surrounding new-build apartments and Victorian terraces.',
    neighbours: ['newham', 'hackney', 'tower-hamlets', 'waltham-forest', 'greenwich'],
  },
  hackney: {
    slug: 'hackney',
    name: 'Hackney',
    blurb:
      'Covering E2, E5, E8, E9, N1 and N16 — from Victorian conversions in Dalston and Stoke Newington to new-build apartments in Hackney Wick.',
    neighbours: ['islington', 'tower-hamlets', 'newham', 'waltham-forest', 'haringey'],
  },
  'tower-hamlets': {
    slug: 'tower-hamlets',
    name: 'Tower Hamlets',
    blurb:
      'Serving E1, E2, E3, E14 and the wider Canary Wharf, Whitechapel, Bow and Isle of Dogs area — riverside flats, period terraces and modern developments.',
    neighbours: ['hackney', 'newham', 'southwark', 'city-of-london', 'greenwich'],
  },
  newham: {
    slug: 'newham',
    name: 'Newham',
    blurb:
      'Covering E6, E7, E12, E13, E15 and E16 — including Stratford, East Ham, Forest Gate, Plaistow and Royal Docks new builds.',
    neighbours: ['stratford', 'tower-hamlets', 'barking-dagenham', 'waltham-forest', 'greenwich'],
  },
  greenwich: {
    slug: 'greenwich',
    name: 'Greenwich',
    blurb:
      'Covering SE3, SE7, SE10 and SE18 — Greenwich, Blackheath, Charlton and Woolwich, with a mix of period homes and new riverside developments.',
    neighbours: ['lewisham', 'bexley', 'tower-hamlets', 'southwark', 'bromley'],
  },
  islington: {
    slug: 'islington',
    name: 'Islington',
    blurb:
      'Covering N1, N5, N7 and N19 — Georgian and Victorian terraces in Angel, Highbury and Archway plus modern conversions near King’s Cross.',
    neighbours: ['camden', 'hackney', 'haringey', 'city-of-london', 'westminster'],
  },
  southwark: {
    slug: 'southwark',
    name: 'Southwark',
    blurb:
      'Covering SE1, SE5, SE15, SE16 and SE17 — Bermondsey, Peckham, Camberwell and Bankside, from warehouse conversions to Victorian terraces.',
    neighbours: ['lambeth', 'lewisham', 'tower-hamlets', 'city-of-london', 'wandsworth'],
  },
  lewisham: {
    slug: 'lewisham',
    name: 'Lewisham',
    blurb:
      'Covering SE4, SE6, SE13, SE14, SE23 and SE26 — Brockley, Catford, Forest Hill, Sydenham and New Cross terraces and converted flats.',
    neighbours: ['greenwich', 'southwark', 'bromley', 'bexley', 'lambeth'],
  },
  'barking-dagenham': {
    slug: 'barking-dagenham',
    name: 'Barking & Dagenham',
    blurb:
      'Covering IG11, RM8, RM9 and RM10 — Barking, Dagenham, Becontree estate and surrounding new-build developments.',
    neighbours: ['newham', 'havering', 'redbridge', 'waltham-forest', 'greenwich'],
  },
  'waltham-forest': {
    slug: 'waltham-forest',
    name: 'Waltham Forest',
    blurb:
      'Covering E4, E10, E11 and E17 — Walthamstow, Leyton, Leytonstone and Chingford, popular with first-time landlords and growing families.',
    neighbours: ['hackney', 'haringey', 'redbridge', 'newham', 'enfield'],
  },
  camden: {
    slug: 'camden',
    name: 'Camden',
    blurb:
      'Covering NW1, NW3, NW5 and WC1 — Camden Town, Belsize Park, Kentish Town and Bloomsbury, with a wide mix of period and contemporary stock.',
    neighbours: ['islington', 'westminster', 'haringey', 'brent', 'barnet'],
  },
  westminster: {
    slug: 'westminster',
    name: 'Westminster',
    blurb:
      'Covering W1, W2, SW1 and NW8 — Mayfair, Marylebone, Pimlico and St John’s Wood, including mansion-block flats and period townhouses.',
    neighbours: ['camden', 'kensington-chelsea', 'islington', 'lambeth', 'city-of-london'],
  },
  lambeth: {
    slug: 'lambeth',
    name: 'Lambeth',
    blurb:
      'Covering SE1, SE11, SE24, SW2, SW4, SW8, SW9 and SW16 — Brixton, Clapham, Kennington, Streatham and Vauxhall.',
    neighbours: ['southwark', 'wandsworth', 'westminster', 'lewisham', 'merton'],
  },
  wandsworth: {
    slug: 'wandsworth',
    name: 'Wandsworth',
    blurb:
      'Covering SW8, SW11, SW12, SW15, SW17 and SW18 — Battersea, Balham, Tooting, Putney and Earlsfield.',
    neighbours: ['lambeth', 'merton', 'hammersmith-fulham', 'kensington-chelsea', 'richmond'],
  },
  brent: {
    slug: 'brent',
    name: 'Brent',
    blurb:
      'Covering NW2, NW6, NW9, NW10 and HA0 — Wembley, Willesden, Kilburn and Harlesden, including a high volume of letting properties.',
    neighbours: ['camden', 'ealing', 'harrow', 'barnet', 'hammersmith-fulham'],
  },
  ealing: {
    slug: 'ealing',
    name: 'Ealing',
    blurb:
      'Covering W3, W5, W7, W13 and UB1 — Ealing, Acton, Hanwell, Southall and West Ealing, with strong demand from family lets.',
    neighbours: ['hounslow', 'hillingdon', 'brent', 'hammersmith-fulham', 'harrow'],
  },
  hounslow: {
    slug: 'hounslow',
    name: 'Hounslow',
    blurb:
      'Covering TW3, TW4, TW7, TW8 and TW13 — Hounslow, Brentford, Isleworth, Chiswick and Feltham.',
    neighbours: ['ealing', 'richmond', 'hillingdon', 'hammersmith-fulham', 'kingston'],
  },
  richmond: {
    slug: 'richmond',
    name: 'Richmond upon Thames',
    blurb:
      'Covering TW1, TW2, TW9, TW10, KT2 and SW14 — Richmond, Twickenham, Kew, Teddington and East Sheen.',
    neighbours: ['hounslow', 'kingston', 'wandsworth', 'hammersmith-fulham', 'merton'],
  },
  kingston: {
    slug: 'kingston',
    name: 'Kingston upon Thames',
    blurb:
      'Covering KT1, KT2, KT3, KT5 and KT6 — Kingston, New Malden, Surbiton and Tolworth.',
    neighbours: ['richmond', 'merton', 'sutton', 'wandsworth', 'hounslow'],
  },
  croydon: {
    slug: 'croydon',
    name: 'Croydon',
    blurb:
      'Covering CR0, CR2, CR7 and SE25 — Croydon, Thornton Heath, South Norwood and Purley.',
    neighbours: ['sutton', 'bromley', 'lambeth', 'merton', 'lewisham'],
  },
  enfield: {
    slug: 'enfield',
    name: 'Enfield',
    blurb:
      'Covering EN1, EN2, EN3, N9, N13, N14, N18 and N21 — Enfield Town, Edmonton, Palmers Green and Southgate.',
    neighbours: ['haringey', 'waltham-forest', 'barnet', 'redbridge', 'hackney'],
  },
  haringey: {
    slug: 'haringey',
    name: 'Haringey',
    blurb:
      'Covering N4, N8, N15, N17 and N22 — Tottenham, Wood Green, Crouch End, Hornsey and Muswell Hill.',
    neighbours: ['enfield', 'hackney', 'islington', 'camden', 'barnet'],
  },
  redbridge: {
    slug: 'redbridge',
    name: 'Redbridge',
    blurb:
      'Covering IG1, IG2, IG4, IG5, IG6 and E18 — Ilford, Wanstead, Woodford and Barkingside.',
    neighbours: ['waltham-forest', 'havering', 'newham', 'barking-dagenham', 'enfield'],
  },
  havering: {
    slug: 'havering',
    name: 'Havering',
    blurb:
      'Covering RM1, RM2, RM3, RM11, RM12, RM13 and RM14 — Romford, Hornchurch, Upminster and Rainham.',
    neighbours: ['redbridge', 'barking-dagenham', 'bexley', 'newham', 'greenwich'],
  },
  bexley: {
    slug: 'bexley',
    name: 'Bexley',
    blurb:
      'Covering DA1, DA5, DA6, DA7, DA8, DA14, DA15, DA16 and DA17 — Bexleyheath, Welling, Sidcup and Erith.',
    neighbours: ['greenwich', 'bromley', 'lewisham', 'havering', 'barking-dagenham'],
  },
  bromley: {
    slug: 'bromley',
    name: 'Bromley',
    blurb:
      'Covering BR1–BR8, SE9, SE19, SE20 and SE26 — Bromley, Beckenham, Orpington, Chislehurst and Penge.',
    neighbours: ['lewisham', 'greenwich', 'bexley', 'croydon', 'southwark'],
  },
  sutton: {
    slug: 'sutton',
    name: 'Sutton',
    blurb:
      'Covering SM1–SM7 — Sutton, Cheam, Wallington, Carshalton and Worcester Park.',
    neighbours: ['croydon', 'merton', 'kingston', 'lambeth', 'wandsworth'],
  },
  merton: {
    slug: 'merton',
    name: 'Merton',
    blurb:
      'Covering SW19, SW20, CR4, KT3 and SM4 — Wimbledon, Mitcham, Morden and Colliers Wood.',
    neighbours: ['wandsworth', 'lambeth', 'sutton', 'kingston', 'croydon'],
  },
  'hammersmith-fulham': {
    slug: 'hammersmith-fulham',
    name: 'Hammersmith & Fulham',
    blurb:
      'Covering W6, W12, W14, SW6 and SW10 — Hammersmith, Fulham, Shepherd’s Bush and Parsons Green.',
    neighbours: ['kensington-chelsea', 'wandsworth', 'ealing', 'brent', 'richmond'],
  },
  'kensington-chelsea': {
    slug: 'kensington-chelsea',
    name: 'Kensington & Chelsea',
    blurb:
      'Covering W8, W10, W11, SW3, SW5, SW7 and SW10 — Notting Hill, Chelsea, Kensington and Earl’s Court.',
    neighbours: ['westminster', 'hammersmith-fulham', 'wandsworth', 'brent', 'camden'],
  },
  'city-of-london': {
    slug: 'city-of-london',
    name: 'City of London',
    blurb:
      'Covering EC1, EC2, EC3 and EC4 — the Square Mile and Barbican apartments, plus Smithfield and Fleet Street conversions.',
    neighbours: ['islington', 'tower-hamlets', 'southwark', 'westminster', 'hackney'],
  },
  barnet: {
    slug: 'barnet',
    name: 'Barnet',
    blurb:
      'Covering EN4, EN5, HA8, N2, N3, N10, N11, N12, N14, N20, NW2, NW4, NW7, NW9 and NW11 — Barnet, Finchley, Hendon, Edgware and Mill Hill.',
    neighbours: ['enfield', 'haringey', 'camden', 'brent', 'harrow'],
  },
  harrow: {
    slug: 'harrow',
    name: 'Harrow',
    blurb:
      'Covering HA1, HA2, HA3, HA5, HA7 and HA8 — Harrow, Pinner, Stanmore and Wealdstone.',
    neighbours: ['brent', 'barnet', 'hillingdon', 'ealing', 'enfield'],
  },
  hillingdon: {
    slug: 'hillingdon',
    name: 'Hillingdon',
    blurb:
      'Covering UB3, UB4, UB7, UB8, UB9, UB10, HA4 and HA6 — Uxbridge, Hayes, Ruislip, Hillingdon and Northwood.',
    neighbours: ['ealing', 'harrow', 'hounslow', 'brent', 'havering'],
  },
}

export const boroughList = Object.values(boroughMeta)
