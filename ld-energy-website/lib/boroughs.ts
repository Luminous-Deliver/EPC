export interface BoroughMeta {
  slug: string
  name: string
  /** Short note used in local intros (postcodes, nearby stations, character) */
  blurb: string
  /** Typical property types and build eras in the area (~55-70 words) */
  housingStock: string
  /** Common EPC findings and improvement challenges for that stock (~55-70 words) */
  epcIssues: string
  /** Key transport links and what they mean for appointment access (~35-45 words) */
  transport: string
  /** 5–6 neighbouring borough slugs for internal linking */
  neighbours: string[]
}

export const boroughMeta: Record<string, BoroughMeta> = {
  stratford: {
    slug: 'stratford',
    name: 'Stratford',
    blurb:
      'Our local home base in the E15 and E20 postcodes, covering Westfield, the Olympic Park and surrounding new-build apartments and Victorian terraces.',
    housingStock:
      'Stratford spans the East Village apartments of the former athletes’ village, 2010s towers around the International Quarter, long Victorian terraces near Maryland and Forest Lane, and post-war ex-local-authority blocks. It is one of the fastest-changing housing markets in East London, with new E20 stock sitting alongside much older E15 terraced streets.',
    epcIssues:
      'New-build flats in East Village and the International Quarter typically rate B or C thanks to modern insulation and communal heat networks. The Victorian terraces around Maryland are a different story, solid brick walls, original sash windows and partial loft insulation regularly land them in band E or F, so internal wall insulation and glazing upgrades are the usual route to compliance.',
    transport:
      'Stratford and Stratford International stations give us the Elizabeth line, Jubilee, Central, DLR, Overground and c2c, so we can reach most appointments quickly, even at short notice.',
    neighbours: ['newham', 'hackney', 'tower-hamlets', 'waltham-forest', 'greenwich'],
  },
  hackney: {
    slug: 'hackney',
    name: 'Hackney',
    blurb:
      'Covering E2, E5, E8, E9, N1 and N16, from Victorian conversions in Dalston and Stoke Newington to new-build apartments in Hackney Wick.',
    housingStock:
      'Hackney’s housing is dominated by Victorian and Georgian terraces in De Beauvoir, London Fields and Stoke Newington, warehouse conversions around Hackney Wick, and large ex-local-authority estates in Clapton and Homerton. Period conversions split into flats are especially common across the E8 and N16 postcodes.',
    epcIssues:
      'Conservation-area restrictions across much of Hackney limit external alterations, so solid-wall terraces and converted flats commonly score D or E. Ground-floor conversions lose significant heat through uninsulated suspended timber floors, and original single glazing in protected streets caps the achievable rating without internal upgrades.',
    transport:
      'The London Overground spine, Dalston Junction, Hackney Central and Hackney Wick, plus Stoke Newington and Rectory Road rail give us good coverage despite Hackney’s limited Underground access.',
    neighbours: ['islington', 'tower-hamlets', 'newham', 'waltham-forest', 'haringey'],
  },
  'tower-hamlets': {
    slug: 'tower-hamlets',
    name: 'Tower Hamlets',
    blurb:
      'Serving E1, E2, E3, E14 and the wider Canary Wharf, Whitechapel, Bow and Isle of Dogs area, riverside flats, period terraces and modern developments.',
    housingStock:
      'Tower Hamlets ranges from Canary Wharf and Isle of Dogs high-rise apartments to Georgian townhouses in Spitalfields and Bow, riverside developments at Wapping, and dense post-war estates throughout. The E14 postcode in particular is dominated by modern apartment blocks.',
    epcIssues:
      'High-rise flats are constrained, owners cannot alter the building fabric, so ratings hinge on heating systems and glazing, and most modern blocks score B or C. Protected Georgian stock in Spitalfields and Bow, with solid walls and sash windows, tends to score E and needs internal insulation to improve.',
    transport:
      'The Jubilee line, DLR across the Isle of Dogs, and the Elizabeth line at Whitechapel and Canary Wharf make Tower Hamlets one of the quickest boroughs for us to cover.',
    neighbours: ['hackney', 'newham', 'southwark', 'city-of-london', 'greenwich'],
  },
  newham: {
    slug: 'newham',
    name: 'Newham',
    blurb:
      'Covering E6, E7, E12, E13, E15 and E16, including Stratford, East Ham, Forest Gate, Plaistow and Royal Docks new builds.',
    housingStock:
      'Newham is built around long Victorian terraces in Forest Gate, East Ham and Plaistow, the Royal Docks and Royal Wharf new-build developments, and a significant volume of ex-local-authority and HMO-converted stock. It has one of the largest private rental markets in London.',
    epcIssues:
      'With so much rental stock, landlords here frequently need MEES upgrades. Terraced properties with solid walls, ageing boilers and only partial loft insulation regularly fall into band E, while HMO conversions often need improved heating controls. Royal Docks new-builds, by contrast, usually rate B or C.',
    transport:
      'The Elizabeth line, DLR through the Royal Docks, c2c and the District and Hammersmith & City lines give us fast, flexible access across all six Newham postcodes.',
    neighbours: ['stratford', 'tower-hamlets', 'barking-dagenham', 'waltham-forest', 'greenwich'],
  },
  greenwich: {
    slug: 'greenwich',
    name: 'Greenwich',
    blurb:
      'Covering SE3, SE7, SE10 and SE18, Greenwich, Blackheath, Charlton and Woolwich, with a mix of period homes and new riverside developments.',
    housingStock:
      'Greenwich combines Georgian and early-Victorian houses around the town centre and Blackheath, 1930s semis in Charlton, and large new riverside developments at Greenwich Peninsula and Woolwich. The contrast between protected period streets and modern towers is stark.',
    epcIssues:
      'Period homes in the West Greenwich and Blackheath conservation areas often rate D or E due to solid walls and single glazing, with limited scope for external changes. Peninsula and Woolwich new-builds usually rate B, helped by communal heating and modern insulation standards.',
    transport:
      'The DLR, the Elizabeth line at Woolwich, Southeastern rail and the Jubilee line at North Greenwich together cover the borough’s spread-out riverside geography well.',
    neighbours: ['lewisham', 'bexley', 'tower-hamlets', 'southwark', 'bromley'],
  },
  islington: {
    slug: 'islington',
    name: 'Islington',
    blurb:
      'Covering N1, N5, N7 and N19, Georgian and Victorian terraces in Angel, Highbury and Archway plus modern conversions near King’s Cross.',
    housingStock:
      'Islington is defined by Georgian and Victorian terraces and garden squares in Barnsbury, Canonbury and Highbury, period houses subdivided into flats throughout, and newer developments around King’s Cross and Archway. It is one of the most conservation-controlled boroughs in London.',
    epcIssues:
      'Most period conversions score D or E. Solid walls rule out cheap cavity fill, original windows are often protected, and shared roof spaces in subdivided houses complicate loft insulation. Improvements usually focus on heating controls, hot water cylinders and internal measures.',
    transport:
      'The Victoria and Northern lines, plus Overground services and the major King’s Cross and Highbury & Islington interchanges, keep appointment access straightforward.',
    neighbours: ['camden', 'hackney', 'haringey', 'city-of-london', 'westminster'],
  },
  southwark: {
    slug: 'southwark',
    name: 'Southwark',
    blurb:
      'Covering SE1, SE5, SE15, SE16 and SE17, Bermondsey, Peckham, Camberwell and Bankside, from warehouse conversions to Victorian terraces.',
    housingStock:
      'Southwark mixes Bankside and Bermondsey warehouse conversions, Victorian terraces in Peckham and Camberwell, large estates in Walworth, and riverside towers along the Thames. The SE1 and SE16 postcodes carry much of the modern apartment stock.',
    epcIssues:
      'Warehouse conversions can struggle with single-skin walls and large areas of glazing, often scoring D. Victorian terraces in Peckham and Camberwell commonly need solid-wall insulation and boiler upgrades to clear band E, while modern riverside flats generally rate B or C.',
    transport:
      'The Jubilee line, Thameslink, the Overground at Peckham and Bermondsey, and the Northern line at Borough and Elephant & Castle give us strong coverage across Southwark.',
    neighbours: ['lambeth', 'lewisham', 'tower-hamlets', 'city-of-london', 'wandsworth'],
  },
  lewisham: {
    slug: 'lewisham',
    name: 'Lewisham',
    blurb:
      'Covering SE4, SE6, SE13, SE14, SE23 and SE26, Brockley, Catford, Forest Hill, Sydenham and New Cross terraces and converted flats.',
    housingStock:
      'Lewisham is largely Victorian and Edwardian terraces in Brockley, Forest Hill and Hither Green, 1930s semis in Catford, and a high volume of converted flats, with a growing number of new developments around Lewisham town centre.',
    epcIssues:
      'The borough’s large stock of converted Victorian flats, solid walls, suspended timber floors, partial loft cover, typically rates D or E. Many of these benefit quickly and cheaply from loft top-ups and heating control upgrades, which is good news for landlords facing MEES deadlines.',
    transport:
      'Southeastern rail, the DLR terminus at Lewisham, and the Overground through Brockley, Honor Oak Park and Forest Hill cover the borough well despite the absence of the Underground.',
    neighbours: ['greenwich', 'southwark', 'bromley', 'bexley', 'lambeth'],
  },
  'barking-dagenham': {
    slug: 'barking-dagenham',
    name: 'Barking & Dagenham',
    blurb:
      'Covering IG11, RM8, RM9 and RM10, Barking, Dagenham, Becontree estate and surrounding new-build developments.',
    housingStock:
      'The borough is dominated by the vast 1920s–30s Becontree estate of cottage-style houses, one of the largest public housing developments ever built, alongside post-war semis and major new-build regeneration at Barking Riverside.',
    epcIssues:
      'Becontree-era houses often have solid or early cavity walls and dated heating systems, regularly scoring D or E. With a large and growing landlord base, MEES upgrades, cavity insulation where possible, loft top-ups and new boilers, are a frequent requirement before re-letting.',
    transport:
      'The District and Hammersmith & City lines, c2c, the Overground, and the new Barking Riverside extension give us reliable access across all four postcodes.',
    neighbours: ['newham', 'havering', 'redbridge', 'waltham-forest', 'greenwich'],
  },
  'waltham-forest': {
    slug: 'waltham-forest',
    name: 'Waltham Forest',
    blurb:
      'Covering E4, E10, E11 and E17, Walthamstow, Leyton, Leytonstone and Chingford, popular with first-time landlords and growing families.',
    housingStock:
      'Waltham Forest is mostly Victorian and Edwardian terraces in Walthamstow and Leyton, 1930s semis in Chingford, and a large number of period houses converted into flats, stock that is popular with first-time buyers and landlords alike.',
    epcIssues:
      'Terraced and converted stock with solid walls and original windows typically rates D or E. Period flats often have uninsulated ground floors and only partial loft cover; improvements usually combine internal insulation, draught-proofing and heating control upgrades.',
    transport:
      'The Victoria line at Walthamstow Central, the Overground to Chingford, and Central line stations at Leyton and Leytonstone make the borough quick to cover.',
    neighbours: ['hackney', 'haringey', 'redbridge', 'newham', 'enfield'],
  },
  camden: {
    slug: 'camden',
    name: 'Camden',
    blurb:
      'Covering NW1, NW3, NW5 and WC1, Camden Town, Belsize Park, Kentish Town and Bloomsbury, with a wide mix of period and contemporary stock.',
    housingStock:
      'Camden spans grand Georgian and Victorian houses in Hampstead, Belsize Park and Primrose Hill, Bloomsbury mansion blocks, and period conversions and ex-local-authority estates in Kentish Town and Camden Town.',
    epcIssues:
      'Strict conservation rules across most of the borough mean solid-wall period homes and mansion flats commonly score D or E, with very limited scope for external insulation. Ratings are usually improved through heating systems, hot water cylinder insulation and low-energy lighting.',
    transport:
      'The Northern line runs the length of the borough, supported by the Metropolitan, Jubilee and Overground services and several major interchanges.',
    neighbours: ['islington', 'westminster', 'haringey', 'brent', 'barnet'],
  },
  westminster: {
    slug: 'westminster',
    name: 'Westminster',
    blurb:
      'Covering W1, W2, SW1 and NW8, Mayfair, Marylebone, Pimlico and St John’s Wood, including mansion-block flats and period townhouses.',
    housingStock:
      'Westminster is dominated by mansion blocks in Marylebone, Pimlico and Maida Vale, period townhouses in Mayfair and Belgravia, and a mix of mews houses and modern apartments. Listed and conservation-area stock makes up a large share of the borough.',
    epcIssues:
      'Solid walls, sash windows and communal heating mean mansion flats and townhouses frequently rate D or E, and listed status often rules out fabric changes entirely. Achievable improvements centre on heating controls, cylinder insulation and lighting.',
    transport:
      'The Bakerloo, Central, Jubilee, Victoria and Circle lines, plus the Paddington, Victoria and Marylebone termini, make Westminster very fast for us to reach.',
    neighbours: ['camden', 'kensington-chelsea', 'islington', 'lambeth', 'city-of-london'],
  },
  lambeth: {
    slug: 'lambeth',
    name: 'Lambeth',
    blurb:
      'Covering SE1, SE11, SE24, SW2, SW4, SW8, SW9 and SW16, Brixton, Clapham, Kennington, Streatham and Vauxhall.',
    housingStock:
      'Lambeth combines Victorian terraces and converted flats in Clapham, Brixton and Herne Hill, large estates in Stockwell and Vauxhall, and new towers along the Albert Embankment and the Nine Elms fringe.',
    epcIssues:
      'Solid-wall Victorian conversions across Brixton and Clapham generally rate D or E. Many flats need improved heating controls and loft insulation to lift the score, while the newer Vauxhall and Nine Elms apartments usually rate B with communal heat networks.',
    transport:
      'The Victoria and Northern lines, the Overground at Clapham High Street and Brixton, and extensive National Rail services cover Lambeth’s long north–south spread.',
    neighbours: ['southwark', 'wandsworth', 'westminster', 'lewisham', 'merton'],
  },
  wandsworth: {
    slug: 'wandsworth',
    name: 'Wandsworth',
    blurb:
      'Covering SW8, SW11, SW12, SW15, SW17 and SW18, Battersea, Balham, Tooting, Putney and Earlsfield.',
    housingStock:
      'Wandsworth is known for the Victorian “tonsils” terraces of Tooting and Balham, larger period houses around Putney and Wandsworth Common, and major new riverside developments at Battersea and Nine Elms.',
    epcIssues:
      'Period terraces and conversions with solid walls and bay windows typically rate D or E, and the borough’s many converted flats often need loft and heating upgrades. Battersea and Nine Elms new-builds, by contrast, usually score B thanks to communal heat networks.',
    transport:
      'The Northern line extension at Battersea and Nine Elms, plus National Rail at Clapham Junction, one of the UK’s busiest interchanges, give us excellent access.',
    neighbours: ['lambeth', 'merton', 'hammersmith-fulham', 'kensington-chelsea', 'richmond'],
  },
  brent: {
    slug: 'brent',
    name: 'Brent',
    blurb:
      'Covering NW2, NW6, NW9, NW10 and HA0, Wembley, Willesden, Kilburn and Harlesden, including a high volume of letting properties.',
    housingStock:
      'Brent mixes Victorian and Edwardian terraces in Kilburn and Willesden, 1930s semis in Wembley and Kingsbury, and a large and growing cluster of new towers around Wembley Park.',
    epcIssues:
      'This is a high-volume rental borough, so MEES work is common. Older terraces and converted flats with solid walls and dated heating frequently need insulation and boiler upgrades to clear band E, while the Wembley Park new-builds rate well from the outset.',
    transport:
      'The Jubilee, Metropolitan, Bakerloo and Overground lines, with interchanges at Wembley Park and Wembley Central, keep the borough well connected for appointments.',
    neighbours: ['camden', 'ealing', 'harrow', 'barnet', 'hammersmith-fulham'],
  },
  ealing: {
    slug: 'ealing',
    name: 'Ealing',
    blurb:
      'Covering W3, W5, W7, W13 and UB1, Ealing, Acton, Hanwell, Southall and West Ealing, with strong demand from family lets.',
    housingStock:
      'Ealing is largely Edwardian and 1930s family houses across Ealing and Hanwell, Victorian terraces in Acton, and denser terraced and converted stock in Southall.',
    epcIssues:
      'Large family houses with solid or early cavity walls commonly rate D or E. With strong demand from family lets, landlords here often need loft insulation and heating upgrades before re-letting, and Southall’s older terraces frequently need solid-wall measures.',
    transport:
      'The Elizabeth line through Ealing Broadway, Acton and Southall, plus the Central, District and Piccadilly lines, make Ealing one of the better-connected outer boroughs.',
    neighbours: ['hounslow', 'hillingdon', 'brent', 'hammersmith-fulham', 'harrow'],
  },
  hounslow: {
    slug: 'hounslow',
    name: 'Hounslow',
    blurb:
      'Covering TW3, TW4, TW7, TW8 and TW13, Hounslow, Brentford, Isleworth, Chiswick and Feltham.',
    housingStock:
      'Hounslow combines 1930s semis and terraces in Hounslow and Feltham, period houses in Chiswick and Isleworth, and riverside new-builds in Brentford.',
    epcIssues:
      'Inter-war semis with early cavity walls and original windows typically rate D or E, and cavity fill plus loft top-ups often produce a quick improvement. Chiswick’s protected period stock has limited external-insulation scope, so internal measures dominate there.',
    transport:
      'The Piccadilly line runs through Hounslow with the Elizabeth line nearby, supported by South Western Railway at Brentford and Isleworth.',
    neighbours: ['ealing', 'richmond', 'hillingdon', 'hammersmith-fulham', 'kingston'],
  },
  richmond: {
    slug: 'richmond',
    name: 'Richmond upon Thames',
    blurb:
      'Covering TW1, TW2, TW9, TW10, KT2 and SW14, Richmond, Twickenham, Kew, Teddington and East Sheen.',
    housingStock:
      'Richmond is largely Georgian and Victorian houses in Richmond, Kew and Twickenham, 1930s semis in Whitton and Hampton, and riverside conversions and apartments.',
    epcIssues:
      'A high proportion of conservation-area and listed period homes means many properties score D or E. Solid walls and sash windows restrict the improvement options, so heating systems, cylinder insulation and internal measures usually do the work.',
    transport:
      'The District line and Overground terminus at Richmond, plus South Western Railway across Twickenham, Teddington and Kew, cover this riverside borough well.',
    neighbours: ['hounslow', 'kingston', 'wandsworth', 'hammersmith-fulham', 'merton'],
  },
  kingston: {
    slug: 'kingston',
    name: 'Kingston upon Thames',
    blurb:
      'Covering KT1, KT2, KT3, KT5 and KT6, Kingston, New Malden, Surbiton and Tolworth.',
    housingStock:
      'Kingston mixes Victorian and Edwardian terraces near the town centre, 1930s semis in New Malden and Tolworth, and Surbiton’s period villas and mansion flats.',
    epcIssues:
      'Inter-war semis and period terraces with solid or early cavity walls commonly rate D or E. Surbiton’s mansion flats often depend on shared heating systems, which limits what an individual owner can change, so improvements focus on glazing, controls and insulation.',
    transport:
      'South Western Railway runs from Kingston, Surbiton and New Malden into Waterloo; the borough has no Underground, so we plan appointments around the rail network.',
    neighbours: ['richmond', 'merton', 'sutton', 'wandsworth', 'hounslow'],
  },
  croydon: {
    slug: 'croydon',
    name: 'Croydon',
    blurb:
      'Covering CR0, CR2, CR7 and SE25, Croydon, Thornton Heath, South Norwood and Purley.',
    housingStock:
      'Croydon spans Victorian and Edwardian terraces in Thornton Heath and South Norwood, 1930s semis across Addiscombe and Shirley, larger period houses in Purley, and town-centre towers.',
    epcIssues:
      'With a large rental market, MEES work is frequent here. Solid-wall terraces and inter-war semis often score D or E, and many landlords need cavity or loft insulation and boiler upgrades. Town-centre apartments generally rate better.',
    transport:
      'Southern and Thameslink rail, plus the extensive Tramlink network, give us good access across this large southern borough.',
    neighbours: ['sutton', 'bromley', 'lambeth', 'merton', 'lewisham'],
  },
  enfield: {
    slug: 'enfield',
    name: 'Enfield',
    blurb:
      'Covering EN1, EN2, EN3, N9, N13, N14, N18 and N21, Enfield Town, Edmonton, Palmers Green and Southgate.',
    housingStock:
      'Enfield is largely 1930s semis throughout Enfield Town, Southgate and Palmers Green, Victorian terraces in Edmonton, and larger period houses in Winchmore Hill.',
    epcIssues:
      'Inter-war semis with early cavity walls and dated heating commonly rate D or E, and Edmonton’s terraced rental stock often needs insulation and heating upgrades for MEES. Cavity fill where the walls allow is one of the quickest wins.',
    transport:
      'The Piccadilly line at Southgate and Oakwood, plus Great Northern and Overground rail across the borough, cover Enfield’s spread-out geography.',
    neighbours: ['haringey', 'waltham-forest', 'barnet', 'redbridge', 'hackney'],
  },
  haringey: {
    slug: 'haringey',
    name: 'Haringey',
    blurb:
      'Covering N4, N8, N15, N17 and N22, Tottenham, Wood Green, Crouch End, Hornsey and Muswell Hill.',
    housingStock:
      'Haringey ranges from large Victorian houses and conversions in Crouch End and Muswell Hill to terraced stock in Tottenham and Wood Green, with major regeneration underway around Tottenham Hale.',
    epcIssues:
      'Solid-wall Victorian conversions across Crouch End and Hornsey typically rate D or E, with conservation controls limiting external work. Tottenham’s older rental terraces frequently need MEES upgrades, insulation, heating controls and new boilers.',
    transport:
      'The Victoria and Piccadilly lines, plus Overground and Great Northern services and the Tottenham Hale interchange, keep the borough well connected.',
    neighbours: ['enfield', 'hackney', 'islington', 'camden', 'barnet'],
  },
  redbridge: {
    slug: 'redbridge',
    name: 'Redbridge',
    blurb:
      'Covering IG1, IG2, IG4, IG5, IG6 and E18, Ilford, Wanstead, Woodford and Barkingside.',
    housingStock:
      'Redbridge is mostly 1930s semis and terraces across Ilford and Barkingside, larger Edwardian houses in Wanstead and Woodford, and converted flats near the Central line.',
    epcIssues:
      'Inter-war stock with early cavity walls and original windows commonly rates D or E, with cavity fill and loft insulation the usual quick improvements. Wanstead’s period houses have more limited external-insulation options.',
    transport:
      'The Central line through Wanstead, Woodford and Barkingside, plus the Elizabeth line at Ilford, make the borough straightforward to cover.',
    neighbours: ['waltham-forest', 'havering', 'newham', 'barking-dagenham', 'enfield'],
  },
  havering: {
    slug: 'havering',
    name: 'Havering',
    blurb:
      'Covering RM1, RM2, RM3, RM11, RM12, RM13 and RM14, Romford, Hornchurch, Upminster and Rainham.',
    housingStock:
      'Havering is dominated by 1930s semis in Romford and Hornchurch, Victorian cottages in Upminster, post-war estates in Harold Hill, and newer developments near Romford.',
    epcIssues:
      'Inter-war semis with early cavity walls and dated gas heating typically rate D or E. As an outer borough, many homes still have older boilers, so heating upgrades alongside loft and cavity insulation are the common route to a better rating.',
    transport:
      'The Elizabeth line at Romford, Gidea Park and Harold Wood, plus c2c and the District line at Upminster, give us reliable access across this large outer borough.',
    neighbours: ['redbridge', 'barking-dagenham', 'bexley', 'newham', 'greenwich'],
  },
  bexley: {
    slug: 'bexley',
    name: 'Bexley',
    blurb:
      'Covering DA1, DA5, DA6, DA7, DA8, DA14, DA15, DA16 and DA17, Bexleyheath, Welling, Sidcup and Erith.',
    housingStock:
      'Bexley is largely 1930s semis across Bexleyheath, Welling and Sidcup, post-war housing in Erith and Thamesmead, and pockets of Victorian stock in Old Bexley.',
    epcIssues:
      'Inter-war semis with early cavity walls and original windows commonly rate D or E, and many owner-occupied homes still have aged heating systems that pull the score down. Cavity fill, loft top-ups and a new boiler are the typical improvements.',
    transport:
      'Southeastern rail serves Bexleyheath, Sidcup and Erith; the borough has no Underground, so appointments are planned around the rail timetable.',
    neighbours: ['greenwich', 'bromley', 'lewisham', 'havering', 'barking-dagenham'],
  },
  bromley: {
    slug: 'bromley',
    name: 'Bromley',
    blurb:
      'Covering BR1–BR8, SE9, SE19, SE20 and SE26, Bromley, Beckenham, Orpington, Chislehurst and Penge.',
    housingStock:
      'Bromley, London’s largest borough by area, is mostly 1930s semis and detached houses across Bromley, Beckenham and Orpington, Victorian villas in Chislehurst and Penge, and post-war estates in Mottingham.',
    epcIssues:
      'Large inter-war and detached homes with solid or early cavity walls frequently rate D or E. The bigger floor areas mean heating and insulation upgrades have a strong impact on the score, so loft insulation and modern boilers are well worth it.',
    transport:
      'Southeastern rail covers the borough, with Tramlink at Beckenham; there is no Underground, so we work around the rail network.',
    neighbours: ['lewisham', 'greenwich', 'bexley', 'croydon', 'southwark'],
  },
  sutton: {
    slug: 'sutton',
    name: 'Sutton',
    blurb:
      'Covering SM1–SM7, Sutton, Cheam, Wallington, Carshalton and Worcester Park.',
    housingStock:
      'Sutton is dominated by 1930s semis across Sutton, Cheam and Worcester Park, with Victorian terraces in Carshalton and Wallington and a number of post-war estates.',
    epcIssues:
      'Inter-war semis with early cavity walls and original glazing typically rate D or E. Many homes here benefit quickly from cavity fill and loft top-ups, which can move a property up a band without major expense.',
    transport:
      'Southern and Thameslink rail serve Sutton, Carshalton and Cheam; with no Underground in the borough, appointments are scheduled around the rail network.',
    neighbours: ['croydon', 'merton', 'kingston', 'lambeth', 'wandsworth'],
  },
  merton: {
    slug: 'merton',
    name: 'Merton',
    blurb:
      'Covering SW19, SW20, CR4, KT3 and SM4, Wimbledon, Mitcham, Morden and Colliers Wood.',
    housingStock:
      'Merton combines Victorian and Edwardian houses in Wimbledon and Wimbledon Park, 1930s semis in Raynes Park and Morden, and denser terraced stock in Mitcham and Colliers Wood.',
    epcIssues:
      'Period houses around Wimbledon with solid walls and sash windows commonly rate D or E. Mitcham’s older terraces often need insulation and heating upgrades, while inter-war semis usually respond well to cavity fill and loft top-ups.',
    transport:
      'The District line and the Northern line terminus at Morden, Tramlink across Mitcham, and South Western Railway and Thameslink services cover the borough well.',
    neighbours: ['wandsworth', 'lambeth', 'sutton', 'kingston', 'croydon'],
  },
  'hammersmith-fulham': {
    slug: 'hammersmith-fulham',
    name: 'Hammersmith & Fulham',
    blurb:
      'Covering W6, W12, W14, SW6 and SW10, Hammersmith, Fulham, Shepherd’s Bush and Parsons Green.',
    housingStock:
      'Hammersmith & Fulham is largely Victorian terraces and mansion blocks in Fulham and Hammersmith, period conversions in Shepherd’s Bush, and riverside apartments along the Thames.',
    epcIssues:
      'Solid-wall Victorian terraces and mansion flats typically rate D or E. Conservation-area controls limit external changes across much of the borough, so improvements concentrate on heating systems, cylinder insulation and glazing.',
    transport:
      'The Piccadilly, District, Circle and Hammersmith & City lines, plus the Overground at Shepherd’s Bush and Imperial Wharf, make the borough quick to reach.',
    neighbours: ['kensington-chelsea', 'wandsworth', 'ealing', 'brent', 'richmond'],
  },
  'kensington-chelsea': {
    slug: 'kensington-chelsea',
    name: 'Kensington & Chelsea',
    blurb:
      'Covering W8, W10, W11, SW3, SW5, SW7 and SW10, Notting Hill, Chelsea, Kensington and Earl’s Court.',
    housingStock:
      'Kensington & Chelsea is defined by grand stucco-fronted terraces and townhouses in Chelsea, Kensington and Notting Hill, mansion blocks in Earl’s Court, and period houses converted into flats throughout.',
    epcIssues:
      'The borough is almost entirely conservation-controlled and heavily listed. Solid walls, sash windows and communal systems mean townhouses and mansion flats commonly score D or E, with very limited fabric options, heating controls and lighting do most of the achievable improvement.',
    transport:
      'The District, Circle, Central and Piccadilly lines, plus the Overground at Latimer Road and Kensington (Olympia), give us fast access across the borough.',
    neighbours: ['westminster', 'hammersmith-fulham', 'wandsworth', 'brent', 'camden'],
  },
  'city-of-london': {
    slug: 'city-of-london',
    name: 'City of London',
    blurb:
      'Covering EC1, EC2, EC3 and EC4, the Square Mile and Barbican apartments, plus Smithfield and Fleet Street conversions.',
    housingStock:
      'Residential stock in the City is predominantly apartments, the Barbican and Golden Lane estates, modern riverside and converted-office developments, and a small number of period conversions around Smithfield and Fleet Street.',
    epcIssues:
      'Because flats dominate, ratings depend largely on glazing, heating and communal systems rather than wall fabric. The Barbican’s distinctive concrete construction has limited improvement scope, so most gains come from heating controls and lighting.',
    transport:
      'The Central, Circle, Northern, Metropolitan, Hammersmith & City and Elizabeth lines, plus Thameslink and the City termini, make this the most connected square mile in the country.',
    neighbours: ['islington', 'tower-hamlets', 'southwark', 'westminster', 'hackney'],
  },
  barnet: {
    slug: 'barnet',
    name: 'Barnet',
    blurb:
      'Covering EN4, EN5, HA8, N2, N3, N10, N11, N12, N14, N20, NW2, NW4, NW7, NW9 and NW11, Barnet, Finchley, Hendon, Edgware and Mill Hill.',
    housingStock:
      'Barnet is dominated by 1930s semis across Finchley, Hendon, Edgware and Mill Hill, with Victorian terraces in High Barnet and larger detached houses and Hampstead Garden Suburb stock in the south.',
    epcIssues:
      'Inter-war semis with early cavity walls and dated heating commonly rate D or E, and cavity fill plus loft insulation often improves them quickly. The Garden Suburb’s protected stock has limited external-insulation scope, so internal measures are used there.',
    transport:
      'The Northern line runs across Finchley, Edgware and High Barnet, supported by Thameslink at Mill Hill and Hendon.',
    neighbours: ['enfield', 'haringey', 'camden', 'brent', 'harrow'],
  },
  harrow: {
    slug: 'harrow',
    name: 'Harrow',
    blurb:
      'Covering HA1, HA2, HA3, HA5, HA7 and HA8, Harrow, Pinner, Stanmore and Wealdstone.',
    housingStock:
      'Harrow is largely 1930s semis across Harrow, Pinner and Stanmore, classic Metro-land stock, with detached houses, Victorian cottages in Pinner village, and post-war estates in Wealdstone.',
    epcIssues:
      'Inter-war Metro-land semis with early cavity walls and original windows typically rate D or E. Many owner-occupied homes still have older boilers, so heating upgrades alongside cavity and loft insulation are the usual improvements.',
    transport:
      'The Metropolitan, Jubilee and Bakerloo lines, plus the Overground and Chiltern Railways at Harrow-on-the-Hill, cover the borough well.',
    neighbours: ['brent', 'barnet', 'hillingdon', 'ealing', 'enfield'],
  },
  hillingdon: {
    slug: 'hillingdon',
    name: 'Hillingdon',
    blurb:
      'Covering UB3, UB4, UB7, UB8, UB9, UB10, HA4 and HA6, Uxbridge, Hayes, Ruislip, Hillingdon and Northwood.',
    housingStock:
      'Hillingdon is mostly 1930s semis across Uxbridge, Hayes and Ruislip, post-war estates in Hayes and West Drayton, and larger detached houses in Northwood and Ruislip.',
    epcIssues:
      'Inter-war semis with early cavity walls and dated heating commonly rate D or E. As an outer borough, many homes still rely on older gas systems, so a new boiler combined with cavity and loft insulation is the typical route to a better band.',
    transport:
      'The Metropolitan and Piccadilly lines, plus the Elizabeth line at Hayes & Harlington and West Drayton, give us solid access across London’s westernmost borough.',
    neighbours: ['ealing', 'harrow', 'hounslow', 'brent', 'havering'],
  },
}

export const boroughList = Object.values(boroughMeta)
