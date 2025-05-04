
// Studienkolleg data
const studienkollegs = [
    {
        id: "sk1",
        name: "Studienkolleg bei den Universitäten des Freistaates Bayern",
        location: "München",
        address: "Goethestraße 70, 80336 München",
        type: "Studienkolleg",
        kurse: "T, W, M, G",
        languageRequirements: "Deutsch (B2)",
        testRequirements: ["Feststellungsprüfung"],
        semesterAvailability: ["Wintersemester", "Sommersemester"],
        websiteUrl: "https://www.studienkolleg.mhn.de/",
        applicationDeadline: "15. Januar (Sommersemester); 15. Juli (Wintersemester)",
        applicationMethod: "Direkt beim Studienkolleg",
        applicationTestDate: "Termine werden auf der Website veröffentlicht",
        email: "info@studienkolleg.mhn.de",
        phone: "+49 89 12345678",
        requiredDocuments: [
            "BAC",
            "Relevé de Notes",
            "Lebenslauf",
            "Antragsformular",
            "Passbild",
            "Sprachnachweis Deutsch (B2)"
        ],
        description: "Das Studienkolleg bei den Universitäten des Freistaates Bayern bereitet ausländische Studienbewerber auf ein Studium an bayerischen Universitäten vor."
    },
    {
        id: "sk2",
        name: "Studienkolleg Konstanz",
        location: "Konstanz",
        address: "Mainaustraße 186, 78464 Konstanz",
        type: "Studienkolleg",
        kurse: "T, W, M",
        languageRequirements: "Deutsch (B2)",
        testRequirements: ["Aufnahmetest", "Feststellungsprüfung"],
        semesterAvailability: ["Wintersemester", "Sommersemester"],
        websiteUrl: "https://www.htwg-konstanz.de/studienkolleg/",
        applicationDeadline: "15. Januar (Sommersemester); 15. Juli (Wintersemester)",
        applicationMethod: "Über Uni-Assist",
        applicationTestDate: "März (Sommersemester); September (Wintersemester)",
        email: "studienkolleg@htwg-konstanz.de",
        phone: "+49 7531 206-360",
        requiredDocuments: [
            "BAC",
            "Relevé de Notes",
            "Lebenslauf",
            "Antragsformular",
            "Passbild",
            "Sprachnachweis Deutsch (B2)",
            "Kopie des Passes"
        ],
        description: "Das Studienkolleg Konstanz bereitet internationale Studienbewerber auf ein Studium an Hochschulen für angewandte Wissenschaften in Baden-Württemberg vor."
    },
    {
        id: "sk3",
        name: "Studienkolleg der Johannes Gutenberg-Universität Mainz",
        location: "Mainz",
        address: "Saarstraße 52, 55122 Mainz",
        type: "Studienkolleg",
        kurse: "M, T, W, G, S",
        languageRequirements: "Deutsch (B2)",
        testRequirements: ["Aufnahmetest", "Feststellungsprüfung"],
        semesterAvailability: ["Wintersemester", "Sommersemester"],
        websiteUrl: "https://www.studienkolleg.uni-mainz.de/",
        applicationDeadline: "15. Januar (Sommersemester); 15. Juli (Wintersemester)",
        applicationMethod: "Direkt beim Studienkolleg",
        applicationTestDate: "Februar (Sommersemester); August (Wintersemester)",
        email: "studienkolleg@uni-mainz.de",
        phone: "+49 6131 39-37400",
        requiredDocuments: [
            "BAC",
            "Relevé de Notes",
            "Lebenslauf",
            "Antragsformular",
            "Passbild",
            "Sprachnachweis Deutsch (B2)",
            "Motivationsschreiben"
        ],
        description: "Das Studienkolleg der Johannes Gutenberg-Universität Mainz ist eine zentrale Einrichtung der Universität, die ausländische Studienbewerber auf ein Studium vorbereitet."
    },
    {
        id: "sk4",
        name: "Studienkolleg Mittelhessen",
        location: "Marburg",
        address: "Hans-Meerwein-Straße 6, 35032 Marburg",
        type: "Studienkolleg",
        kurse: "T, W, M, G",
        languageRequirements: "Deutsch (B2)",
        testRequirements: ["Aufnahmetest", "Feststellungsprüfung"],
        semesterAvailability: ["Wintersemester", "Sommersemester"],
        websiteUrl: "https://www.uni-marburg.de/de/studienkolleg",
        applicationDeadline: "15. Januar (Sommersemester); 15. Juli (Wintersemester)",
        applicationMethod: "Über Uni-Assist",
        applicationTestDate: "März (Sommersemester); September (Wintersemester)",
        email: "stk@uni-marburg.de",
        phone: "+49 6421 28-26142",
        requiredDocuments: [
            "BAC",
            "Relevé de Notes",
            "Lebenslauf",
            "Antragsformular",
            "Passbild",
            "Sprachnachweis Deutsch (B2)"
        ],
        description: "Das Studienkolleg Mittelhessen ist eine gemeinsame Einrichtung der Philipps-Universität Marburg und der Justus-Liebig-Universität Gießen."
    },
    {
        id: "sk5",
        name: "Studienkolleg Hamburg",
        location: "Hamburg",
        address: "Holstenglacis 6, 20355 Hamburg",
        type: "Studienkolleg",
        kurse: "T, W, M, G, S",
        languageRequirements: "Deutsch (B2)",
        testRequirements: ["Aufnahmetest", "Feststellungsprüfung"],
        semesterAvailability: ["Wintersemester", "Sommersemester"],
        websiteUrl: "https://www.studienkolleg-hamburg.de/",
        applicationDeadline: "31. Januar (Sommersemester); 15. Juli (Wintersemester)",
        applicationMethod: "Direkt beim Studienkolleg",
        applicationTestDate: "Februar (Sommersemester); August (Wintersemester)",
        email: "info@studienkolleg-hamburg.de",
        phone: "+49 40 42838-4536",
        requiredDocuments: [
            "BAC",
            "Relevé de Notes",
            "Lebenslauf",
            "Antragsformular",
            "Passbild",
            "Sprachnachweis Deutsch (B2)",
            "Kopie des Passes"
        ],
        description: "Das Studienkolleg Hamburg bereitet internationale Studienbewerberinnen und Studienbewerber auf ein Studium an einer Hamburger Hochschule vor."
    }
];

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Initialize page based on current URL
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    
    if (path.includes('studienkollegs.html')) {
        // Load studienkollegs list
        displayStudienkollegs(studienkollegs);
        
        // Set up filter form
        const filterForm = document.getElementById('filterForm');
        if (filterForm) {
            filterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const query = document.getElementById('searchQuery').value.toLowerCase();
                const germanChecked = document.getElementById('germanFilter').checked;
                const englishChecked = document.getElementById('englishFilter').checked;
                
                let filtered = studienkollegs;
                
                // Filter by search query
                if (query) {
                    filtered = filtered.filter(sk => 
                        sk.name.toLowerCase().includes(query) || 
                        sk.location.toLowerCase().includes(query)
                    );
                }
                
                // Filter by language
                const languageFilters = [];
                if (germanChecked) languageFilters.push('deutsch');
                if (englishChecked) languageFilters.push('englisch');
                
                if (languageFilters.length > 0) {
                    filtered = filtered.filter(sk => {
                        const langReq = sk.languageRequirements.toLowerCase();
                        return languageFilters.some(lang => langReq.includes(lang));
                    });
                }
                
                displayStudienkollegs(filtered);
            });
        }
    } else if (path.includes('studienkolleg-detail.html')) {
        // Load single studienkolleg detail
        const id = getUrlParameter('id');
        if (id) {
            const sk = studienkollegs.find(s => s.id === id);
            if (sk) {
                displayStudienkollegDetail(sk);
            } else {
                document.getElementById('studienkolleg-detail').innerHTML = `
                    <div class="text-center py-16">
                        <h2 class="text-2xl font-semibold mb-4">Studienkolleg nicht gefunden</h2>
                        <p class="text-gray-600 mb-8">
                            Das gesuchte Studienkolleg existiert nicht oder wurde entfernt.
                        </p>
                        <a href="studienkollegs.html" class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Zurück zur Übersicht
                        </a>
                    </div>
                `;
            }
        }
    } else if (path.includes('index.html') || path === '/' || path === '') {
        // Set up search form on home page
        const searchForm = document.getElementById('searchForm');
        if (searchForm) {
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const query = document.getElementById('query').value;
                const germanChecked = document.getElementById('german').checked;
                const englishChecked = document.getElementById('english').checked;
                
                let params = [];
                if (query) params.push(`query=${encodeURIComponent(query)}`);
                
                const languages = [];
                if (germanChecked) languages.push('deutsch');
                if (englishChecked) languages.push('englisch');
                
                if (languages.length > 0) {
                    params.push(`language=${languages.join(',')}`);
                }
                
                window.location.href = `studienkollegs.html?${params.join('&')}`;
            });
        }
    }
});

// Display list of studienkollegs
function displayStudienkollegs(skList) {
    const container = document.getElementById('studienkollegList');
    
    if (!container) return;
    
    if (skList.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-16">
                <h2 class="text-2xl font-semibold mb-4">Keine Ergebnisse gefunden</h2>
                <p class="text-gray-600 mb-8">
                    Bitte versuchen Sie andere Suchkriterien oder wenden Sie sich an uns für weitere Unterstützung.
                </p>
                <button onclick="resetFilters()" class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Filter zurücksetzen
                </button>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    skList.forEach(sk => {
        html += `
            <div class="university-card card-shadow">
                <div class="flex flex-col h-full">
                    <div class="mb-4">
                        <span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                            ${sk.type}
                        </span>
                        <h3 class="text-xl font-semibold mb-1 line-clamp-2">${sk.name}</h3>
                        <div class="flex items-center text-gray-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                            ${sk.location}
                        </div>
                    </div>
                    
                    <div class="mb-4 flex-grow">
                        <div class="mb-3">
                            <div class="text-sm font-medium text-gray-700">Kurse:</div>
                            <div class="text-sm">${sk.kurse}</div>
                        </div>
                        <div class="mb-3">
                            <div class="text-sm font-medium text-gray-700">Sprachanforderung:</div>
                            <div class="text-sm">${sk.languageRequirements}</div>
                        </div>
                        <div>
                            <div class="text-sm font-medium text-gray-700">Bewerbungsfrist:</div>
                            <div class="text-sm">${sk.applicationDeadline}</div>
                        </div>
                    </div>
                    
                    <div class="pt-4 border-t border-gray-200">
                        <a href="studienkolleg-detail.html?id=${sk.id}" class="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-md transition-colors">
                            Details ansehen
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Display studienkolleg detail
function displayStudienkollegDetail(sk) {
    const container = document.getElementById('studienkolleg-detail');
    if (!container) return;
    
    // Update page title
    document.title = `${sk.name} | MAROCASSIST`;
    
    const html = `
        <div class="bg-white rounded-xl overflow-hidden shadow-lg">
            <div class="p-6 md:p-8">
                <div class="mb-6">
                    <span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                        ${sk.type}
                    </span>
                    <h1 class="text-3xl font-bold mt-2 mb-3">${sk.name}</h1>
                    
                    <div class="flex items-center text-gray-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        ${sk.location}
                    </div>
                    
                    <div class="text-sm text-gray-600 mb-4">
                        ${sk.address}
                    </div>
                    
                    <div class="text-sm text-gray-600 mb-4">
                        ${sk.description}
                    </div>
                    
                    <a href="${sk.websiteUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        Website besuchen
                    </a>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Basic Information Card -->
                    <div class="bg-gray-50 rounded-lg p-6">
                        <h2 class="text-xl font-semibold mb-4">Grundinformationen</h2>
                        
                        <div class="space-y-4">
                            <div>
                                <h3 class="text-sm font-medium text-gray-700">Kurse:</h3>
                                <p>${sk.kurse}</p>
                            </div>
                            
                            <div>
                                <h3 class="text-sm font-medium text-gray-700">Sprachanforderungen:</h3>
                                <p>${sk.languageRequirements}</p>
                            </div>
                            
                            <div>
                                <h3 class="text-sm font-medium text-gray-700">Prüfungen:</h3>
                                <ul class="list-disc list-inside">
                                    ${sk.testRequirements.map(test => `<li>${test}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div>
                                <h3 class="text-sm font-medium text-gray-700">Semesterangebot:</h3>
                                <p>${sk.semesterAvailability.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Application Info Card -->
                    <div class="bg-gray-50 rounded-lg p-6">
                        <h2 class="text-xl font-semibold mb-4">Bewerbungsinformationen</h2>
                        
                        <div class="space-y-4">
                            <div>
                                <h3 class="text-sm font-medium text-gray-700">Bewerbungsfrist:</h3>
                                <p>${sk.applicationDeadline}</p>
                            </div>
                            
                            <div>
                                <h3 class="text-sm font-medium text-gray-700">Bewerbungsmethode:</h3>
                                <p>${sk.applicationMethod}</p>
                            </div>
                            
                            ${sk.applicationTestDate ? `
                                <div>
                                    <h3 class="text-sm font-medium text-gray-700">Aufnahmetestdatum:</h3>
                                    <p class="text-amber-700">${sk.applicationTestDate}</p>
                                </div>
                            ` : ''}
                            
                            <div>
                                <h3 class="text-sm font-medium text-gray-700">Kontakt:</h3>
                                <p>Email: ${sk.email}</p>
                                <p>Telefon: ${sk.phone}</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Required Documents Card -->
                    <div class="bg-gray-50 rounded-lg p-6 md:col-span-2">
                        <h2 class="text-xl font-semibold mb-4">Benötigte Dokumente</h2>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            ${sk.requiredDocuments.map(doc => `
                                <div class="flex items-center bg-white p-3 rounded-md shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                                    </svg>
                                    <span>${doc}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Function to reset filters
function resetFilters() {
    document.getElementById('searchQuery').value = '';
    document.getElementById('germanFilter').checked = false;
    document.getElementById('englishFilter').checked = false;
    displayStudienkollegs(studienkollegs);
}
