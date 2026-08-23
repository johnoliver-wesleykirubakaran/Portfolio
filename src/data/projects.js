export const projects = [{
        slug: `telehealth`,
        id: `01`,
        accent: `#4a7cff`,
        title: `National Telehealth`,
        meta: `Government of Morocco · Health`,
        year: `2023–25`,
        tone: [`#16211c`, `#3e6b54`],
        published: !0,
        client: `Mohammed V Foundation for Solidarity · Ministry of Health`,
        company: `ABA Technology, with Mediot Technology`,
        role: `Lead UX/UI Designer`,
        scope: `Telehealth platform · Monitoring dashboard · Training portal · Design system`,
        summary: `Morocco deployed connected mobile medical units to rural provinces with no nearby clinic. I led the design of the software that runs them.`,
        pullQuote: `Most patient needs were met inside the unit. The referral rate stayed under 2.5%.`,
        context: [`In October 2023 the Mohammed V Foundation for Solidarity, the Ministry of Health and Mediot Technology began placing staffed medical units in rural provinces, under the patronage of King Mohammed VI. I designed the software that runs inside them.`, `What they were built against is distance. In these provinces the nearest doctor can be a day of travel away, and for most people that means the visit just doesn’t happen.`, `Each unit runs with a general practitioner, two nurses and an administrator. Anything they can’t treat goes to a specialist in the city over a central platform: cardiology, dermatology, paediatrics, endocrinology, gynaecology.`],
        problem: [`A GP in the unit sees something she isn’t sure about. The patient has travelled to get there and is sitting in front of her. The nearest specialist is hours away in a city.`, `She needs the second opinion while the patient is still there. The connection drops. The tablet is mounted to the wall. She first saw the software a week ago.`, `The Ministry also needed a weekly picture of every unit in the country. Nobody in the field had time to assemble that by hand.`],
        work: [{
            title: `Telehealth platform`,
            body: `I designed the consultation flows for both generalist and specialist use, along with patient record access and the live link between the unit and the city. It had to work identically on a desktop and on the tablet mounted inside the unit.`
        }, {
            title: `Monitoring dashboard`,
            body: `A dashboard covering 100 units live. Consultation counts and screening coverage, referral trends, and uptime per unit so the Ministry could see which ones had gone quiet. The regional charts are the part people ended up using most.`
        }, {
            title: `Documentation & training portal`,
            body: `A unit had to get running without waiting for a trainer to arrive, so the onboarding became guided tutorials, standard procedures and downloadable resources in French and English.`
        }, {
            title: `Design system & testing`,
            body: `One component library served all three products. I tested it over several rounds with nurses and doctors in the field, and with the people at the Ministry who would be reading the reports.`
        }],
        process: [{
            title: `Field context`,
            body: `I spent time with doctors, nurses and mobile health operators in rural clinics before drawing anything. A lot of what I had assumed about how a consultation runs turned out to be wrong.`
        }, {
            title: `Benchmarking`,
            body: `I audited the established telemedicine platforms for what survives poor connectivity, and for the complexity worth stripping out.`
        }, {
            title: `Sketches & flows`,
            body: `Storyboards came before wireframes. Rough journeys got everyone agreeing on what a session looked like faster than layouts did.`
        }, {
            title: `Co-design`,
            body: `We worked the interface logic through with the engineers, clinical staff and hardware teams, so it matched how a session really runs and what the devices could actually do.`
        }, {
            title: `Prototype (v0)`,
            body: `I built a v0 that simulated the key flows well enough to put in front of clinical staff. It showed which of our assumptions about the consultation sequence were wrong.`
        }, {
            title: `Pilot feedback`,
            body: `I watched staff use the pilot build and redrew the layout, the icons and the action placement around what they actually reached for.`
        }],
        decisions: [{
            constraint: `Most field staff had never used telemedicine software.`,
            response: `I built the training portal into the product rather than beside it, with guided tutorials, standard procedures and downloadable resources in French and English, so a unit could onboard without waiting for anyone.`
        }, {
            constraint: `The interface runs on embedded tablets inside the units, not on desks.`,
            response: `One consultation flow serves both the desktop and the embedded tablet. I designed for both from the start, so neither is a shrunk-down version of the other.`
        }, {
            constraint: `The Ministry needed country-wide visibility every week, without anyone compiling it.`,
            response: `I built the dashboard around that weekly review, and the numbers come out of the consultations themselves. Nobody in a unit fills in a report at the end of the day.`
        }, {
            constraint: `Staff navigated the system differently from how we expected during the pilot.`,
            response: `I revised the layout, icons and action placement from watching people work. What they said they preferred and what they actually reached for didn’t match, and I went with what they reached for.`
        }, {
            constraint: `The same system had to work in other countries.`,
            response: `One component library across all three products is why the architecture carried into three new markets without being redrawn.`
        }],
        outcomes: [{
            value: `100`,
            label: `connected units across 34 provinces`
        }, {
            value: `120,000+`,
            label: `citizens received care`
        }, {
            value: `96,000+`,
            label: `in-person consultations`
        }, {
            value: `12,000+`,
            label: `remote teleconsultations`
        }, {
            value: `<6 min`,
            label: `average teleconsultation`
        }, {
            value: `<2.5%`,
            label: `referral rate`
        }, {
            value: `92%`,
            label: `staff adoption of the platform`
        }, {
            value: `3`,
            label: `markets adopted the same architecture`
        }],
        closing: [`The World Health Organization recognised the programme as a scalable digital health model for underserved communities. The component library and UX architecture I built went on to carry deployments in Saudi Arabia, the UAE and the Pacific Islands.`, `The regional dashboards are still used by the Ministry of Health for weekly decision-making.`],
        sourcesNote: `Every figure here is from the public record: royal announcements, ministry communications and press coverage. Sources below.`,
        sources: [{
            label: `Mohammed V Foundation for Solidarity: program announcement`,
            url: `https://www.fm5.ma/en/featured/under-presidency-hm-king-foundation-signs-agreement-deployment-connected-mobile-medical`
        }, {
            label: `Head of Government, Kingdom of Morocco: signing ceremony`,
            url: `https://www.cg.gov.ma/en/node/11505`
        }, {
            label: `Mediot Technology: phase 2 deployment`,
            url: `https://mediot.tech/deployment-of-the-2nd-phase-of-connected-mobile-medical-units/`
        }, {
            label: `L’Opinion: three-month field report`,
            url: `https://www.lopinion.ma/Unites-medicales-mobiles-connectees-Trois-mois-apres-le-deploiement-un-premier-bilan-tres-prometteur-INTEGRAL_a50175.html`
        }, {
            label: `Le Desk: 73,364 beneficiaries in three months`,
            url: `https://ledesk.ma/2024/02/13/unites-medicales-mobiles-connectees-73-364-beneficiaires-en-trois-mois/`
        }, {
            label: `Annals of Global Health: transportation and healthcare access in Morocco`,
            url: `https://annalsofglobalhealth.org/articles/10.5334/aogh.4063`
        }]
    }, {
        slug: `industrial-monitoring`,
        id: `02`,
        accent: `#ff5c28`,
        title: `Industrial Monitoring`,
        meta: `Aptiv · Industry 4.0`,
        year: `2022–24`,
        tone: [`#191c24`, `#4a5878`],
        published: !0,
        client: `Aptiv`,
        company: `ABA Technology, DIGINDUSTRY X.0`,
        role: `Product Designer`,
        scope: `Machine health · Asset register · Predictive quality · Energy`,
        summary: `Aptiv’s wiring lines run around the clock across EMEA. I designed the interface that shows which machines are healthy, which are drifting, and who needs to act.`,
        pullQuote: `One interface, five levels of zoom.`,
        context: [`ABA Technology ran an Industry 4.0 program for Aptiv called DIGINDUSTRY X.0, deployed across the EMEA region: IoT sensors, edge computing, predictive maintenance, machine connectivity and quality prediction on production lines. I designed the interfaces for it.`, `In Morocco alone Aptiv runs seven plants, across Tangier, Kenitra, Meknes and Oujda, employing more than 17,000 people. EMEA is several times that again. Every machine on those lines emits readings continuously.`, `The data already existed. There was nowhere to see it together.`],
        problem: [`A team leader on a morning shift needs to know which machine on their line is about to fail, in seconds, from across the floor. At that distance a table of readings is unreadable.`, `The same product has to serve everyone above them too. A plant manager compares lines. A country lead compares sites. A regional director compares countries. That is five levels of zoom in one interface, and something built only for the floor falls apart at regional scale.`],
        work: [{
            title: `Machine health monitoring`,
            body: `Temperature, vibration and energy per machine, each with a live gauge, a history chart, and its threshold markers drawn onto both. You see a breach against the markers before you read the number.`
        }, {
            title: `Asset register`,
            body: `Every machine with its type, its place in the hierarchy and its current state, searchable. It is the least interesting screen in the product and every other module reads from it, so I built it first.`
        }, {
            title: `Predictive quality`,
            body: `Process parameters tracked against tolerance over time, with per-machine error counts, date-range filtering and export. The quality team asked for the export early on; they had their own analysis they wanted to run.`
        }, {
            title: `Energy monitoring`,
            body: `Consumption by source against target, broken down per equipment, feeding the plant’s efficiency reporting.`
        }],
        process: [{
            title: `Shop-floor context`,
            body: `I stood on the floor before opening Figma. Operators read these screens standing up, at a distance, in the middle of doing something else. That set the type sizes and the colour logic before I drew a layout.`
        }, {
            title: `Thresholds with engineers`,
            body: `Where a warning becomes a failure was the engineers’ call, not mine. They gave me the tolerance bands and I designed around them.`
        }, {
            title: `Modelling the hierarchy`,
            body: `Region, country, site, line, machine. We settled this model early, and it is the reason one component set could serve five different audiences later.`
        }, {
            title: `Component reuse`,
            body: `Gauges, threshold charts and status states were built once and reused across every module. Adding a metric after that meant picking components, not drawing new ones.`
        }],
        decisions: [{
            constraint: `Screens are read from across the floor, not at a desk.`,
            response: `Gauge position and colour carry the status; the numerals are there for when you walk up close. You can read a line’s condition in passing without stopping.`
        }, {
            constraint: `The same interface serves a team leader and a regional director.`,
            response: `One component set behind a five-level location filter, rather than a product per audience. What changes between levels is the zoom, and everyone learns the same vocabulary.`
        }, {
            constraint: `A number on a gauge tells a team leader nothing about whether to act on it.`,
            response: `Every metric is drawn against its tolerance band, so the reading answers whether the machine is within limits. On its own, 7.3 means nothing to the person standing in front of it.`
        }, {
            constraint: `Operators work shifts; machine problems cross them.`,
            response: `Line, team leader and shift stay on screen next to the data. When a reading gets discussed the following morning, whoever was on it is already named.`
        }],
        outcomesLabel: `Scale of the problem`,
        outcomes: [{
            value: `EMEA`,
            label: `deployment region for DIGINDUSTRY X.0`
        }, {
            value: `7`,
            label: `Aptiv plants in Morocco alone`
        }, {
            value: `4`,
            label: `cities: Tangier, Kenitra, Meknes, Oujda`
        }, {
            value: `17,000+`,
            label: `people across Aptiv Morocco`
        }],
        closing: [`The component set built here (gauges, threshold charts, status states, the location filter) outlived any single screen. By the end, adding a metric was a question of configuration rather than design.`, `Aptiv’s platform is not public and its operational figures were never published. What’s here is the design problem and how I reasoned through it. I can walk through the actual screens directly in conversation.`],
        sourcesNote: `The client, the programme and the operational scale are public. ABA Technology presented DIGINDUSTRY X.0 for Aptiv at the Global Industry 4.0 Conference, and Aptiv’s Moroccan footprint is widely reported (sources below). The design reasoning is my own account of work I did. No client screens, data, identifiers, thresholds or visual identity are reproduced anywhere on this page.`,
        sources: [{
            label: `Industries.ma: ABA Technology at the Global Industry 4.0 Conference, on DIGINDUSTRY X.0 for Aptiv`,
            url: `https://industries.ma/mohamed-ben-ouda-aba-technology-gi4c-41538-2/`
        }, {
            label: `Industries.ma: Aptiv’s Moroccan footprint: seven plants, four cities, 17,000+ employees`,
            url: `https://industries.ma/en/aptiv-inaugure-sa-1ere-usine-a-oujda-7eme-usine-au-maroc/`
        }, {
            label: `Médias24: Aptiv’s Oujda plant, 394 MDH investment`,
            url: `https://medias24.com/2023/03/18/automobile-pour-sa-9e-usine-marocaine-aptiv-a-investi-394-mdh-a-oujda/`
        }]
    }, {
        slug: `remote-laboratory`,
        id: `03`,
        accent: `#40c8b8`,
        title: `Remote Laboratory`,
        meta: `Public university · Education`,
        year: `2024`,
        tone: [`#241d15`, `#8a6a3f`],
        published: !0,
        client: `A Moroccan public university`,
        company: `Freelance`,
        role: `Interface Designer`,
        scope: `Experiment catalogue · Booking · Theory modules · Session tracking`,
        summary: `A finite number of benches and far more students than slots. I designed the interface students use to find, prepare for and run physics experiments remotely.`,
        pullQuote: `There is one bench, and several hundred students who need it.`,
        context: [`A remote laboratory lets students run physics experiments over the internet. Nothing is simulated: there is a physical bench in a room somewhere, and the measurements coming back are from real instruments the student then has to interpret.`, `The platform had been built and researched by a university team for several years before I arrived. I was brought in as a freelance designer for the student-facing side: the catalogue, the booking, and the path from theory to a finished session.`],
        problem: [`There is one bench. Several hundred students need it across a semester, each for a specific hour and a specific duration. Most of the design work ended up being scheduling.`, `There is no demonstrator standing next to them either, so a student has to arrive already knowing what they are doing. If they don’t, the hour is gone and so is a slot nobody else can use.`],
        work: [{
            title: `Experiment catalogue`,
            body: `I built the catalogue to browse by discipline, showing what an experiment covers and which instrument it uses before a student commits to a slot.`
        }, {
            title: `Booking`,
            body: `Availability is shown per bench and per hour, so a student picks from what is genuinely free. The alternative, requesting a time and waiting to hear back, wastes a day for no reason.`
        }, {
            title: `Theory before hardware`,
            body: `Each experiment carries a theoretical study and a practical guide. Both sit inside the session flow, ahead of the hardware, where a student passes through them on the way to the bench.`
        }, {
            title: `Session tracking`,
            body: `What a student has completed, booked and still owes for the semester sits on one screen. It was spread across three before.`
        }],
        process: [{
            title: `Understanding the scarcity`,
            body: `How many benches, how many students, how long a session runs. I asked for those three numbers first, because they decide what the interface is allowed to promise.`
        }, {
            title: `Mapping the calendar`,
            body: `Academic terms, lab weeks and teaching hours are the real grid. The booking model had to sit inside a calendar the university already ran.`
        }, {
            title: `Designing for infrequent use`,
            body: `A student touches this a handful of times per semester. Nobody gets fluent at it, so I could not lean on anything being remembered between sessions.`
        }, {
            title: `Working with the research team`,
            body: `The people who built the experiments knew what a session actually involves. I followed their model of the work rather than importing a booking pattern from somewhere else.`
        }],
        decisions: [{
            constraint: `There is one bench and many students.`,
            response: `A student sees the free hours first and picks from them. Asking for a time and then being refused is the version that wastes everybody’s week.`
        }, {
            constraint: `A wasted slot cannot be recovered.`,
            response: `The theory module sits inside the booking flow, ahead of the session. A student walks through it on the way to the bench rather than having to go and find it.`
        }, {
            constraint: `Students use this a few times a semester, never enough to become fluent.`,
            response: `Browsing is by discipline, in plain language. Someone hunting for a pendulum experiment starts from physics, and has no reason to know the equipment reference number.`
        }, {
            constraint: `It is real hardware in a room somewhere, running on a clock.`,
            response: `Session state (booked, active, finished) is spelled out on every screen. If you are unsure whether you are connected to the instrument, you burn the slot finding out.`
        }],
        outcomesLabel: `Shape of the problem`,
        outcomes: [{
            value: `1`,
            label: `bench per experiment, the hard limit`
        }, {
            value: `30 min`,
            label: `a session, start to finish`
        }, {
            value: `2`,
            label: `gates before hardware: theory, then a booked slot`
        }],
        closing: [`The platform itself, its architecture, instruments and the research behind it, is the university team’s work, built over several years before I arrived and the subject of several peer-reviewed publications in engineering-education venues. My contribution was the student-facing interface.`],
        sourcesNote: `The client is not named here, at my discretion rather than theirs, and the screens are not reproduced. This is my own account of the design reasoning; happy to go deeper in conversation.`,
        sources: []
    }, {
        slug: `energy-platform`,
        id: `04`,
        accent: `#f5cc08`,
        title: `Energy Management`,
        meta: `Energytech · Homes & industry`,
        year: `2021–22`,
        tone: [`#1d1a2b`, `#6b5ca5`],
        published: !0,
        client: `NewJoule`,
        company: `ABA Technology`,
        role: `Product Designer`,
        scope: `Dashboard · Scheduling · Device control · Alerts`,
        summary: `Moroccan electricity is billed in rising bands, so the same kilowatt costs more the more you use. I designed the platform that shows households and factories where they sit in that curve, and lets them shift load before they cross a line.`,
        pullQuote: `Nobody thinks in kilowatt-hours. People think in money.`,
        context: [`NewJoule is a Casablanca energytech company measuring and optimising electricity consumption over IoT. The platform reads connected devices, reports what they cost, and lets a user schedule when each one runs.`, `Morocco prices domestic electricity in progressive bands. Cross into the next band and every kilowatt-hour after that is charged at a higher rate, so two households using similar amounts can end up paying very differently depending on where they land.`],
        problem: [`Nobody thinks in kilowatt-hours. People think about electricity once a month, when the bill arrives, which is far too late to do anything about it.`, `The same product had to serve a household with about ten appliances and a workshop running dozens of machines. The household cares about the bill. The workshop cares about not stopping production. It had to be one product.`],
        work: [{
            title: `Cost, not consumption`,
            body: `Every figure on the platform carries its money equivalent: kWh and dirhams, always together. In testing, the dirham number was the one people read first every time.`
        }, {
            title: `The tariff band, made visible`,
            body: `A permanent indicator shows which band the current month sits in and how close it is to the next. It holds a fixed position on the dashboard, because it is the one number that changes what somebody does today.`
        }, {
            title: `Scheduling, manual and automatic`,
            body: `A colour-coded timeline where each device’s operating hours can be drawn by hand, with live consumption and cost estimated as you adjust. Or handed to an engine that generates a schedule from usage history, peak and off-peak hours, and device priority.`
        }, {
            title: `Alerts that carry their own fix`,
            body: `“You left this running for six hours” arrives with the button that turns it off sitting in the alert. Sending someone to a settings page to act on a warning adds four taps to something that should take one.`
        }, {
            title: `One device model, two scales`,
            body: `Devices are registered the same way whether they are a washing machine or a machining line (type, serial, icon, schedule) and grouped by status rather than by kind, so the same screens work at ten devices and at fifty.`
        }],
        process: [{
            title: `Starting from the bill`,
            body: `The obvious starting point was the sensor data, and it was the wrong one. The bill is the artefact people already understand and already dread, so the tariff structure became the spine of the information architecture.`
        }, {
            title: `Two audiences, one grammar`,
            body: `I mapped what a household and a facility manager each need from the same screen. Where they diverged it was almost always about scale and density, and hardly ever about the words.`
        }, {
            title: `Scheduling as direct manipulation`,
            body: `Early attempts used forms: start time, end time, repeat. Drawing a block on a timeline turned out to communicate a schedule far faster, especially for anyone managing more than a handful of devices.`
        }, {
            title: `Designing the automatic mode second`,
            body: `The manual planner came first, deliberately. I wanted to see what people drew by hand before deciding what the engine should produce, so the generated schedule would look like a version of that rather than something unfamiliar.`
        }, {
            title: `A component system`,
            body: `Gauges, timeline blocks, tariff indicators, device tiles and alert rows were built as one set. The dashboard, the planner and the device pages ended up speaking the same language without anyone having to coordinate it.`
        }],
        decisions: [{
            constraint: `Electricity is billed in rising bands rather than at a flat rate.`,
            response: `The tariff position stays on screen permanently. Put it behind a report and most people would meet that number for the first time on the bill.`
        }, {
            constraint: `Nobody makes decisions in kilowatt-hours.`,
            response: `I pair every energy figure with its cost in dirhams throughout the product.`
        }, {
            constraint: `People switch off automation they do not understand.`,
            response: `Automatic planning renders into the same timeline as manual planning, with the same blocks, colours and cost readout. You can look at what it decided, disagree with one block, and drag it.`
        }, {
            constraint: `The same interface serves a flat with ten devices and a workshop with fifty.`,
            response: `Devices group by status (planned, unplanned, disconnected) rather than by category. Whether something is a fridge or a lathe rarely decides if you need to deal with it today.`
        }],
        outcomesLabel: `What the product had to hold`,
        outcomes: [{
            value: `3`,
            label: `tariff bands driving every cost calculation`
        }, {
            value: `2`,
            label: `planning modes: drawn by hand, or generated`
        }, {
            value: `4`,
            label: `time horizons: daily, weekly, monthly, annual`
        }, {
            value: `1`,
            label: `component set across homes and industry`
        }],
        closing: [`The part I would defend hardest is pairing every kilowatt-hour with its cost.`, `This was client work at ABA Technology, and its results were never published. What’s here is the design problem and the reasoning behind it.`],
        sourcesNote: `NewJoule is a Casablanca energytech company; its business, measuring and optimising electricity consumption via IoT, is publicly described on its own channels, linked below. The design reasoning here is my own account of work done at ABA Technology. No client screens, data or internal material are reproduced; the drawings are redrawn abstractions with invented labels.`,
        sources: [{
            label: `NewJoule: company profile`,
            url: `https://ma.linkedin.com/company/newjoule`
        }, {
            label: `ABA Technology`,
            url: `https://aba.technology/en/`
        }]
    }, {
        slug: `ev-cluster`,
        id: `05`,
        accent: `#e03a2e`,
        title: `EV Instrument Cluster`,
        meta: `Regis Motors · Automotive`,
        year: `2022`,
        tone: [`#1b1a22`, `#5c5470`],
        published: !0,
        mini: !0,
        client: `Regis Motors (Italy)`,
        company: `ABA Technology`,
        role: `UI Designer`,
        scope: `Digital instrument cluster · In-vehicle HMI`,
        summary: `A small Italian electric van for last-mile delivery. I worked on the digital cluster: the screen a courier glances at between stops.`,
        pullQuote: `Every glance at the screen is time taken from the road.`,
        context: [`Regis Motors, part of Mecaprom, builds the Epic0: the first fully electric Italian goods vehicle designed to automotive standards and homologated as a heavy quadricycle. It is 3.7 metres long, carries 700 kg, and runs 105 or 130 km depending on whether it has the 11 or 14 kWh battery.`, `ABA Technology developed the IoT architecture and the intelligent cockpit system for an Italian electric utility-vehicle manufacturer. I worked on the cluster interface as part of that.`],
        problem: [`The driver is a courier working a route. They get in and out of the cab dozens of times a day, and every glance at the screen is time taken from the road or the delivery.`, `With 130 km on a full charge, the question they actually have is whether the rest of the round fits. And because the Epic0 is homologated as a road vehicle, the regulated telltales have to be present and unmistakable whatever else is on screen.`],
        work: [{
            title: `One glance, one answer`,
            body: `Speed sits at the centre at the largest size on the display. Range and charge state have their own permanent zone rather than sharing one with trip data, which is what they were competing with before.`
        }, {
            title: `Telltales above everything`,
            body: `The regulated warning row sits apart at the top, in its standard colour language, so it can never be confused with the discretionary information below it.`
        }, {
            title: `Drive state, unambiguous`,
            body: `D / N / R and the energy mode are readable in peripheral vision. Reversing into a loading bay is not the moment to look down and check twice.`
        }],
        outcomesLabel: `The vehicle`,
        outcomes: [{
            value: `130 km`,
            label: `range on the 14 kWh battery`
        }, {
            value: `700 kg`,
            label: `payload, in a 3.7 m footprint`
        }, {
            value: `90 km/h`,
            label: `top speed, urban and peri-urban duty`
        }],
        closing: [`The cluster was one piece of a larger cockpit programme at ABA. This entry covers my part of it.`],
        sourcesNote: `Everything here comes from published coverage of the vehicle and of ABA Technology’s work, listed below. The cluster shown is redrawn from public specifications; no press photography and no client file is reproduced.`,
        sources: [{
            label: `Médias24: ABA Technology’s internationalisation, on the IoT architecture and intelligent cockpit built for an Italian electric utility-vehicle manufacturer`,
            url: `https://medias24.com/2023/06/13/technologie-de-pointe-zoom-sur-linternationalisation-daba-technology/`
        }, {
            label: `Motor1: Regis Epic0 launch`,
            url: `https://it.motor1.com/news/349310/regis-epic0-mecaprom-motors/`
        }, {
            label: `Vaielettrico: Regis Epic0, electric pick-up with automotive DNA`,
            url: `https://www.vaielettrico.it/regis-epic0-pick-up-elettrico-dal-dna-automobilistico/`
        }, {
            label: `Regis Motors: Epic0`,
            url: `https://regis-motors.com/en/electric-vehicles/regis-epic0/`
        }]
    }];