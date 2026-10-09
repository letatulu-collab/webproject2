// Data Structures - Complete list of All Historical Sites and Key Regional Destinations
const destinationsData = [
    {
        id: 'lalibela',
        title: 'Rock-Hewn Churches of Lalibela',
        category: 'historical',
        era: 'medieval',
        regionKey: 'amhara',
        image: 'https://tse4.mm.bing.net/th/id/OIP.qECuYoZh_BtEkpn5hLzb-gHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        location: 'Amhara Region',
        duration: '2 - 3 Days',
        description: '11 medieval monolithic churches carved out of solid volcanic rock in the 12th century under King Lalibela, known as the New Jerusalem.'
    },
    {
        id: 'aksum',
        title: 'Ancient Aksum Kingdom Obelisks & Tombs',
        category: 'historical',
        era: 'ancient',
        regionKey: 'tigray',
        image: 'https://tourhubethiopia.com/wp-content/uploads/2025/09/axum_obelisk_tour_hub_ethiopia1.webp',
        location: 'Tigray Region',
        duration: '2 Days',
        description: 'UNESCO World Heritage site featuring giant granite stelae, royal tombs of King Kaleb, Queen of Sheba’s palace, and St. Mary of Zion church.'
    },
    {
        id: 'gondar',
        title: 'Gondar Fasil Ghebbi Royal Castles',
        category: 'historical',
        era: 'medieval',
        regionKey: 'amhara',
        image: 'https://d3m4c209qf8hgy.cloudfront.net/uploads/h1-fasil-ghebbi-is-a-historic-fortress-in-the-city-of-gondar-658-1682673171.jpg',
        location: 'Amhara Region',
        duration: '1 - 2 Days',
        description: '17th-century fortress city built by Emperor Fasilides, featuring stone castles, royal bathhouses, and Debre Birhan Selassie church artwork.'
    },
    {
        id: 'harar',
        title: 'Harar Jugol Walled Historic City',
        category: 'historical',
        era: 'medieval',
        regionKey: 'harari',
        image: 'https://gatesofzionethiopiantours.com/wp-content/uploads/2024/02/Harar-Gate-1200x899-1-1024x767.jpg',
        location: 'Harari Region',
        duration: '2 Days',
        description: '4th holiest city of Islam surrounded by 16th-century stone walls, containing 82 mosques, colorful alleyways, and night hyena feeding.'
    },
    {
        id: 'yeha',
        title: 'Great Temple of Yeha (Sabaean Period)',
        category: 'historical',
        era: 'ancient',
        regionKey: 'tigray',
        image: 'https://tse1.mm.bing.net/th/id/OIP.KlQxfZAvdwJrX6J9JrhrnAHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        location: 'Tigray Region',
        duration: '1 Day',
        description: 'The oldest standing structure in Ethiopia dating back to 700 BCE, built during the Da’amat Kingdom with dry-fitted stone blocks.'
    },
    {
        id: 'tiya',
        title: 'Tiya Megalithic Stelae Field',
        category: 'historical',
        era: 'ancient',
        regionKey: 'central',
        image: 'https://tourhubethiopia.com/wp-content/uploads/2025/02/Tiya-Stelae-Field-tour-hub-ethiopia.webp',
        location: 'Central Ethiopia Region',
        duration: '1 Day',
        description: 'UNESCO archaeological site featuring 36 carved megalithic monuments and ancient grave markers with mysterious sword symbols.'
    },
    {
        id: 'laketana',
        title: 'Lake Tana Island Monasteries',
        category: 'historical',
        era: 'medieval',
        regionKey: 'amhara',
        image: 'https://tse3.mm.bing.net/th/id/OIP.LBew2k50UIpLL1qJ6hlQGwHaE7?r=0&w=1093&h=728&rs=1&pid=ImgDetMain&o=7&rm=3',
        location: 'Amhara Region (Bahir Dar)',
        duration: '2 Days',
        description: 'Source of the Blue Nile containing 20 island monasteries housing royal crowns, ancient Ge’ez manuscripts, and religious relics.'
    },
    {
        id: 'abunayemata',
        title: 'Abuna Yemata Guh Cliffside Church',
        category: 'historical',
        era: 'medieval',
        regionKey: 'tigray',
        image: 'https://preview.redd.it/abuna-yemata-guh-is-a-monolithic-church-located-in-the-v0-kdcilugisp8c1.jpeg?auto=webp&s=ce9b0b08db50e498d168b62b4519436ab533c282',
        location: 'Tigray Region (Gheralta)',
        duration: '1 Day',
        description: 'Breath-taking 5th-century church carved into a sheer cliff 2,500 meters high in the Gheralta mountains, famous for preserved frescoes.'
    },
    {
        id: 'debredamo',
        title: 'Debre Damo Flat-Topped Mountain Monastery',
        category: 'historical',
        era: 'ancient',
        regionKey: 'tigray',
        image: 'https://tse3.mm.bing.net/th/id/OIP.MdXsV9WQeUIlmpecYZF1PgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        location: 'Tigray Region',
        duration: '1 Day',
        description: '6th-century monastery accessible only by climbing a 15-meter leather rope up a vertical cliff face, founded by Abuna Aregawi.'
    },
    {
        id: 'sheikhhussein',
        title: 'Holy Shrine of Sheikh Hussein',
        category: 'historical',
        era: 'medieval',
        regionKey: 'oromia',
        image: 'https://i.pinimg.com/originals/98/8d/dc/988ddc49f178e4d829d7c4fb0844419f.jpg',
        location: 'Oromia Region (Bale)',
        duration: '2 Days',
        description: '13th-century sacred complex with whitewashed domes and Islamic monuments dedicated to Saint Sheikh Hussein.'
    },
    {
        id: 'abbajifar',
        title: 'King Abba Jifar II Palace of Jimma',
        category: 'historical',
        era: 'modern',
        regionKey: 'oromia',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqCObmuHBWh1RLJ8q7rPQzxQWvpVlP-byKquyx4A63thLzpliBSjAPjy0lakQ6f11vEzVFtRdpjAoRIHlMYdNmr0Cllb6i41p1d02F5IdpJgyJUnhh2AQd63k5HUps7x9m7bBt8-p9lJ2KIwls3SIrmxaxZsIfk1eND4qD-3V_uw2yyH4rNLROCaOr/w1200-h630-p-k-no-nu/aba%20jifar.jpg',
        location: 'Oromia Region (Jimma)',
        duration: '1 Day',
        description: '19th-century wooden palace built in Jiren by King Abba Jifar II, showcasing traditional kingdom architecture and royal artifacts.'
    },
    {
        id: 'melkakunture',
        title: 'Melka Kunture Prehistoric Site',
        category: 'historical',
        era: 'prehistoric',
        regionKey: 'oromia',
        image: 'https://tse2.mm.bing.net/th/id/OIP.jAJpF0i3HhEh2QMeIoPzeQHaEt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        location: 'Oromia Region',
        duration: '1 Day',
        description: 'A major Paleontological site along Awash river yielding stone age tools, hominid fossils, and extinct animal remains.'
    },
    {
        id: 'sofomar',
        title: 'Sof Omar Cave Network',
        category: 'adventure',
        era: 'ancient',
        regionKey: 'oromia',
        image: 'https://tse3.mm.bing.net/th/id/OIP.pGf3667CZ9p5gWtL2Z5jtAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        location: 'Oromia Region',
        duration: '1 - 2 Days',
        description: 'One of Africa’s largest underground cave systems (15.1 km long) carved by Weib river, sacred to local traditions.'
    },
    {
        id: 'lucyawash',
        title: 'Lower Awash Valley (Lucy Discovery Site)',
        category: 'historical',
        era: 'prehistoric',
        regionKey: 'afar',
        image: 'https://th.bing.com/th/id/R.58def12d7936529f041f5c0e92568b22?rik=OHCE9T5Op8YaBQ&riu=http%3a%2f%2fwww.venture-ethiopia.com%2fassets%2fUploads%2f_resampled%2fCroppedFocusedImageWzE2MDAsNTAwLCJ5Iiw0NDRd%2flower-awash.jpg&ehk=nCgH%2fbY7GNnn7UkkGdQ8oW1%2fuKFc0akLeHlQZdaR4q8%3d&risl=&pid=ImgRaw&r=0',
        location: 'Afar Region',
        duration: '1 - 2 Days',
        description: 'UNESCO Paleontological site where the 3.2-million-year-old Australopithecus hominid "Lucy" (Dinkinesh) was discovered in 1974.'
    },
    {
        id: 'simien',
        title: 'Simien Mountains National Park',
        category: 'nature',
        era: 'ancient',
        regionKey: 'amhara',
        image: 'https://nationalparksassociation.org/wp-content/uploads/2024/02/Simien-Mountains-National-Park.jpg',
        location: 'Amhara Region',
        duration: '3 - 5 Days',
        description: 'Dramatic volcanic plateaus, Ras Dashen peak (4,550m), Gelada baboons, Walia ibex, and Ethiopian wolves.'
    },
    {
        id: 'danakil',
        title: 'Danakil Depression & Erta Ale Volcano',
        category: 'adventure',
        era: 'prehistoric',
        regionKey: 'afar',
        image: 'https://www.shutterstock.com/image-photo/erta-ale-volcano-ethiopia-260nw-2003320967.jpg',
        location: 'Afar Region',
        duration: '3 - 4 Days',
        description: 'Lowest geological basin in Africa (-125m) featuring neon hydrothermal acid springs at Dallol and active basaltic lava lake at Erta Ale.'
    },
    {
        id: 'omo',
        title: 'Lower Valley of Omo & Indigenous Cultures',
        category: 'culture',
        era: 'prehistoric',
        regionKey: 'south',
        image: 'https://www.visionsofethiopiatours.com/wp-content/uploads/2024/03/10-Day-Trip-Southern-OMO-7-850x540.jpeg',
        location: 'South Ethiopia Regional State',
        duration: '4 - 7 Days',
        description: 'UNESCO World Heritage region famous for prehistoric hominid remains and vibrant communities like the Mursi, Hamer, and Karo.'
    },
    {
        id: 'balemountains',
        title: 'Bale Mountains National Park',
        category: 'nature',
        era: 'ancient',
        regionKey: 'oromia',
        image: 'https://baletrekethiopiatours.com/wp-content/uploads/2021/06/bale-mountains-national-park-sanetti-plateau-1024x683.jpg',
        location: 'Oromia Region',
        duration: '3 - 4 Days',
        description: 'High Afro-alpine Sanetti Plateau, dense Harenna cloud forest, and sanctuary for rare Ethiopian wolves and mountain nyalas.'
    }
];

// All 12 Ethiopian Administrative Regions + 2 Chartered Cities
const regionDetailsMap = {
    tigray: {
        title: "Tigray Region",
        badge: "Cradle of Aksumite Empire",
        capital: "Mekelle",
        historicalSites: "Aksum Obelisks, Yeha Temple, Debre Damo, Abuna Yemata Guh, Al-Nejashi Mosque",
        description: "Northern region packed with over 120 rock-hewn churches, ancient Aksumite royal tombs, pre-Christian temples, and early Islamic heritage at Al-Nejashi."
    },
    amhara: {
        title: "Amhara Region",
        badge: "Medieval Imperial Realm",
        capital: "Bahir Dar",
        historicalSites: "Lalibela Monoliths, Gondar Castles, Lake Tana Monasteries, Simien Mountains",
        description: "Heartland of medieval Abyssinian kings, home to King Lalibela’s rock-cut churches, Fasilides castle enclosure, source of Blue Nile, and highest peaks."
    },
    oromia: {
        title: "Oromia Region",
        badge: "Coffee Origin & Nature Realm",
        capital: "Adama / Addis Ababa",
        historicalSites: "Sheikh Hussein Shrine, Melka Kunture Paleontological Site, Abba Jifar Palace (Jimma), Sof Omar Caves",
        description: "Ethiopia’s largest region, birthplace of coffee arabica (Kaffa/Bale zones), Gadaa democratic system, high alpine Bale mountains, and deep cave systems."
    },
    afar: {
        title: "Afar Region",
        badge: "Geological Cradle of Mankind",
        capital: "Semera",
        historicalSites: "Lower Awash Valley (Lucy/Dinkinesh), Erta Ale Volcano, Dallol Salt Springs",
        description: "Geological rift zone where early hominids like 'Lucy' walked millions of years ago, featuring active lava lakes and salt caravans."
    },
    somali: {
        title: "Somali Region",
        badge: "Eastern Trade Corridor",
        capital: "Jigjiga",
        historicalSites: "Gode Heritage Sites, Shellako Caves, Jigjiga Historical Monuments",
        description: "Vast eastern region known for camel nomadic heritage, ancient trade routes linking the Horn coast, and rocky plateaus."
    },
    harari: {
        title: "Harari Region",
        badge: "UNESCO Historic Walled City",
        capital: "Harar",
        historicalSites: "Harar Jugol City Walls, Rimbaud House, Jamia Mosque",
        description: "Compact historic region surrounding 16th-century walled Harar Jugol, renowned for Islamic scholarship, colorful architecture, and wild hyenas."
    },
    benishangul: {
        title: "Benishangul-Gumuz Region",
        badge: "Western Nile Basin",
        capital: "Assosa",
        historicalSites: "Grand Ethiopian Renaissance Dam (GERD), Assosa Rock Art, Blue Nile Basin",
        description: "Bordering Sudan in the Blue Nile river basin, rich in gold mining traditions, lush bamboo forests, and indigenous cultures."
    },
    gambela: {
        title: "Gambela Region",
        badge: "Western Wetlands & Wildlife",
        capital: "Gambela",
        historicalSites: "Baro River Port Heritage, Gambela National Park",
        description: "Lowland tropical region along Baro River, home to Anuak and Nuer communities, and massive seasonal white-eared kob wildlife migrations."
    },
    sidama: {
        title: "Sidama Region",
        badge: "Fichee-Chambalaala Cultural Hub",
        capital: "Hawassa",
        historicalSites: "Lake Hawassa Heritage, Sidama Cultural Centers, Coffee Forests",
        description: "Famous for UNESCO-registered Fichee-Chambalaala New Year festival, scenic rift valley lakes, and world-renowned Yirgacheffe/Sidama coffee."
    },
    southwest: {
        title: "South West Ethiopia Peoples' Region",
        badge: "Ancient Forest Coffee Heartland",
        capital: "Bonga",
        historicalSites: "Kaffa Coffee Origin Forests, Bonga Royal Kingdom Sites",
        description: "Dense rainforest region where wild Coffee Arabica originated in Kaffa province, rich in biodiversity and royal kingdom history."
    },
    south: {
        title: "South Ethiopia Regional State",
        badge: "Omo Valley & Cultural Mosaic",
        capital: "Wolaita Sodo",
        historicalSites: "Lower Valley of Omo (Paleontological UNESCO Site), Konso Cultural Landscape",
        description: "Home to UNESCO stone-walled terraced Konso landscapes and dozens of distinct indigenous communities along the lower Omo River."
    },
    central: {
        title: "Central Ethiopia Regional State",
        badge: "Prehistoric Megaliths",
        capital: "Hosanna",
        historicalSites: "Tiya Megalithic Stelae (UNESCO Site), Adadi Mariam Rock Church",
        description: "Central rift state housing 13th-century rock-carved Adadi Mariam church, Gurage cultural villages, and prehistoric Tiya carved stelae fields."
    },
    addis: {
        title: "Addis Ababa (Chartered City)",
        badge: "Diplomatic Capital of Africa",
        capital: "Addis Ababa",
        historicalSites: "National Museum (Lucy Replica), Entoto Maryam Palace, Holy Trinity Cathedral",
        description: "Africa's diplomatic hub housing African Union HQ, National Museum with prehistoric fossil displays, and Emperor Menelik II’s historic Entoto palace."
    },
    diredawa: {
        title: "Dire Dawa (Chartered City)",
        badge: "Franco-Ethiopian Railway City",
        capital: "Dire Dawa",
        historicalSites: "Kebele 01 Railway Station Heritage, Porc-Epic Cave Art",
        description: "Historic railway boomtown founded in 1902 along the Imperial Railway line, known for French-influenced architecture and prehistoric cave art."
    }
};

// On DOM Load
document.addEventListener('DOMContentLoaded', () => {
    renderRegionButtons();
    renderDestinations('all');
    selectRegion('amhara');
    
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileDrawer');
    if (mobileBtn && drawer) {
        mobileBtn.addEventListener('click', () => drawer.classList.toggle('hidden'));
    }
});

function renderRegionButtons() {
    const container = document.getElementById('regionBtnBar');
    if (!container) return;

    const regionKeys = Object.keys(regionDetailsMap);
    container.innerHTML = regionKeys.map(key => {
        const item = regionDetailsMap[key];
        return `
            <button onclick="selectRegion('${key}')" id="btn-region-${key}" class="region-select-btn px-4 py-2 rounded-full text-xs font-bold border transition shrink-0 bg-white border-slate-200 text-slate-700 hover:bg-amber-100">
                ${item.title.replace(' Region', '').replace(' Regional State', '').replace(' Peoples\' Region', '')}
            </button>
        `;
    }).join('');
}

function renderDestinations(category) {
    const grid = document.getElementById('destinationsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = category === 'all' 
        ? destinationsData 
        : destinationsData.filter(d => d.category === category);

    // Update Counts
    document.getElementById('countAll').innerText = destinationsData.length;
    document.getElementById('countHist').innerText = destinationsData.filter(d => d.category === 'historical').length;
    document.getElementById('countNat').innerText = destinationsData.filter(d => d.category === 'nature').length;
    document.getElementById('countCult').innerText = destinationsData.filter(d => d.category === 'culture').length;
    document.getElementById('countAdv').innerText = destinationsData.filter(d => d.category === 'adventure').length;

    filtered.forEach(item => {
        grid.innerHTML += `
            <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-amber-900/10 hover:shadow-xl transition group flex flex-col justify-between">
                <div>
                    <div class="relative overflow-hidden h-52">
                        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                        <span class="absolute top-3 left-3 px-3 py-1 bg-coffeeDark/90 text-amber-300 font-bold text-[10px] uppercase rounded-full backdrop-blur-sm">
                            ${item.location}
                        </span>
                    </div>
                    <div class="p-5">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-[10px] font-extrabold uppercase text-ethGreen bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                ${item.duration}
                            </span>
                            <span class="text-[10px] font-extrabold uppercase text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                                ${item.era} Era
                            </span>
                        </div>
                        <h3 class="text-lg font-bold text-coffeeDark mb-2 group-hover:text-ethGreen transition">${item.title}</h3>
                        <p class="text-slate-600 text-xs leading-relaxed">${item.description}</p>
                    </div>
                </div>
                <div class="p-5 pt-0">
                    <button onclick="openBookingModal()" class="w-full py-2.5 bg-earthWarm text-coffeeDark rounded-xl text-xs font-bold hover:bg-ethGreen hover:text-white transition shadow-sm">
                        <i class="fa-solid fa-calendar-check mr-1"></i> Inquire Historical Tour
                    </button>
                </div>
            </div>
        `;
    });
}

function filterDestinations(cat) {
    document.querySelectorAll('.dest-filter-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-category') === cat;
        btn.className = isActive
            ? 'dest-filter-btn px-5 py-2.5 rounded-full text-xs font-bold transition bg-coffeeDark text-white shadow'
            : 'dest-filter-btn px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-amber-100 transition';
    });
    renderDestinations(cat);
}

function selectRegion(key) {
    const data = regionDetailsMap[key] || regionDetailsMap.amhara;
    
    // Highlight SVG map region
    document.querySelectorAll('.map-region').forEach(el => {
        if (el.getAttribute('data-region') === key) {
            el.classList.add('active-region');
        } else {
            el.classList.remove('active-region');
        }
    });

    // Highlight button
    document.querySelectorAll('.region-select-btn').forEach(btn => {
        if (btn.id === `btn-region-${key}`) {
            btn.className = 'region-select-btn px-4 py-2 rounded-full text-xs font-bold border transition shrink-0 bg-coffeeDark text-amber-300 border-coffeeDark shadow';
        } else {
            btn.className = 'region-select-btn px-4 py-2 rounded-full text-xs font-bold border transition shrink-0 bg-white border-slate-200 text-slate-700 hover:bg-amber-100';
        }
    });

    document.getElementById('selectedRegionTag').innerText = `Selected: ${data.title}`;
    document.getElementById('regionDetailCard').innerHTML = `
        <div>
            <span class="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold mb-3 inline-block">${data.badge}</span>
            <h3 class="text-2xl font-bold text-coffeeDark mb-2">${data.title}</h3>
            <p class="text-slate-600 text-xs leading-relaxed mb-4">${data.description}</p>
            
            <div class="p-4 bg-earthWarm rounded-2xl border border-amber-900/10 mb-4 space-y-2">
                <h4 class="text-xs font-extrabold text-coffeeDark uppercase"><i class="fa-solid fa-landmark text-ethGold mr-1"></i> Key Historical & Natural Sites:</h4>
                <p class="text-xs font-medium text-slate-700">${data.historicalSites}</p>
            </div>
        </div>
        <div class="pt-3 border-t text-xs font-semibold text-slate-500 flex justify-between items-center">
            <span>Regional Capital: <strong class="text-slate-800">${data.capital}</strong></span>
            <button onclick="openBookingModal()" class="px-3 py-1.5 bg-ethGreen text-white rounded-lg font-bold text-[11px] hover:bg-emerald-700 transition">Explore Region</button>
        </div>
    `;
}

function switchCultureTab(tab) {
    document.querySelectorAll('.culture-tab-content').forEach(el => el.classList.add('hidden'));
    
    document.getElementById('tabBtnCoffee').className = 'pb-4 border-b-2 border-transparent text-slate-400 hover:text-white transition';
    document.getElementById('tabBtnCuisine').className = 'pb-4 border-b-2 border-transparent text-slate-400 hover:text-white transition';
    document.getElementById('tabBtnLanguage').className = 'pb-4 border-b-2 border-transparent text-slate-400 hover:text-white transition';

    if (tab === 'coffee') {
        document.getElementById('cultureContentCoffee').classList.remove('hidden');
        document.getElementById('tabBtnCoffee').className = 'pb-4 border-b-2 border-ethYellow text-ethYellow transition';
    }
    if (tab === 'cuisine') {
        document.getElementById('cultureContentCuisine').classList.remove('hidden');
        document.getElementById('tabBtnCuisine').className = 'pb-4 border-b-2 border-ethYellow text-ethYellow transition';
    }
    if (tab === 'language') {
        document.getElementById('cultureContentLanguage').classList.remove('hidden');
        document.getElementById('tabBtnLanguage').className = 'pb-4 border-b-2 border-ethYellow text-ethYellow transition';
    }
}

function convertCurrency() {
    const amount = parseFloat(document.getElementById('calcAmount').value) || 0;
    const rates = { USD: 125.0, EUR: 135.5, GBP: 160.0 };
    const from = document.getElementById('calcFrom').value;
    const res = (amount * rates[from]).toLocaleString('en-US', { minimumFractionDigits: 2 });
    document.getElementById('calcResult').innerText = `${res} ETB`;
}

function handleHeroSearch(e) {
    e.preventDefault();
    const regionVal = document.getElementById('heroRegionSelect').value;
    const typeVal = document.getElementById('heroTypeSelect').value;
    
    if (regionVal !== 'all') {
        selectRegion(regionVal);
    }
    if (typeVal !== 'all') {
        filterDestinations(typeVal);
    }
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
    showToast('Search filters applied!');
}

function generateItinerary(e) {
    e.preventDefault();
    const focus = document.getElementById('itineraryFocus').value;
    const res = document.getElementById('itineraryResult');
    res.classList.remove('hidden');
    res.innerHTML = `
        <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-slate-800 space-y-2">
            <h4 class="font-extrabold text-emerald-900 text-sm flex items-center gap-2">
                <i class="fa-solid fa-circle-check text-ethGreen"></i> Tailored Historical Itinerary Generated
            </h4>
            <p class="text-xs text-emerald-800">Your custom route (${focus.toUpperCase()}) covers key regional highlights and heritage monuments with dedicated local guides.</p>
        </div>
    `;
    showToast('Custom Historical Itinerary Generated!');
}

function openBookingModal() {
    document.getElementById('bookingModal').classList.remove('hidden');
    document.getElementById('bookingModal').classList.add('flex');
}

function closeBookingModal() {
    document.getElementById('bookingModal').classList.add('hidden');
    document.getElementById('bookingModal').classList.remove('flex');
}

function handleBookingSubmit(e) {
    e.preventDefault();
    closeBookingModal();
    showToast('Tour inquiry submitted successfully!');
}

function openLightbox(src, caption) {
    document.getElementById('lightboxImage').src = src;
    document.getElementById('lightboxCaption').innerText = caption;
    document.getElementById('lightboxModal').classList.remove('hidden');
    document.getElementById('lightboxModal').classList.add('flex');
}

function closeLightbox() {
    document.getElementById('lightboxModal').classList.add('hidden');
    document.getElementById('lightboxModal').classList.remove('flex');
}

function playAudioGreeting() {
    showToast('Playing greeting audio: "Selam" (ሰላም)');
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').innerText = msg;
    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-24', 'opacity-0');
    }, 3000);
}
