/* =========================================================
   TRANSLATIONS
========================================================= */

const data = {
    en: {
        projects: "Projects",
        cv: "CV",
        herolabel: "MECHANICAL CADs & AUTOMATION SOLUTIONs",

        hero: "Engineering ideas into manufacturable systems.",

        intro:
            "Mechanical engineer with experience in multidisciplinary design, automation, lightweight engineering, FEM, 3D CAD and detailed drawings — from concept to production and on-site assembly.",

        see: "View CAD projects",
        readcv: "Read CV",

        selected: "SELECTED WORK",
        portfolio: "CAD projects",

        cvtitle: "Mechanical Engineer",

        jobtitle: "Mechanical Engineer",
        mobile: "Mobile:",
        email: "Email:",

        tools: "Technical tools & skills",
        personal: "Personal details",

        languages:
            "Languages: Mandarin Chinese (native), English (professional), Swedish (functional)",

        licence: "Driving licence: B",

        hobbies:
            "Hobbies: 3D smart-home design, bamboo flute, board games, hiking and cooking",

        ref: "Let's create a 3D world!"
    },

    sv: {
        projects: "Projekt",
        cv: "CV",
        herolabel: "MASKININGENJÖR · CAD · AUTOMATION",

        hero: "Från ingenjörsidé till tillverkningsbar lösning.",

        intro:
            "Maskiningenjör med erfarenhet av tvärdisciplinär konstruktion, automation, lättviktskonstruktion, FEM, 3D-CAD och detaljritningar — från koncept till produktion och montage på plats.",

        see: "Se CAD-projekt",
        readcv: "Läs CV",

        selected: "UTVALDA ARBETEN",
        portfolio: "CAD-projektportfölj",

        cvtitle: "Maskiningenjör · Forskningsingenjör",

        jobtitle: "Maskiningenjör",
        mobile: "Mobil:",
        email: "E-post:",

        tools: "Tekniska verktyg & kompetenser",
        personal: "Personliga uppgifter",

        languages:
            "Språk: mandarin (modersmål), engelska (professionell), svenska (funktionell)",

        licence: "Körkort: B",

        hobbies:
            "Intressen: 3D-design för smarta hem, bambuflöjt, brädspel, vandring och matlagning",

        ref: "Let's create a 3D world!."
    }
};


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
    {
        image: "engine_block_grinding.jpg",

        title: {
            en: "Engine Block Grinding Automation",
            sv: "Slipning av motorblock med robotar"
        },

        description: {
            en:
                "Robotic production-cell concept for automated grinding of engine cylinder blocks, including material flow and multi-robot workstations.",

            sv:
                "Koncept för automatiserad slipning av motorblock med robotar, materialflöde och flera robotstationer."
        }
    },

    {
        image: "water_process_control.jpg",

        title: {
            en: "Purified Water Process Control",
            sv: "Processtyrning för renat vatten"
        },

        description: {
            en:
                "CAD layout for a purified-water production and control system with source-water tank, filtration, conversion, adsorption and purified-water storage.",

            sv:
                "CAD-layout för produktion och styrning av renat vatten med råvattentank, filtrering, behandling, adsorption och renvattentank."
        }
    },

    {
        image: "anti_loosening_nut.jpg",

        title: {
            en: "Anti-loosening Nut",
            sv: "Självlåsande mutter"
        },

        description: {
            en:
                "Mechanical detail model exploring a threaded anti-loosening nut and retaining geometry.",

            sv:
                "Detaljkonstruktion av en gängad självlåsande mutter och dess låsgeometri."
        }
    },

    {
        image: "scissor_lift.jpg",

        title: {
            en: "Scissor Lift Platform",
            sv: "Saxlyftplattform"
        },

        description: {
            en:
                "Compact scissor-lift mechanism with guided platform and actuator-driven elevation.",

            sv:
                "Kompakt saxlyftmekanism med styrd plattform och aktuatorstyrd höjning."
        }
    },

    {
        image: "university_laboratory.jpg",

        title: {
            en: "University Laboratory Interior",
            sv: "Universitetslaboratorium"
        },

        description: {
            en:
                "Laboratory workstation and furniture layout model for Nanjing University of Posts and Telecommunications.",

            sv:
                "Layoutmodell för laboratoriearbetsplatser och inredning vid Nanjing University of Posts and Telecommunications."
        }
    },

    {
        image: "university_main_building.jpg",

        title: {
            en: "University Main Building",
            sv: "Universitetets huvudbyggnad"
        },

        description: {
            en:
                "Architectural CAD visualization of the main building, including rooftop solar panels and exterior detailing.",

            sv:
                "Arkitektonisk CAD-visualisering av huvudbyggnaden med solpaneler på taket och fasaddetaljer."
        }
    },

    {
        image: "chocolate_production_line.jpg",

        title: {
            en: "Chocolate Assembly Production Line",
            sv: "Monteringslinje för choklad"
        },

        description: {
            en:
                "Automated boxed-chocolate assembly line model with enclosed stations, conveyors, robotics and operator interface.",

            sv:
                "Automatiserad monteringslinje för chokladaskar med kapslade stationer, transportörer, robotik och operatörsgränssnitt."
        }
    },

    {
        image: "factory_layout.png",

        title: {
            en: "New Factory Layout",
            sv: "Layout för ny fabrik"
        },

        description: {
            en:
                "Factory floor layout covering storage, cutting, machining, laser cutting, welding and supporting process areas.",

            sv:
                "Fabrikslayout med lager, kapning, bearbetning, laserskärning, svetsning och stödprocesser."
        }
    },

    {
        image: "cartesian_inspection_robot.jpg",

        title: {
            en: "3D Cartesian Defect Inspection Robot",
            sv: "3D-kartesisk robot för defektinspektion"
        },

        description: {
            en:
                "Gantry-style Cartesian robot concept for automated defect inspection across a large working envelope.",

            sv:
                "Portalbaserat kartesiskt robotkoncept för automatiserad defektinspektion över ett stort arbetsområde."
        }
    },

    {
        image: "water_capping_sealing.jpg",

        title: {
            en: "Water Production Capping & Sealing",
            sv: "Kapsling och försegling i vattenproduktion"
        },

        description: {
            en:
                "Enclosed machine concept for bottle capping and sealing, with conveyor infeed and protected processing area.",

            sv:
                "Kapslat maskinkoncept för flaskkapsling och försegling med transportörinmatning och skyddat processområde."
        }
    }
];


/* =========================================================
   CV CONTENT
========================================================= */

const cv = {
    en: `
        <section class="job">
            <h3>Professional summary</h3>

            <ul>
                <li>
                    Professional experience in mechanical design within
                    multidisciplinary teams, collaborating closely with clients
                    to deliver robust engineering solutions, including
                    automated casting production lines.
                </li>

                <li>
                    Strong skills in lightweight design, FEM, and detailed
                    2D drawings and 3D CAD models for mechanical components
                    and complex systems.
                </li>

                <li>
                    Strong interest in manufacturing and product development,
                    with hands-on 3D printing, CNC machining and on-site
                    assembly experience.
                </li>
            </ul>
        </section>


        <section class="job">
            <h3>
                Data Engineer (Internship)
            </h3>

            <p class="meta">
                09/2025 – 03/2026
            </p>

            <p>
                <strong>
                    Lund University
                </strong>

            <ul>
                <li>
                    Clinical data preprocessing, transformation and analysis
                    for structured pharmacological information.
                </li>

                <li>
                    Develop and validate LLM-based pipelines for automated
                    information extraction and model evaluation.
                </li>

                <li>
                    Design data visualizations and dashboards for analytical
                    and pharmacokinetic insights.
                </li>
            </ul>
        </section>


        <section class="job">
            <h3>Mechanical Engineer</h3>

            <p class="meta">
                07/2015 – 11/2019
            </p>


            <p>
                <strong>
                    Ingeniörsfirma Bågenfelt & Hellström AB
                </strong>
                · 03/2019 – 11/2019, Internship
            </p>

            <ul>
                <li>
                    Measured customer products/parts and created
                    manufacturing-ready 3D models and 2D drawings.
                </li>

                <li>
                    Built and modified CAD models and drawings for mismatched
                    conveyor-system parts.
                </li>
            </ul>


            <p>
                <strong>
                    Beijing Thinking System Technology Co.
                </strong>
                · 07/2016 – 07/2018
            </p>

            <ul>
                <li>
                    Built 3D models for boxed-chocolate and bottled-water
                    production lines and workshop layouts.
                </li>
            </ul>


            <p>
                <strong>
                    China Academy of Machinery Science and Technology
                </strong>
                · 07/2015 – 06/2016
            </p>

            <ul>
                <li>
                    Designed Cartesian robots for industrial production lines
                    including pipe casting and engine cylinder-head grinding.
                </li>

                <li>
                    Collaborated across mechanical design, automation
                    and engineering R&D.
                </li>
            </ul>
        </section>


        <section class="job">
            <h3>Education</h3>

            <p>
                <strong>
                    University of Gothenburg & Chalmers University of Technology
                </strong>
                · M.Sc. Physics, Complex Adaptive Systems
                · 08/2020 – 01/2025
            </p>

            <p>
                Thesis: Computational model for handwritten text detection
                and segmentation in historical Spanish manuscripts at
                Språkbanken Text.
            </p>


            <p>
                <strong>
                    Halmstad University
                </strong>
                · M.Sc. Mechanical Engineering
                · 08/2021 – 06/2022
            </p>

            <p>
                Thesis: 3D-printable quality-control fixtures and cost
                analysis at Gnotec.
            </p>


            <p>
                <strong>
                    Beijing Information Science & Technology University
                </strong>
                · Mechanical Design, Manufacturing and Automation
                · 09/2011 – 06/2015
            </p>

            <p>
                Bachelor thesis: Semi-autonomous scale car with obstacle
                avoidance, tracking/following, image acquisition and Android
                Wi-Fi remote operation.
            </p>
        </section>


        <section class="job">
            <h3>
                Certifications & accomplishments
            </h3>

            <p>
                SFI courses C & D (2018–2020)
                · Engelska 6 (2019)
                · Yrkessvenska inom ingenjör (2025)
            </p>
        </section>
    `,


    sv: `
        <section class="job">
            <h3>Professionell profil</h3>

            <ul>
                <li>
                    Yrkeserfarenhet inom mekanisk konstruktion i
                    tvärdisciplinära team och nära kundsamarbete,
                    inklusive automatiserade gjutproduktionslinjer.
                </li>

                <li>
                    Starka kunskaper inom lättviktskonstruktion, FEM samt
                    framtagning av detaljerade 2D-ritningar och
                    3D-CAD-modeller.
                </li>

                <li>
                    Stort intresse för tillverkning och produktutveckling,
                    med praktisk erfarenhet av 3D-printning,
                    CNC-bearbetning och montage på plats.
                </li>
            </ul>
        </section>


        <section class="job">
            <h3>
                Lunds universitet — Forskningsingenjör (praktik)
            </h3>

            <p class="meta">
                09/2025 – 03/2026
            </p>

            <ul>
                <li>
                    Förbehandling, transformation och analys av kliniska data
                    för att extrahera strukturerad farmakologisk information.
                </li>

                <li>
                    Utveckling och validering av LLM-baserade pipelines
                    för automatisk informationsextraktion och
                    modellutvärdering.
                </li>

                <li>
                    Visualiseringar och dashboards för analysresultat
                    och farmakokinetiska insikter.
                </li>
            </ul>
        </section>


        <section class="job">
            <h3>Maskiningenjör</h3>

            <p class="meta">
                07/2015 – 11/2019
            </p>


            <p>
                <strong>
                    Ingeniörsfirma Bågenfelt & Hellström AB
                </strong>
                · 03/2019 – 11/2019, praktik
            </p>

            <ul>
                <li>
                    Mätte kundprodukter och komponenter och tog fram
                    tillverkningsunderlag i 3D och 2D.
                </li>

                <li>
                    Byggde och modifierade CAD-modeller och ritningar
                    för komponenter i transportörsystem.
                </li>
            </ul>


            <p>
                <strong>
                    Beijing Thinking System Technology Co.
                </strong>
                · 07/2016 – 07/2018
            </p>

            <ul>
                <li>
                    Byggde 3D-modeller för produktionslinjer för
                    chokladaskar och flaskvatten samt verkstadslayouter.
                </li>
            </ul>


            <p>
                <strong>
                    China Academy of Machinery Science and Technology
                </strong>
                · 07/2015 – 06/2016
            </p>

            <ul>
                <li>
                    Konstruerade kartesiska robotar för industriella
                    produktionslinjer, bland annat rörgjutning och
                    slipning av motorcylinderhuvuden.
                </li>

                <li>
                    Samarbetade inom mekanisk konstruktion,
                    automation och teknisk FoU.
                </li>
            </ul>
        </section>


        <section class="job">
            <h3>Utbildning</h3>

            <p>
                <strong>
                    Göteborgs universitet & Chalmers tekniska högskola
                </strong>
                · M.Sc. fysik, Complex Adaptive Systems
                · 08/2020 – 01/2025
            </p>

            <p>
                Examensarbete: Beräkningsmodell för detektion och
                segmentering av handskriven text i historiska spanska
                manuskript vid Språkbanken Text.
            </p>


            <p>
                <strong>
                    Högskolan i Halmstad
                </strong>
                · M.Sc. maskinteknik
                · 08/2021 – 06/2022
            </p>

            <p>
                Examensarbete: 3D-utskrivbara kvalitetskontrollfixturer
                och kostnadsanalys på Gnotec.
            </p>


            <p>
                <strong>
                    Beijing Information Science & Technology University
                </strong>
                · Mekanisk konstruktion, tillverkning och automation
                · 09/2011 – 06/2015
            </p>

            <p>
                Kandidatarbete: Halvautonom modellbil med hinderundvikande,
                spårning/följning, bildinsamling och fjärrstyrning via
                Android och Wi-Fi.
            </p>
        </section>


        <section class="job">
            <h3>Certifikat & meriter</h3>

            <p>
                SFI kurs C & D (2018–2020)
                · Engelska 6 (2019)                
                · Yrkessvenska inom ingenjör (2025)
            </p>
        </section>
    `
};


/* =========================================================
   APPLICATION STATE
========================================================= */

let lang = "en";


/* =========================================================
   DOM ELEMENTS
========================================================= */

const grid = document.querySelector("#grid");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#mimg");
const modalTitle = document.querySelector("#mtitle");
const modalDescription = document.querySelector("#mdesc");
const closeButton = document.querySelector("#close");
const languageButton = document.querySelector("#lang");
const cvContent = document.querySelector("#cvcontent");


/* =========================================================
   PROJECT RENDERING
========================================================= */

function renderProjects() {
    grid.innerHTML = projects
        .map((project, index) => {
            const title = project.title[lang];
            const description = project.description[lang];

            return `
                <article
                    class="card"
                    data-project="${index}"
                    tabindex="0"
                    role="button"
                    aria-label="${title}"
                >
                    <img
                        src="assets/${project.image}"
                        alt="${title}"
                    >

                    <div>
                        <h3>
                            ${title}
                        </h3>

                        <p>
                            ${description}
                        </p>
                    </div>
                </article>
            `;
        })
        .join("");


    document
        .querySelectorAll(".card")
        .forEach((card) => {
            const openCard = () => {
                const projectIndex = Number(card.dataset.project);
                openProject(projectIndex);
            };

            card.addEventListener("click", openCard);

            card.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openCard();
                }
            });
        });
}


/* =========================================================
   PROJECT MODAL
========================================================= */

function openProject(index) {
    const project = projects[index];

    modalImage.src = `assets/${project.image}`;
    modalImage.alt = project.title[lang];

    modalTitle.textContent = project.title[lang];
    modalDescription.textContent = project.description[lang];

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    closeButton.focus();
}


function closeProject() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}


/* =========================================================
   LANGUAGE / PAGE RENDERING
========================================================= */

function render() {
    /* Update HTML language */
    document.documentElement.lang = lang;


    /* Update translated interface text */
    document
        .querySelectorAll("[data-i]")
        .forEach((element) => {
            const key = element.dataset.i;

            if (data[lang][key]) {
                element.textContent = data[lang][key];
            }
        });


    /* Update CV */
    cvContent.innerHTML = cv[lang];


    /* Update language switch button */
    languageButton.textContent =
        lang === "en"
            ? "SV"
            : "EN";


    /* Re-render translated project cards */
    renderProjects();
}


/* =========================================================
   EVENT LISTENERS
========================================================= */

/* Close modal using close button */
closeButton.addEventListener(
    "click",
    closeProject
);


/* Close modal by clicking outside its content */
modal.addEventListener(
    "click",
    (event) => {
        if (event.target === modal) {
            closeProject();
        }
    }
);


/* Close modal using Escape key */
document.addEventListener(
    "keydown",
    (event) => {
        if (
            event.key === "Escape" &&
            modal.classList.contains("open")
        ) {
            closeProject();
        }
    }
);


/* Switch between English and Swedish */
languageButton.addEventListener(
    "click",
    () => {
        lang =
            lang === "en"
                ? "sv"
                : "en";

        render();
    }
);


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

render();
