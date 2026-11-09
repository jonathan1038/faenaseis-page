// Imágenes generadas e inyectadas como constantes para uso dinámico en tarjetas y galería
    const ASSETS = {
      logo: "user_uploaded_files/ttl=63d/tool_generated/logo_opt.png",
      heroCongreso: "assets/img/hero_congreso.jpg",
      mesaAcuerdo: "assets/img/mesa_acuerdo.jpg",
      campusIes: "assets/img/campus_ies.jpg"
    };

    // Sanitizador contra XSS (Parámetro de seguridad esencial de la skill high-impact-web-dev)
    function escapeHTML(str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    // CONFIGURACIÓN CENTRAL DESACOPLADA (Fácil edición sin tocar el código de los componentes)
    const INITIAL_SITE_CONFIG = {
      sigla: "FENASIES",
      fullName: "Federación Nacional de Organizaciones Sindicales de Instituciones de Educación Superior",
      heroBadge: "Mesa Sectorial Nacional de Educación Superior • Colombia",
      heroTitle: "Unidad, Autonomía y Dignidad Laboral en la Educación Superior de Colombia",
      heroSubtitle: "Articulamos a las organizaciones sindicales de trabajadores administrativos y docentes de las Instituciones de Educación Superior públicas y privadas para defender el trabajo decente, la financiación estatal y la democracia universitaria.",
      solemnQuote: "“FENASIES nace como respuesta a una necesidad histórica del sector sindical universitario: recuperar la credibilidad, autonomía y representatividad de los trabajadores en las instituciones de educación superior, con visión estratégica de largo plazo.”",
      stats: {
        unions: "21+ Sindicatos",
        universities: "16+ IES Articuladas",
        workers: "18.500+ Trabajadores",
        agreements: "5 Ejes Pactados"
      },
      tickerText: "${escapeHTML(siteConfig.tickerText)}",
      bentoSlides: [
        {
          badge: "EN VIVO • CONGRESO NACIONAL SINDICAL",
          badgeBg: "#F0B010",
          badgeFg: "#0A2E5C",
          title: "Unidad, Autonomía y Dignidad Laboral en la Educación Superior de Colombia",
          highlight: "FENASIES • 21+ SINDICATOS FILIALES",
          subtitle: "Articulamos a las organizaciones sindicales de trabajadores administrativos y docentes de las Instituciones de Educación Superior públicas y privadas.",
          metricNum: "18.500+",
          metricLabel: "Trabajadores Representados",
          ctaPrimary: "Conoce Nuestra Lucha",
          ctaPrimaryTab: "objetivos",
          ctaSecondary: "1er Congreso Nacional",
          ctaSecondaryTab: "noticias",
          bgKey: "heroCongreso",
          tint: "from-[#0A2E5C]/95 via-[#1050A0]/85 to-[#0A2E5C]/90",
          rightTag: "CAMPUS EN RED • COBERTURA NACIONAL",
          rightStat: "21 Sindicatos Afiliados",
          rightCaption: "Transformando las condiciones laborales en 16 IES públicas y privadas de Colombia",
          rightBgKey: "campusIes"
        },
        {
          badge: "LOGRO HISTÓRICO • MESA SECTORIAL MEN",
          badgeBg: "#00A8E6",
          badgeFg: "#FFFFFF",
          title: "Acuerdo Nacional de Formalización y Reforma al Decreto 1279",
          highlight: "5 EJES PACTADOS CON EL GOBIERNO NACIONAL",
          subtitle: "Instalación de la Comisión de Financiamiento de las IES, ampliación de plantas de personal, vivienda y equidad de género.",
          metricNum: "100%",
          metricLabel: "Pliego Sectorial Radicado",
          ctaPrimary: "Descargar Acta Firmada",
          ctaPrimaryTab: "documentacion",
          ctaSecondary: "Ver Avances por IES",
          ctaSecondaryTab: "noticias",
          bgKey: "mesaAcuerdo",
          tint: "from-[#1050A0]/95 via-[#0A2E5C]/85 to-[#061B38]/90",
          rightTag: "AGENDA SINDICAL • 18 DE NOVIEMBRE",
          rightStat: "Plenaria de Presidentes",
          rightCaption: "Seguimiento nacional a los planes de formalización laboral y carrera administrativa",
          rightBgKey: "mesaAcuerdo"
        },
        {
          badge: "DEFENSA PÚBLICA • SUE Y ASCUN",
          badgeBg: "#E03040",
          badgeFg: "#FFFFFF",
          title: "Autonomía Universitaria, Carrera Administrativa y Financiación Estatal",
          highlight: "PRESENCIA EN UIS, UDEA, UNIPAMPLONA Y MÁS",
          subtitle: "Diálogo estratégico con rectorías y Ministerio del Trabajo para garantizar estabilidad y bienestar universitario.",
          metricNum: "16+ IES",
          metricLabel: "Universidades en Red",
          ctaPrimary: "Explorar Archivo Multimedia",
          ctaPrimaryTab: "multimedia",
          ctaSecondary: "Repositorio Normativo",
          ctaSecondaryTab: "documentacion",
          bgKey: "campusIes",
          tint: "from-[#5F162A]/95 via-[#0A2E5C]/85 to-[#1050A0]/90",
          rightTag: "ESCUELA SINDICAL • 27 DE NOVIEMBRE",
          rightStat: "Foro Reforma Ley 30",
          rightCaption: "Encuentro multiestamentario por la base presupuestal de las universidades públicas",
          rightBgKey: "heroCongreso"
        }
      ],
      news: [
        {
          id: "not-1",
          title: "FENASIES consolida acuerdos históricos en la Mesa Sectorial de Educación Superior con el MEN",
          category: "Negociación Colectiva",
          date: "Marzo 2026",
          location: "Bogotá D.C.",
          featured: true,
          image: ASSETS.mesaAcuerdo,
          summary: "Con participación activa en la negociación nacional sindical, se pactó el seguimiento a los planes de formalización laboral, el ajuste al punto docente (Decreto 1279) y la instalación de la Comisión de Financiamiento de las IES.",
          content: "En el escenario sectorial nacional del sector educación, FENASIES participó activamente a través de su representación en la mesa negociadora ante el Ministerio de Educación Nacional. Entre los avances logrados destacan: 1) Seguimiento estricto a los planes de formalización laboral administrativa y docente; 2) Revisión y ajuste al punto docente y reforma del Decreto 1279; 3) Instalación de la Comisión de Financiamiento de la Educación Superior; 4) Protocolos vinculantes contra la violencia basada en género en los campus; y 5) Acceso a líneas de crédito de vivienda para trabajadores del sector.",
          sourceUrl: "https://www.unipamplona.edu.co/unipamplona/portalIG/home_269/recursos/2025/03072025/negociacion_nacional_educacion.jsp"
        },
        {
          id: "not-2",
          title: "Encuentro Nacional de Organizaciones Filiales de FENASIES fortalece pliego multiestamentario",
          category: "Encuentro Nacional",
          date: "Marzo 2026",
          location: "Pamplona / Bucaramanga",
          featured: false,
          image: ASSETS.heroCongreso,
          summary: "Delegaciones sindicales de universidades públicas y privadas del país definieron la hoja de ruta para la vigilancia de los acuerdos colectivos y la reforma integral al financiamiento universitario.",
          content: "Con la presencia de delegados de SINTRAEUP, SINDISER y una veintena de sindicatos de Instituciones de Educación Superior, el Encuentro Nacional permitió unificar criterios jurídicos y técnicos frente a la carrera administrativa universitaria, el bienestar laboral y la articulación propositiva con el Sistema Universitario Estatal (SUE) y ASCUN.",
          sourceUrl: "https://www.unipamplona.edu.co/unipamplona/portalIG/home_269/recursos/2026/03032026/encuentro_nacional_fenasies.jsp"
        },
        {
          id: "not-3",
          title: "Sindicatos administrativos y docentes consolidan la federación referente de la Educación Superior",
          category: "Comunicado Oficial",
          date: "Febrero 2026",
          location: "Nacional",
          featured: false,
          image: ASSETS.campusIes,
          summary: "Respaldada en encuentros realizados en la UIS, Universidad de Antioquia, Universidad de Pamplona y Bogotá, FENASIES cuenta con registro legal ante el Ministerio del Trabajo.",
          content: "FENASIES agrupa inicialmente a más de 21 organizaciones sindicales pertenecientes a Instituciones de Educación Superior públicas y privadas de toda Colombia. Su propósito es promover un sindicalismo moderno, autónomo, transparente y propositivo que supere viejas prácticas clientelistas y defienda la viabilidad institucional junto con las condiciones dignas de sus trabajadores.",
          sourceUrl: "https://www.universidad.edu.co/sindicatos-de-trabajadores-y-docentes-de-ies-de-todo-el-sector-crean-el-fecode-de-la-educacion-superior/"
        },
        {
          id: "not-4",
          title: "Instalación de la Comisión Técnica para la Reforma del Decreto 1279 y Formalización Laboral",
          category: "Defensa IES",
          date: "Abril 2026",
          location: "Bogotá D.C.",
          featured: false,
          image: ASSETS.mesaAcuerdo,
          summary: "Equipos técnicos de FENASIES presentan estudio comparativo sobre plantas de personal, tercerización y dignificación salarial en las universidades estatales.",
          content: "El equipo económico y jurídico de la Federación radicó las propuestas técnicas para garantizar la ampliación de plantas de personal administrativo y docente de carrera, eliminando formas de contratación precaria y asegurando recursos permanentes desde el Presupuesto General de la Nación.",
          sourceUrl: "https://www.universidad.edu.co/tag/fenasies/"
        }
      ],
      events: [
        {
          id: "ev-1",
          day: "18",
          month: "NOV",
          title: "Plenaria Nacional de Presidentes y Negociadores Sindicales de IES",
          time: "09:00 AM - 05:00 PM",
          modality: "Híbrido • Bogotá D.C. & Transmisión Virtual",
          category: "Asamblea Federal"
        },
        {
          id: "ev-2",
          day: "27",
          month: "NOV",
          title: "Foro Nacional: Financiación de la Educación Superior Pública y Reforma Ley 30",
          time: "02:30 PM - 06:30 PM",
          modality: "Auditorio Central UIS / Canal Multimedia FENASIES",
          category: "Foro Académico-Sindical"
        },
        {
          id: "ev-3",
          day: "05",
          month: "DIC",
          title: "Taller Nacional de Derechos de Carrera Administrativa y Evaluación del Desempeño en IES",
          time: "08:30 AM - 01:00 PM",
          modality: "Campus Universidad de Antioquia • Medellín",
          category: "Escuela Sindical"
        }
      ],
      objectives: [
        {
          code: "EJE 01",
          title: "Dignificación y Formalización Laboral en las IES",
          description: "Erradicar la tercerización y la provisionalidad prolongada mediante planes vinculantes de formalización para trabajadores administrativos y profesores universitarios.",
          metric: "Meta: 100% de mesas de seguimiento activas en IES filiales",
          color: "#1050A0"
        },
        {
          code: "EJE 02",
          title: "Negociación Colectiva Sectorial de Alto Nivel",
          description: "Representar con rigor técnico y autonomía a los trabajadores de la educación superior en los pliegos nacionales ante el Ministerio de Educación y el Ministerio del Trabajo.",
          metric: "Logro: Participación directa en el Acuerdo Nacional Sectorial",
          color: "#E03040"
        },
        {
          code: "EJE 03",
          title: "Defensa del Financiamiento Estatal y Autonomía Universitaria",
          description: "Impulsar con el SUE, ASCUN y el Gobierno Nacional una política de financiación estructural que garantice la sostenibilidad de las universidades públicas y privadas.",
          metric: "Comisión Nacional de Financiamiento instalada",
          color: "#F0B010"
        },
        {
          code: "EJE 04",
          title: "Transparencia, Democracia Sindical y Enfoque de Género",
          description: "Renovar las prácticas gremiales con ética, rendición de cuentas, nuevos liderazgos y protocolos efectivos contra toda forma de violencia o acoso laboral y de género.",
          metric: "Protocolos de equidad y bienestar universitario",
          color: "#00A8E6"
        }
      ],
      documents: [
        {
          id: "doc-1",
          code: "EST-001",
          title: "Estatutos Oficiales y Acta de Constitución de FENASIES Colombia",
          type: "Estatutos",
          date: "2025-02-26",
          size: "1.4 MB • PDF",
          summary: "Documento fundacional depositado ante el Ministerio del Trabajo que establece los órganos de dirección, afiliación de sindicatos de IES y principios democráticos de la Federación."
        },
        {
          id: "doc-2",
          code: "ACU-014",
          title: "Acta de Acuerdo Nacional Mesa Sectorial de Educación Superior (MEN - Sindicatos)",
          type: "Acuerdos Colectivos",
          date: "2025-03-07",
          size: "2.1 MB • PDF",
          summary: "Compromisos firmados con el Ministerio de Educación Nacional sobre formalización laboral, revisión del Decreto 1279, comisión de financiación, vivienda y equidad de género."
        },
        {
          id: "doc-3",
          code: "MAN-001",
          title: "Manual de Imagen Institucional FENASIES Vol. 1 (Imagotipo, Paleta y Tipografías)",
          type: "Normatividad",
          date: "2026-01-15",
          size: "3.8 MB • PDF",
          summary: "Lineamientos oficiales de identidad visual: uso correcto del escudo, imagotipos, paleta expandida de 8 colores (Amarillo Oro a Rojo Sindical) y familias Montserrat, Source Sans Pro y Source Serif Pro."
        },
        {
          id: "doc-4",
          code: "CIR-028",
          title: "Circular Nacional No. 028: Lineamientos para Pliegos Internos en Universidades",
          type: "Circulares",
          date: "2026-08-19",
          size: "680 KB • PDF",
          summary: "Guía jurídica y técnica para las juntas directivas de los sindicatos filiales en la preparación y radicación de solicitudes respetuosas y acuerdos colectivos."
        },
        {
          id: "doc-5",
          code: "JUR-009",
          title: "Concepto Técnico sobre Carrera Administrativa Especial en Entes Universitarios Autónomos",
          type: "Jurídico",
          date: "2026-06-10",
          size: "1.2 MB • PDF",
          summary: "Análisis constitucional sobre el artículo 69 de la Carta Política, sistemas propios de carrera administrativa y garantías de estabilidad laboral reforzada."
        },
        {
          id: "doc-6",
          code: "FOR-002",
          title: "Formulario Único de Afiliación de Organizaciones Sindicales de Primer Grado a FENASIES",
          type: "Formatos",
          date: "2026-09-01",
          size: "420 KB • PDF",
          summary: "Requisitos estatutarios y modelo de acta de asamblea general para sindicatos de trabajadores y docentes de IES que solicitan su ingreso a la Federación."
        }
      ],
      multimedia: [
        {
          id: "med-1",
          title: "Consolidación de la Federación FENASIES con más de 20 Universidades de Colombia",
          type: "Video",
          duration: "14:28 min",
          date: "Septiembre 2025",
          thumbnail: ASSETS.heroCongreso,
          description: "Entrevista y reportaje documental en el canal de la Escuela Nacional Sindical sobre el origen, visión renovadora y articulación nacional de FENASIES y SINDISER.",
          externalUrl: "https://www.youtube.com/watch?v=cDOViEqc24A"
        },
        {
          id: "med-2",
          title: "Galería Fotográfica: Firma del Acuerdo Nacional Sectorial en el Ministerio de Educación",
          type: "Fotografía",
          duration: "18 Fotografías HD",
          date: "Marzo 2025",
          thumbnail: ASSETS.mesaAcuerdo,
          description: "Registro visual de la delegación negociadora de FENASIES durante la suscripción de los acuerdos para el fortalecimiento laboral de las Instituciones de Educación Superior.",
          externalUrl: "https://www.unipamplona.edu.co/unipamplona/portalIG/home_269/recursos/2025/03072025/negociacion_nacional_educacion.jsp"
        },
        {
          id: "med-3",
          title: "Encuentro Nacional de Delegados Sindicales en Campus Universitarios (UIS, UdeA, Unipamplona)",
          type: "Fotografía",
          duration: "24 Fotografías HD",
          date: "Marzo 2026",
          thumbnail: ASSETS.campusIes,
          description: "Recorrido fotográfico por las asambleas regionales y mesas multiestamentarias que dieron origen a la agenda legislativa y laboral de la Federación.",
          externalUrl: "https://www.unipamplona.edu.co/unipamplona/portalIG/home_269/recursos/2026/03032026/encuentro_nacional_fenasies.jsp"
        },
        {
          id: "med-4",
          title: "Podcast Voz Universitaria Ep. 12: Claves de la Reforma al Decreto 1279 y Formalización Administrativa",
          type: "Audio / Podcast",
          duration: "28:15 min",
          date: "Octubre 2026",
          thumbnail: ASSETS.mesaAcuerdo,
          description: "Análisis pedagógico de la Comisión Académica y Laboral de FENASIES sobre el impacto salarial y prestacional de los acuerdos nacionales.",
          externalUrl: "https://www.universidad.edu.co/tag/fenasies/"
        }
      ]
    };

    // Estado reactivo en memoria
    let siteConfig = JSON.parse(JSON.stringify(INITIAL_SITE_CONFIG));
    let currentProposal = "vanguardia"; // 'editorial' | 'vanguardia' | 'bento'
    let currentTab = "noticias"; // 'noticias' | 'objetivos' | 'documentacion' | 'multimedia'
    let newsFilter = "Todas";
    let newsSearchQuery = "";
    let docFilter = "Todos";
    let docSearchQuery = "";
    let mediaFilter = "Todos";

    const PROPOSAL_DESCRIPTIONS = {
      editorial: "<strong>Propuesta 1 — Editorial Institucional Cálida:</strong> Basada en el fondo oficial <em>Crema Solar (#FFF8E1)</em>, tipografía solemne <em>Source Serif Pro</em> para comunicados y jerarquía periodística clásica.",
      vanguardia: "<strong>Propuesta 2 — Vanguardia Sindical Dark:</strong> Inspirada en <em>Linear y Vercel</em> usando el <em>Azul Profundo (#0A2E5C)</em> con contrastes en <em>Amarillo Oro (#F0B010)</em> y <em>Azul Cian (#00A8E6)</em> de alto impacto.",
      bento: "<strong>Propuesta 3 — Bento Modular Dinámico:</strong> Inspirada en <em>Apple y Awwwards</em>, organiza noticias, métricas, objetivos y documentos en una retícula modular limpia y altamente visual."
    };

    function showToast(msg) {
      const toast = document.getElementById("toast-notification");
      const text = document.getElementById("toast-message");
      text.textContent = msg;
      toast.classList.remove("hidden");
      clearTimeout(window._toastTimer);
      window._toastTimer = setTimeout(() => {
        toast.classList.add("hidden");
      }, 3200);
    }

    // Renderizar el Hero según la Alternativa de Interfaz seleccionada (1, 2 o 3)
    function renderHero() {
      const container = document.getElementById("hero-container");
      document.getElementById("header-sigla").textContent = siteConfig.sigla;
      document.getElementById("header-fullname").textContent = siteConfig.fullName;
      document.getElementById("badge-noticias-count").textContent = siteConfig.news.length;
      document.getElementById("badge-docs-count").textContent = siteConfig.documents.length;

      if (currentProposal === "editorial") {
        // PROPUESTA 1: EDITORIAL CÁLIDA (Crema Solar, doble columna periodística con cita solemne en Source Serif Pro)
        container.innerHTML = `
          <div class="theme-card p-6 sm:p-10 relative overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-7 space-y-5">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading font-bold bg-[#1050A0]/10 text-[#1050A0] border border-[#1050A0]/20">
                  <span class="w-2 h-2 rounded-full bg-[#E03040]"></span>
                  <span>${escapeHTML(siteConfig.heroBadge)}</span>
                </div>
                <h1 id="main-hero-heading" class="font-heading font-black text-2xl sm:text-4xl lg:text-[40px] leading-[1.15] text-[#0A2E5C]">
                  ${escapeHTML(siteConfig.heroTitle)}
                </h1>
                <p class="text-base sm:text-lg text-theme-secondary leading-relaxed">
                  ${escapeHTML(siteConfig.heroSubtitle)}
                </p>
                <blockquote class="p-4 rounded-xl border-l-4 border-[#E03040] bg-[#FFF8E1]/80 font-serif-solemn italic text-sm sm:text-base text-[#0A2E5C]">
                  ${escapeHTML(siteConfig.solemnQuote)}
                </blockquote>
                <div class="flex flex-wrap items-center gap-3 pt-2">
                  <button type="button" data-goto-tab="objetivos" class="px-5 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#E03040] text-white hover:opacity-95 shadow-md transition">
                    Conocer Plataforma y Objetivos
                  </button>
                  <button type="button" data-goto-tab="documentacion" class="px-5 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#1050A0] text-white hover:opacity-95 transition">
                    Consultar Acuerdos y Estatutos
                  </button>
                </div>
              </div>
              <div class="lg:col-span-5 space-y-4">
                <div class="relative rounded-2xl overflow-hidden border-2 border-[#F0B010] shadow-xl">
                  <img src="${ASSETS.heroCongreso}" width="640" height="360" alt="Plenaria nacional de delegados sindicales de FENASIES" class="w-full h-64 sm:h-72 object-cover">
                  <div class="p-4 bg-gradient-to-t from-[#0A2E5C] via-[#0A2E5C]/90 to-transparent text-white">
                    <span class="text-[11px] font-heading font-bold uppercase tracking-wider text-[#FFD147]">Cobertura Nacional</span>
                    <p class="font-heading font-bold text-sm mt-0.5">Articulación democrática con el SUE, ASCUN y el Ministerio de Educación Nacional</p>
                  </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5">
                  <div class="p-3 rounded-xl theme-elevated text-center">
                    <div class="font-heading font-black text-lg text-[#1050A0]">${escapeHTML(siteConfig.stats.unions)}</div>
                    <div class="text-[11px] font-semibold text-theme-muted">Organizaciones de Base</div>
                  </div>
                  <div class="p-3 rounded-xl theme-elevated text-center">
                    <div class="font-heading font-black text-lg text-[#E03040]">${escapeHTML(siteConfig.stats.universities)}</div>
                    <div class="text-[11px] font-semibold text-theme-muted">Públicas y Privadas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      } else if (currentProposal === "vanguardia") {
        // PROPUESTA 2 DEFINITIVA: VANGUARDIA SINDICAL DARK MODE CON BANNERS DINÁMICOS
        const heroSlides = siteConfig.bentoSlides.map(sl => ({
          ...sl,
          bgImage: ASSETS[sl.bgKey] || ASSETS.heroCongreso,
          rightImage: ASSETS[sl.rightBgKey] || ASSETS.campusIes
        }));
        window._bentoSlideIdx = (typeof window._bentoSlideIdx === "number") ? window._bentoSlideIdx % heroSlides.length : 0;
        const activeSlide = heroSlides[window._bentoSlideIdx];

        container.innerHTML = `
          <!-- Cinta Dinámica de Boletín en Vivo -->
          <div class="mb-4 rounded-xl overflow-hidden bg-[#061B38] text-[#FFF8E1] border border-[#00A8E6]/30 flex items-center shadow-lg">
            <div class="px-3.5 py-2 bg-[#E03040] text-white font-heading font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 flex-shrink-0">
              <span class="w-2 h-2 rounded-full bg-[#FFD147] animate-ping"></span>
              <span>Boletín en Vivo</span>
            </div>
            <div class="px-4 py-2 text-xs font-heading font-semibold text-[#FFD147] truncate">
              ${escapeHTML(siteConfig.tickerText)}
            </div>
          </div>

          <div class="rounded-2xl p-6 sm:p-10 relative overflow-hidden border border-[#00A8E6]/30 bg-gradient-to-br from-[#0A2E5C] via-[#061B38] to-[#1050A0] text-[#FFF8E1] shadow-2xl">
            <img src="${activeSlide.bgImage}" width="1200" height="540" alt="Banner institucional FENASIES" class="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity transition-all duration-700">
            <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-8 space-y-5">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-heading font-bold bg-[#00A8E6]/20 text-[#FFD147] border border-[#00A8E6]/40">
                    <span class="w-2 h-2 rounded-full bg-[#F0B010] animate-pulse"></span>
                    <span>${escapeHTML(activeSlide.badge || siteConfig.heroBadge)}</span>
                  </div>
                  <span class="px-3 py-1 rounded-full text-xs font-heading font-bold bg-[#061B38]/90 text-[#00A8E6] border border-[#00A8E6]/40">
                    BANNER ${window._bentoSlideIdx + 1}/${heroSlides.length}
                  </span>
                </div>

                <h1 id="main-hero-heading" class="font-heading font-black text-2xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-white">
                  ${escapeHTML(activeSlide.title || siteConfig.heroTitle)}
                </h1>
                <div class="font-heading font-extrabold text-sm sm:text-base text-[#FFD147]">
                  ${escapeHTML(activeSlide.highlight)}
                </div>
                <p class="text-base sm:text-lg text-[#D9E2EC] max-w-3xl leading-relaxed">
                  ${escapeHTML(activeSlide.subtitle || siteConfig.heroSubtitle)}
                </p>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div class="p-3.5 rounded-xl bg-[#061B38]/75 border border-white/15 backdrop-blur-sm">
                    <div class="font-heading font-black text-xl text-[#FFD147]">${escapeHTML(siteConfig.stats.unions)}</div>
                    <div class="text-xs text-white/75">Filiales Sindicales</div>
                  </div>
                  <div class="p-3.5 rounded-xl bg-[#061B38]/75 border border-white/15 backdrop-blur-sm">
                    <div class="font-heading font-black text-xl text-[#00A8E6]">${escapeHTML(siteConfig.stats.universities)}</div>
                    <div class="text-xs text-white/75">Presencia en Campus</div>
                  </div>
                  <div class="p-3.5 rounded-xl bg-[#061B38]/75 border border-white/15 backdrop-blur-sm">
                    <div class="font-heading font-black text-xl text-[#F0B010]">${escapeHTML(siteConfig.stats.workers)}</div>
                    <div class="text-xs text-white/75">Base Representada</div>
                  </div>
                  <div class="p-3.5 rounded-xl bg-[#061B38]/75 border border-white/15 backdrop-blur-sm">
                    <div class="font-heading font-black text-xl text-[#E03040]">${escapeHTML(siteConfig.stats.agreements)}</div>
                    <div class="text-xs text-white/75">Mesa Nacional MEN</div>
                  </div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-4 pt-3">
                  <div class="flex flex-wrap items-center gap-3">
                    <button type="button" data-goto-tab="${activeSlide.ctaPrimaryTab || 'documentacion'}" class="px-5 py-3 rounded-lg font-heading font-extrabold text-xs sm:text-sm bg-[#F0B010] text-[#0A2E5C] hover:bg-[#FFD147] shadow-lg transition">
                      ${escapeHTML(activeSlide.ctaPrimary || 'Descargar Pliego y Acuerdos')}
                    </button>
                    <button type="button" data-goto-tab="${activeSlide.ctaSecondaryTab || 'multimedia'}" class="px-5 py-3 rounded-lg font-heading font-bold text-xs sm:text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
                      ${escapeHTML(activeSlide.ctaSecondary || 'Explorar Archivo Multimedia')}
                    </button>
                  </div>

                  <!-- Controles del Banner Dinámico -->
                  <div class="flex items-center gap-3">
                    <div class="flex items-center gap-1.5">
                      ${heroSlides.map((_, idx) => `
                        <button type="button" data-bento-slide="${idx}" aria-label="Ir al banner ${idx + 1}" class="h-2 rounded-full transition-all ${idx === window._bentoSlideIdx ? 'w-10 bg-[#F0B010]' : 'w-5 bg-white/30 hover:bg-white/60'}"></button>
                      `).join('')}
                    </div>
                    <div class="flex items-center gap-1.5">
                      <button type="button" id="btn-bento-prev" aria-label="Banner anterior" class="w-8 h-8 rounded-full bg-[#061B38]/80 border border-white/30 text-white flex items-center justify-center hover:bg-white/20 transition">‹</button>
                      <button type="button" id="btn-bento-next" aria-label="Siguiente banner" class="w-8 h-8 rounded-full bg-[#F0B010] text-[#0A2E5C] font-bold flex items-center justify-center hover:bg-[#FFD147] transition">›</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-[#061B38]/80 border border-[#F0B010]/30 backdrop-blur-sm shadow-xl">
                <img src="${ASSETS.logo}" width="120" height="120" alt="Escudo Oficial FENASIES" class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FFF8E1] p-1 shadow-xl mb-4">
                <p class="font-serif-solemn italic text-sm text-[#FFF8E1]/95 leading-relaxed">
                  ${escapeHTML(siteConfig.solemnQuote)}
                </p>
                <span class="mt-3 text-[11px] font-heading font-bold uppercase tracking-widest text-[#00A8E6]">Junta Directiva Nacional</span>
                <div class="mt-4 pt-3 border-t border-white/10 w-full flex items-center justify-between text-xs">
                  <span class="text-[#FFD147] font-heading font-bold">${escapeHTML(activeSlide.rightStat)}</span>
                  <span class="text-white/75 truncate max-w-[180px]">${escapeHTML(activeSlide.rightTag)}</span>
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        // PROPUESTA 3: BENTO MODULAR CON BANNERS DINÁMICOS (Carrusel en vivo + Ticker + Tarjetas Bento)
        const heroSlides = siteConfig.bentoSlides.map(sl => ({
          ...sl,
          bgImage: ASSETS[sl.bgKey] || ASSETS.heroCongreso,
          rightImage: ASSETS[sl.rightBgKey] || ASSETS.campusIes
        }));

        window._bentoSlideIdx = (typeof window._bentoSlideIdx === "number") ? window._bentoSlideIdx % heroSlides.length : 0;
        const activeSlide = heroSlides[window._bentoSlideIdx];

        container.innerHTML = `
          <!-- Cinta Dinámica de Boletín en Vivo -->
          <div class="mb-4 rounded-xl overflow-hidden bg-[#0A2E5C] text-[#FFF8E1] border border-[#00A8E6]/30 flex items-center shadow-md">
            <div class="px-3.5 py-2 bg-[#E03040] text-white font-heading font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 flex-shrink-0">
              <span class="w-2 h-2 rounded-full bg-[#FFD147] animate-ping"></span>
              <span>Boletín en Vivo</span>
            </div>
            <div class="px-4 py-2 text-xs font-heading font-semibold text-[#FFD147] truncate">
              ${escapeHTML(siteConfig.tickerText)}
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <!-- Banner Dinámico Principal Bento (7 cols) -->
            <div class="lg:col-span-7 theme-card relative overflow-hidden min-h-[430px] flex flex-col justify-between p-6 sm:p-8 text-white">
              <img src="${activeSlide.bgImage}" width="680" height="460" alt="Banner dinámico de FENASIES" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-105">
              <div class="absolute inset-0 bg-gradient-to-br ${activeSlide.tint}"></div>

              <div class="relative z-10 space-y-4">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-heading font-extrabold shadow" style="background-color: ${activeSlide.badgeBg}; color: ${activeSlide.badgeFg};">
                    <span class="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                    <span>${escapeHTML(activeSlide.badge)}</span>
                  </span>
                  <span class="px-3 py-1 rounded-full text-xs font-heading font-bold bg-[#061B38]/80 text-[#FFD147] border border-white/20">
                    BANNER ${window._bentoSlideIdx + 1}/${heroSlides.length}
                  </span>
                </div>

                <h1 id="main-hero-heading" class="font-heading font-black text-2xl sm:text-4xl leading-tight tracking-tight">
                  ${escapeHTML(activeSlide.title)}
                </h1>
                <div class="font-heading font-extrabold text-sm sm:text-base text-[#FFD147]">
                  ${escapeHTML(activeSlide.highlight)}
                </div>
                <p class="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
                  ${escapeHTML(activeSlide.subtitle)}
                </p>
              </div>

              <div class="relative z-10 pt-6 mt-6 space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div class="p-3.5 rounded-xl bg-[#061B38]/80 border border-[#00A8E6]/40 backdrop-blur-sm">
                    <div class="font-heading font-black text-2xl text-[#F0B010]">${escapeHTML(activeSlide.metricNum)}</div>
                    <div class="text-xs font-semibold text-white/90">${escapeHTML(activeSlide.metricLabel)}</div>
                  </div>
                  <div class="p-3.5 rounded-xl bg-[#061B38]/80 border border-white/20 backdrop-blur-sm flex flex-col justify-between">
                    <div class="text-[11px] font-heading font-bold uppercase text-[#00A8E6]">Actividad Sindical en Tiempo Real</div>
                    <div class="flex items-end gap-1.5 h-6 mt-1">
                      <span class="w-2 h-4 rounded bg-[#F0B010] animate-pulse"></span>
                      <span class="w-2 h-6 rounded bg-[#00A8E6] animate-pulse"></span>
                      <span class="w-2 h-3 rounded bg-[#00A8E6]"></span>
                      <span class="w-2 h-5 rounded bg-[#F0B010]"></span>
                      <span class="w-2 h-6 rounded bg-[#00A8E6] animate-pulse"></span>
                      <span class="w-2 h-4 rounded bg-[#F0B010]"></span>
                      <span class="w-2 h-5 rounded bg-[#00A8E6]"></span>
                      <span class="w-2 h-3 rounded bg-[#F0B010]"></span>
                    </div>
                  </div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div class="flex flex-wrap items-center gap-2.5">
                    <button type="button" data-goto-tab="${activeSlide.ctaPrimaryTab}" class="px-5 py-2.5 rounded-full font-heading font-bold text-xs sm:text-sm bg-[#E03040] text-white hover:opacity-95 shadow-lg transition">
                      ${escapeHTML(activeSlide.ctaPrimary)} →
                    </button>
                    <button type="button" data-goto-tab="${activeSlide.ctaSecondaryTab}" class="px-5 py-2.5 rounded-full font-heading font-bold text-xs sm:text-sm bg-[#F0B010] text-[#0A2E5C] hover:bg-[#FFD147] shadow transition">
                      ${escapeHTML(activeSlide.ctaSecondary)}
                    </button>
                  </div>

                  <!-- Controles del Banner Dinámico -->
                  <div class="flex items-center gap-3">
                    <div class="flex items-center gap-1.5">
                      ${heroSlides.map((_, idx) => `
                        <button type="button" data-bento-slide="${idx}" aria-label="Ir al banner ${idx + 1}" class="h-2 rounded-full transition-all ${idx === window._bentoSlideIdx ? 'w-12 bg-[#F0B010]' : 'w-6 bg-white/40 hover:bg-white/70'}"></button>
                      `).join('')}
                    </div>
                    <div class="flex items-center gap-1.5">
                      <button type="button" id="btn-bento-prev" aria-label="Banner anterior" class="w-8 h-8 rounded-full bg-[#061B38]/70 border border-white/40 text-white flex items-center justify-center hover:bg-white/20 transition">‹</button>
                      <button type="button" id="btn-bento-next" aria-label="Siguiente banner" class="w-8 h-8 rounded-full bg-[#F0B010] text-[#0A2E5C] font-bold flex items-center justify-center hover:bg-[#FFD147] transition">›</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Columna Derecha Bento (5 cols): Banner Secundario Dinámico + 2 Tarjetas Interactivas -->
            <div class="lg:col-span-5 flex flex-col justify-between gap-4">
              <!-- Banner Secundario Dinámico Superior -->
              <div class="theme-card relative overflow-hidden h-52 p-5 flex flex-col justify-between text-white">
                <img src="${activeSlide.rightImage}" width="500" height="235" alt="${escapeHTML(activeSlide.rightCaption)}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-[#061B38] via-[#061B38]/60 to-transparent"></div>
                <div class="relative z-10 flex items-center justify-between gap-2">
                  <span class="px-3 py-1 rounded-full text-[11px] font-heading font-bold bg-[#0A2E5C]/90 text-white border border-[#00A8E6]/50">
                    ● ${escapeHTML(activeSlide.rightTag)}
                  </span>
                  <span class="px-3 py-1.5 rounded-xl text-xs font-heading font-extrabold bg-[#F0B010] text-[#0A2E5C] shadow">
                    ${escapeHTML(activeSlide.rightStat)}
                  </span>
                </div>
                <div class="relative z-10">
                  <p class="font-heading font-bold text-sm sm:text-base leading-snug text-white">
                    ${escapeHTML(activeSlide.rightCaption)}
                  </p>
                </div>
              </div>

              <!-- 2 Mini Tarjetas Inferiores Bento: Documentación y Archivo Multimedia -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="theme-card p-4 bg-[#FFF8E1] text-[#0A2E5C] border-2 border-[#F0B010]/50 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between">
                      <span class="text-[11px] font-heading font-extrabold text-[#1050A0]">DOCUMENTACIÓN</span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-heading font-extrabold bg-[#F0B010] text-[#0A2E5C]">2026 PDF</span>
                    </div>
                    <h2 class="font-heading font-black text-base mt-1">Estatutos y Acuerdos</h2>
                    <div class="mt-3 space-y-2">
                      <button type="button" data-goto-tab="documentacion" class="w-full p-2 rounded-lg bg-white border border-[#1050A0]/20 hover:border-[#00A8E6] flex items-center gap-2 text-left transition">
                        <span class="px-1.5 py-1 rounded bg-[#E03040] text-white font-heading font-bold text-[10px]">PDF</span>
                        <span class="text-xs font-heading font-bold truncate">Acuerdo Mesa MEN.pdf</span>
                      </button>
                      <button type="button" data-goto-tab="documentacion" class="w-full p-2 rounded-lg bg-white border border-[#1050A0]/20 hover:border-[#00A8E6] flex items-center gap-2 text-left transition">
                        <span class="px-1.5 py-1 rounded bg-[#1050A0] text-white font-heading font-bold text-[10px]">PDF</span>
                        <span class="text-xs font-heading font-bold truncate">Estatutos FENASIES.pdf</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="theme-card p-4 flex flex-col justify-between">
                  <div>
                    <span class="text-[11px] font-heading font-extrabold text-[#E03040]">ARCHIVO MULTIMEDIA</span>
                    <div class="relative mt-2 rounded-xl overflow-hidden h-24 group cursor-pointer" data-goto-tab="multimedia">
                      <img src="${ASSETS.heroCongreso}" width="240" height="110" alt="Video balance negociación" class="w-full h-full object-cover">
                      <div class="absolute inset-0 bg-[#061B38]/60 flex items-center justify-center">
                        <span class="w-9 h-9 rounded-full bg-[#E03040] text-white flex items-center justify-center shadow-lg">▶</span>
                      </div>
                    </div>
                    <button type="button" data-goto-tab="multimedia" class="mt-2.5 text-xs font-heading font-bold text-[#00A8E6] hover:underline">
                      Ver Galería de Eventos en IES →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      // Conectar botones del hero que cambian de pestaña
      container.querySelectorAll("[data-goto-tab]").forEach(btn => {
        btn.addEventListener("click", () => {
          switchTab(btn.getAttribute("data-goto-tab"));
        });
      });

      // Controles del carrusel dinámico en la Propuesta 3 (Bento)
      clearInterval(window._bentoInterval);
      if (currentProposal === "vanguardia" || currentProposal === "bento") {
        const prevBtn = document.getElementById("btn-bento-prev");
        const nextBtn = document.getElementById("btn-bento-next");
        if (prevBtn) {
          prevBtn.addEventListener("click", () => {
            window._bentoSlideIdx = (window._bentoSlideIdx + 2) % 3;
            renderHero();
          });
        }
        if (nextBtn) {
          nextBtn.addEventListener("click", () => {
            window._bentoSlideIdx = (window._bentoSlideIdx + 1) % 3;
            renderHero();
          });
        }
        container.querySelectorAll("[data-bento-slide]").forEach(dot => {
          dot.addEventListener("click", () => {
            window._bentoSlideIdx = parseInt(dot.getAttribute("data-bento-slide"), 10) || 0;
            renderHero();
          });
        });
        window._bentoInterval = setInterval(() => {
          if (currentProposal === "vanguardia" || currentProposal === "bento") {
            window._bentoSlideIdx = ((window._bentoSlideIdx || 0) + 1) % 3;
            renderHero();
          }
        }, 5500);
      }
    }

    // Renderizar la pestaña activa
    function renderActiveTab() {
      const container = document.getElementById("tab-content-container");

      if (currentTab === "noticias") {
        renderNoticiasTab(container);
      } else if (currentTab === "objetivos") {
        renderObjetivosTab(container);
      } else if (currentTab === "documentacion") {
        renderDocumentacionTab(container);
      } else if (currentTab === "multimedia") {
        renderMultimediaTab(container);
      }
    }

    // PESTAÑA 1: NOTICIAS Y EVENTOS
    function renderNoticiasTab(container) {
      const categories = ["Todas", "Negociación Colectiva", "Encuentro Nacional", "Comunicado Oficial", "Defensa IES"];
      const filteredNews = siteConfig.news.filter(item => {
        const matchesCat = newsFilter === "Todas" || item.category === newsFilter;
        const q = newsSearchQuery.trim().toLowerCase();
        const matchesQuery = !q || item.title.toLowerCase().includes(q) || item.summary.toLowerCase().includes(q) || item.location.toLowerCase().includes(q);
        return matchesCat && matchesQuery;
      });

      container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Columna Principal de Noticias (8 cols) -->
          <section aria-labelledby="news-section-heading" class="lg:col-span-8 space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b" style="border-color: var(--border-color);">
              <div>
                <span class="text-xs font-heading font-bold uppercase tracking-wider text-[#E03040]">Actualidad Gremial y Universitaria</span>
                <h2 id="news-section-heading" class="font-heading font-black text-2xl">Noticias y Comunicados Oficiales</h2>
              </div>
              <div class="relative w-full sm:w-64">
                <input type="search" id="input-search-news" value="${escapeHTML(newsSearchQuery)}" placeholder="Buscar noticia o ciudad..." aria-label="Buscar noticias" class="w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm border bg-transparent" style="border-color: var(--border-color);">
                <svg class="w-4 h-4 absolute left-3 top-2.5 text-theme-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
            </div>

            <!-- Filtros por categoría -->
            <div class="flex flex-wrap gap-2" role="group" aria-label="Filtrar noticias por categoría">
              ${categories.map(cat => `
                <button type="button" data-news-cat="${escapeHTML(cat)}" class="px-3 py-1.5 rounded-lg font-heading font-bold text-xs transition ${newsFilter === cat ? 'bg-[#1050A0] text-white shadow' : 'theme-elevated hover:border-[#1050A0]'}">
                  ${escapeHTML(cat)}
                </button>
              `).join('')}
            </div>

            <!-- Listado de tarjetas de noticias -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              ${filteredNews.length === 0 ? `
                <div class="md:col-span-2 theme-card p-8 text-center">
                  <p class="font-heading font-bold text-base">No se encontraron noticias con ese criterio.</p>
                  <button type="button" id="btn-clear-news-filter" class="mt-3 px-4 py-2 rounded-lg text-xs font-heading font-bold bg-[#1050A0] text-white">Mostrar todas las noticias</button>
                </div>
              ` : filteredNews.map((item, idx) => `
                <article class="theme-card overflow-hidden flex flex-col justify-between ${idx === 0 && newsFilter === 'Todas' && !newsSearchQuery ? 'md:col-span-2 md:grid md:grid-cols-12' : ''}">
                  <div class="${idx === 0 && newsFilter === 'Todas' && !newsSearchQuery ? 'md:col-span-5' : ''}">
                    <img src="${item.image}" width="480" height="270" alt="${escapeHTML(item.title)}" class="w-full h-48 ${idx === 0 && newsFilter === 'Todas' && !newsSearchQuery ? 'md:h-full' : ''} object-cover">
                  </div>
                  <div class="p-5 flex flex-col justify-between ${idx === 0 && newsFilter === 'Todas' && !newsSearchQuery ? 'md:col-span-7' : ''}">
                    <div class="space-y-2.5">
                      <div class="flex items-center justify-between gap-2 text-xs">
                        <span class="font-heading font-bold px-2.5 py-0.5 rounded bg-[#F0B010]/20 text-[#D99B00] border border-[#F0B010]/40">${escapeHTML(item.category)}</span>
                        <span class="text-theme-muted font-semibold">${escapeHTML(item.date)} • ${escapeHTML(item.location)}</span>
                      </div>
                      <h3 class="font-heading font-extrabold text-lg leading-snug">${escapeHTML(item.title)}</h3>
                      <p class="text-sm text-theme-secondary leading-relaxed">${escapeHTML(item.summary)}</p>
                    </div>
                    <div class="pt-4 mt-4 border-t flex items-center justify-between gap-2" style="border-color: var(--border-color);">
                      <button type="button" data-open-news="${escapeHTML(item.id)}" class="font-heading font-bold text-xs text-[#00A8E6] hover:underline flex items-center gap-1">
                        <span>Leer comunicado completo</span>
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                      </button>
                      <a href="${escapeHTML(item.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="text-[11px] text-theme-muted hover:underline">Fuente oficial ↗</a>
                    </div>
                  </div>
                </article>
              `).join('')}
            </div>
          </section>

          <!-- Columna Lateral: Agenda de Eventos y Boletín (4 cols) -->
          <aside aria-labelledby="events-section-heading" class="lg:col-span-4 space-y-6">
            <div class="theme-card p-6">
              <div class="flex items-center justify-between pb-3 mb-4 border-b" style="border-color: var(--border-color);">
                <div>
                  <span class="text-[11px] font-heading font-bold uppercase tracking-wider text-[#00A8E6]">Cronograma Federal</span>
                  <h2 id="events-section-heading" class="font-heading font-black text-xl">Próximos Eventos</h2>
                </div>
                <span class="px-2 py-1 rounded text-xs font-heading font-bold bg-[#E03040] text-white">2026</span>
              </div>

              <div class="space-y-4">
                ${siteConfig.events.map(ev => `
                  <div class="p-3.5 rounded-xl theme-elevated flex items-start gap-3.5">
                    <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-[#1050A0] text-white flex flex-col items-center justify-center text-center shadow">
                      <span class="font-heading font-black text-lg leading-none">${escapeHTML(ev.day)}</span>
                      <span class="font-heading font-bold text-[10px] tracking-wider text-[#FFD147] mt-0.5">${escapeHTML(ev.month)}</span>
                    </div>
                    <div class="space-y-1">
                      <span class="text-[10px] font-heading font-bold uppercase px-2 py-0.5 rounded bg-[#00A8E6]/20 text-[#00A8E6]">${escapeHTML(ev.category)}</span>
                      <h3 class="font-heading font-bold text-sm leading-snug">${escapeHTML(ev.title)}</h3>
                      <p class="text-xs text-theme-muted">${escapeHTML(ev.time)}</p>
                      <p class="text-xs text-theme-secondary font-semibold">${escapeHTML(ev.modality)}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Formulario Seguro de Suscripción al Boletín Sindical -->
            <div class="theme-card p-6 border-t-4 border-t-[#F0B010]">
              <h3 class="font-heading font-extrabold text-base mb-1">Boletín Informativo FENASIES</h3>
              <p class="text-xs text-theme-secondary mb-4">Recibe circulares, avances de la Mesa Nacional con el MEN y convocatorias en tu correo institucional o sindical.</p>
              <form id="newsletter-form" class="space-y-3">
                <div>
                  <label for="sub-email" class="sr-only">Correo electrónico</label>
                  <input type="email" id="sub-email" required placeholder="tu.correo@universidad.edu.co" class="w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm border bg-transparent" style="border-color: var(--border-color);">
                </div>
                <div>
                  <label for="sub-ies" class="sr-only">Sindicato o Institución de Educación Superior</label>
                  <input type="text" id="sub-ies" required placeholder="Sindicato / Universidad (Ej. SINTRAEUP, SINDISER)" maxlength="80" class="w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm border bg-transparent" style="border-color: var(--border-color);">
                </div>
                <button type="submit" class="w-full py-2.5 rounded-lg font-heading font-bold text-xs uppercase tracking-wider bg-[#1050A0] hover:bg-[#0A2E5C] text-white transition shadow">
                  Suscribirme al Boletín Oficial
                </button>
              </form>
            </div>
          </aside>
        </div>
      `;

      // Listeners de búsqueda y filtrado de noticias
      const searchInput = document.getElementById("input-search-news");
      if (searchInput) {
        searchInput.addEventListener("input", (e) => {
          newsSearchQuery = e.target.value;
          renderNoticiasTab(container);
          const restored = document.getElementById("input-search-news");
          if (restored) {
            restored.focus();
            restored.setSelectionRange(newsSearchQuery.length, newsSearchQuery.length);
          }
        });
      }

      container.querySelectorAll("[data-news-cat]").forEach(btn => {
        btn.addEventListener("click", () => {
          newsFilter = btn.getAttribute("data-news-cat");
          renderNoticiasTab(container);
        });
      });

      const clearBtn = document.getElementById("btn-clear-news-filter");
      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          newsFilter = "Todas";
          newsSearchQuery = "";
          renderNoticiasTab(container);
        });
      }

      container.querySelectorAll("[data-open-news]").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-open-news");
          const item = siteConfig.news.find(n => n.id === id);
          if (item) {
            openDetailModal(item.category, item.title, `${item.date} • ${item.location}`, `
              <img src="${item.image}" width="600" height="340" alt="${escapeHTML(item.title)}" class="w-full h-56 object-cover rounded-xl mb-4">
              <p class="font-semibold text-base">${escapeHTML(item.summary)}</p>
              <p class="mt-3">${escapeHTML(item.content)}</p>
              <div class="mt-4 p-3 rounded-lg theme-elevated text-xs">
                <strong>Referencia documental:</strong> <a href="${escapeHTML(item.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="text-[#00A8E6] underline">${escapeHTML(item.sourceUrl)}</a>
              </div>
            `);
          }
        });
      });

      const newsletterForm = document.getElementById("newsletter-form");
      if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const email = escapeHTML(document.getElementById("sub-email").value);
          const ies = escapeHTML(document.getElementById("sub-ies").value);
          newsletterForm.reset();
          showToast(`Suscripción registrada para ${email} (${ies})`);
        });
      }
    }

    // PESTAÑA 2: OBJETIVOS DE LA FEDERACIÓN
    function renderObjetivosTab(container) {
      container.innerHTML = `
        <div class="space-y-10">
          <!-- Encabezado y Declaración Solemne en Source Serif Pro -->
          <section aria-labelledby="obj-heading" class="theme-card p-6 sm:p-10 border-l-8 border-l-[#F0B010]">
            <span class="text-xs font-heading font-bold uppercase tracking-wider text-[#E03040]">Plataforma Ideológica y Operativa</span>
            <h2 id="obj-heading" class="font-heading font-black text-2xl sm:text-3xl mt-1 mb-4">
              Objetivos y Ejes Estratégicos de FENASIES Colombia
            </h2>
            <p class="text-base text-theme-secondary leading-relaxed max-w-4xl">
              FENASIES articula a los sindicatos de empleados administrativos y docentes de las Instituciones de Educación Superior públicas y privadas del país bajo un modelo democrático, autónomo y propositivo. Buscamos transformar las relaciones laborales en el sistema universitario mediante el diálogo directo con el Ministerio de Educación Nacional, el SUE y ASCUN.
            </p>
            <blockquote class="mt-6 p-5 rounded-xl theme-elevated font-serif-solemn italic text-base sm:text-lg leading-relaxed">
              “Al tener un pensamiento vanguardista impulsado por nuevos liderazgos, somos conscientes de que el relacionamiento y la planeación estratégica son fundamentales para el bien del sector. Trabajamos de manera conjunta para lograr desde el Gobierno Nacional el apoyo que las universidades y sus trabajadores requieren.”
              <footer class="mt-2 font-heading not-italic font-bold text-xs uppercase tracking-wider text-[#1050A0]">— Declaración Fundacional de Promotores de FENASIES</footer>
            </blockquote>
          </section>

          <!-- 4 Ejes Estratégicos -->
          <section aria-label="Ejes estratégicos de la federación" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${siteConfig.objectives.map(obj => `
              <article class="theme-card p-6 flex flex-col justify-between relative overflow-hidden">
                <div class="h-1.5 w-full absolute top-0 left-0" style="background-color: ${obj.color};"></div>
                <div class="space-y-3">
                  <span class="inline-block font-heading font-black text-xs px-2.5 py-1 rounded text-white" style="background-color: ${obj.color};">
                    ${escapeHTML(obj.code)}
                  </span>
                  <h3 class="font-heading font-extrabold text-xl">${escapeHTML(obj.title)}</h3>
                  <p class="text-sm sm:text-base text-theme-secondary leading-relaxed">${escapeHTML(obj.description)}</p>
                </div>
                <div class="mt-5 pt-3 border-t flex items-center justify-between text-xs font-heading font-bold" style="border-color: var(--border-color);">
                  <span class="text-[#00A8E6]">${escapeHTML(obj.metric)}</span>
                  <span>Prioridad Federal</span>
                </div>
              </article>
            `).join('')}
          </section>

          <!-- Avances de la Mesa Sectorial Nacional -->
          <section class="theme-card p-6 sm:p-8">
            <h3 class="font-heading font-black text-xl mb-4">Compromisos Vigentes en la Mesa Sectorial Nacional de Educación Superior</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="p-4 rounded-xl theme-elevated">
                <div class="font-heading font-extrabold text-sm text-[#1050A0]">1. Formalización Laboral</div>
                <p class="text-xs text-theme-secondary mt-1">Seguimiento técnico a los planes de formalización de plantas administrativas y docentes en todas las IES estatales.</p>
              </div>
              <div class="p-4 rounded-xl theme-elevated">
                <div class="font-heading font-extrabold text-sm text-[#E03040]">2. Reforma Decreto 1279</div>
                <p class="text-xs text-theme-secondary mt-1">Ajuste al valor del punto docente y garantías de reconocimiento a la productividad académica e investigativa.</p>
              </div>
              <div class="p-4 rounded-xl theme-elevated">
                <div class="font-heading font-extrabold text-sm text-[#D99B00]">3. Comisión de Financiamiento</div>
                <p class="text-xs text-theme-secondary mt-1">Mesa permanente con el MEN para asegurar recursos de base presupuestal que respalden el crecimiento de las IES.</p>
              </div>
              <div class="p-4 rounded-xl theme-elevated">
                <div class="font-heading font-extrabold text-sm text-[#00A8E6]">4. Equidad y Género</div>
                <p class="text-xs text-theme-secondary mt-1">Implementación de mecanismos de prevención y atención contra la violencia basada en género en el ámbito universitario.</p>
              </div>
              <div class="p-4 rounded-xl theme-elevated">
                <div class="font-heading font-extrabold text-sm text-[#1050A0]">5. Vivienda y Bienestar</div>
                <p class="text-xs text-theme-secondary mt-1">Acceso preferencial a líneas de crédito hipotecario y programas de bienestar social para trabajadores del sector.</p>
              </div>
              <div class="p-4 rounded-xl theme-elevated">
                <div class="font-heading font-extrabold text-sm text-[#E03040]">6. Diálogo SUE y ASCUN</div>
                <p class="text-xs text-theme-secondary mt-1">Articulación respetuosa con los consejos superiores y rectorías para defender conjuntamente la universidad colombiana.</p>
              </div>
            </div>
          </section>
        </div>
      `;
    }

    // PESTAÑA 3: DOCUMENTACIÓN
    function renderDocumentacionTab(container) {
      const types = ["Todos", "Estatutos", "Acuerdos Colectivos", "Circulares", "Jurídico", "Normatividad", "Formatos"];
      const filteredDocs = siteConfig.documents.filter(doc => {
        const matchesType = docFilter === "Todos" || doc.type === docFilter;
        const q = docSearchQuery.trim().toLowerCase();
        const matchesQ = !q || doc.title.toLowerCase().includes(q) || doc.code.toLowerCase().includes(q) || doc.summary.toLowerCase().includes(q);
        return matchesType && matchesQ;
      });

      container.innerHTML = `
        <section aria-labelledby="docs-heading" class="space-y-6">
          <div class="theme-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-heading font-bold uppercase tracking-wider text-[#00A8E6]">Transparencia y Archivo Normativo</span>
              <h2 id="docs-heading" class="font-heading font-black text-2xl">Repositorio Oficial de Documentación</h2>
              <p class="text-xs sm:text-sm text-theme-secondary mt-1">Consulta y previsualiza estatutos, pliegos nacionales, actas de acuerdo colectivo, circulares y formatos de afiliación.</p>
            </div>
            <div class="relative w-full md:w-72">
              <input type="search" id="input-search-docs" value="${escapeHTML(docSearchQuery)}" placeholder="Buscar por código o título..." aria-label="Buscar documentos" class="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs sm:text-sm border bg-transparent" style="border-color: var(--border-color);">
              <svg class="w-4 h-4 absolute left-3 top-3 text-theme-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
          </div>

          <!-- Filtros de tipo documental -->
          <div class="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo de documento">
            ${types.map(t => `
              <button type="button" data-doc-type="${escapeHTML(t)}" class="px-3.5 py-1.5 rounded-lg font-heading font-bold text-xs transition ${docFilter === t ? 'bg-[#1050A0] text-white shadow' : 'theme-elevated hover:border-[#1050A0]'}">
                ${escapeHTML(t)}
              </button>
            `).join('')}
          </div>

          <!-- Tabla / Grid de Documentos -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${filteredDocs.map(doc => `
              <article class="theme-card p-5 flex flex-col justify-between">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-mono font-bold px-2 py-0.5 rounded bg-[#1050A0]/15 text-[#00A8E6]">${escapeHTML(doc.code)}</span>
                    <span class="font-heading font-bold px-2.5 py-0.5 rounded bg-[#F0B010]/20 text-[#D99B00]">${escapeHTML(doc.type)}</span>
                  </div>
                  <h3 class="font-heading font-extrabold text-base sm:text-lg leading-snug">${escapeHTML(doc.title)}</h3>
                  <p class="text-xs sm:text-sm text-theme-secondary leading-relaxed">${escapeHTML(doc.summary)}</p>
                </div>
                <div class="pt-4 mt-4 border-t flex flex-wrap items-center justify-between gap-2 text-xs" style="border-color: var(--border-color);">
                  <span class="text-theme-muted font-semibold">Publicado: ${escapeHTML(doc.date)} • ${escapeHTML(doc.size)}</span>
                  <div class="flex items-center gap-2">
                    <button type="button" data-preview-doc="${escapeHTML(doc.id)}" class="px-3 py-1.5 rounded-lg font-heading font-bold bg-[#1050A0] text-white hover:opacity-90 transition">
                      Ver Ficha Técnica
                    </button>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </section>
      `;

      const docSearch = document.getElementById("input-search-docs");
      if (docSearch) {
        docSearch.addEventListener("input", (e) => {
          docSearchQuery = e.target.value;
          renderDocumentacionTab(container);
          const restored = document.getElementById("input-search-docs");
          if (restored) {
            restored.focus();
            restored.setSelectionRange(docSearchQuery.length, docSearchQuery.length);
          }
        });
      }

      container.querySelectorAll("[data-doc-type]").forEach(btn => {
        btn.addEventListener("click", () => {
          docFilter = btn.getAttribute("data-doc-type");
          renderDocumentacionTab(container);
        });
      });

      container.querySelectorAll("[data-preview-doc]").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-preview-doc");
          const doc = siteConfig.documents.find(d => d.id === id);
          if (doc) {
            openDetailModal(`${doc.code} • ${doc.type}`, doc.title, `Fecha oficial: ${doc.date} | Formato: ${doc.size}`, `
              <div class="p-4 rounded-xl theme-elevated space-y-2">
                <p class="font-semibold">Resumen Ejecutivo del Documento:</p>
                <p>${escapeHTML(doc.summary)}</p>
              </div>
              <div class="p-4 rounded-xl border border-[#F0B010]/40 bg-[#F0B010]/10 text-xs space-y-1">
                <div class="font-heading font-bold text-[#D99B00]">Verificación de Integridad Digital (Seguridad FENASIES)</div>
                <div class="font-mono">Estado: Firmado y verificado por Secretaría General FENASIES</div>
              </div>
            `);
          }
        });
      });
    }

    // PESTAÑA 4: ARCHIVO MULTIMEDIA
    function renderMultimediaTab(container) {
      const types = ["Todos", "Video", "Fotografía", "Audio / Podcast"];
      const filteredMedia = siteConfig.multimedia.filter(m => mediaFilter === "Todos" || m.type === mediaFilter);

      container.innerHTML = `
        <section aria-labelledby="media-heading" class="space-y-6">
          <div class="theme-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-heading font-bold uppercase tracking-wider text-[#E03040]">Memoria Audiovisual del Movimiento Universitario</span>
              <h2 id="media-heading" class="font-heading font-black text-2xl">Archivo Multimedia FENASIES</h2>
              <p class="text-xs sm:text-sm text-theme-secondary mt-1">Crónicas en video, galerías fotográficas de encuentros nacionales y episodios del podcast sindical.</p>
            </div>
            <div class="flex flex-wrap gap-2" role="group" aria-label="Filtrar archivo multimedia">
              ${types.map(t => `
                <button type="button" data-media-type="${escapeHTML(t)}" class="px-3.5 py-1.5 rounded-lg font-heading font-bold text-xs transition ${mediaFilter === t ? 'bg-[#E03040] text-white shadow' : 'theme-elevated hover:border-[#E03040]'}">
                  ${escapeHTML(t)}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${filteredMedia.map(item => `
              <article class="theme-card overflow-hidden flex flex-col justify-between group">
                <div class="relative overflow-hidden h-56">
                  <img src="${item.thumbnail}" width="600" height="340" loading="lazy" alt="${escapeHTML(item.title)}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                  <div class="absolute inset-0 bg-gradient-to-t from-[#061B38]/90 via-transparent to-transparent flex items-end justify-between p-4 text-white">
                    <span class="px-2.5 py-1 rounded-md font-heading font-bold text-xs bg-[#E03040]">${escapeHTML(item.type)}</span>
                    <span class="px-2.5 py-1 rounded-md font-mono text-xs bg-black/60">${escapeHTML(item.duration)}</span>
                  </div>
                </div>
                <div class="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <span class="text-xs text-theme-muted font-semibold">${escapeHTML(item.date)}</span>
                    <h3 class="font-heading font-extrabold text-lg mt-1 leading-snug">${escapeHTML(item.title)}</h3>
                    <p class="text-sm text-theme-secondary mt-2 leading-relaxed">${escapeHTML(item.description)}</p>
                  </div>
                  <div class="pt-3 border-t flex items-center justify-between gap-2" style="border-color: var(--border-color);">
                    <button type="button" data-open-media="${escapeHTML(item.id)}" class="px-3.5 py-2 rounded-lg font-heading font-bold text-xs bg-[#1050A0] text-white hover:opacity-90 transition">
                      Abrir en Visor Multimedia
                    </button>
                    <a href="${escapeHTML(item.externalUrl)}" target="_blank" rel="noopener noreferrer" class="text-xs font-heading font-bold text-[#00A8E6] hover:underline">
                      Ver enlace externo ↗
                    </a>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </section>
      `;

      container.querySelectorAll("[data-media-type]").forEach(btn => {
        btn.addEventListener("click", () => {
          mediaFilter = btn.getAttribute("data-media-type");
          renderMultimediaTab(container);
        });
      });

      container.querySelectorAll("[data-open-media]").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-open-media");
          const item = siteConfig.multimedia.find(m => m.id === id);
          if (item) {
            openDetailModal(item.type, item.title, `${item.date} • Duración / Formato: ${item.duration}`, `
              <img src="${item.thumbnail}" width="640" height="360" alt="${escapeHTML(item.title)}" class="w-full h-64 object-cover rounded-xl mb-4">
              <p>${escapeHTML(item.description)}</p>
              <div class="mt-4 p-3.5 rounded-xl theme-elevated flex items-center justify-between">
                <span class="text-xs font-heading font-bold">Recurso Audiovisual Verificado</span>
                <a href="${escapeHTML(item.externalUrl)}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-[#E03040] text-white text-xs font-heading font-bold">Abrir Fuente Original ↗</a>
              </div>
            `);
          }
        });
      });
    }



    // Cambiar entre las 4 Pestañas
    function switchTab(tabKey) {
      currentTab = tabKey;
      document.querySelectorAll(".main-tab-btn").forEach(btn => {
        const isSelected = btn.getAttribute("data-tab") === tabKey;
        if (isSelected) {
          btn.classList.add("bg-[#1050A0]", "text-white", "shadow-sm");
          btn.classList.remove("hover:bg-[#1050A0]/10");
        } else {
          btn.classList.remove("bg-[#1050A0]", "text-white", "shadow-sm");
          btn.classList.add("hover:bg-[#1050A0]/10");
        }
      });
      renderActiveTab();
    }

    // Control de Modales
    function openDetailModal(badge, title, meta, bodyHtml) {
      document.getElementById("detail-modal-badge").textContent = badge;
      document.getElementById("detail-modal-title").textContent = title;
      document.getElementById("detail-modal-meta").textContent = meta;
      document.getElementById("detail-modal-body").innerHTML = bodyHtml;
      const modal = document.getElementById("detail-modal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }

    function closeDetailModal() {
      const modal = document.getElementById("detail-modal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }

    // Inicializar Eventos Globales
    window.addEventListener("DOMContentLoaded", () => {
      renderHero();
      renderActiveTab();

      // Carga automática desde data/site-config.json cuando se aloja en servidor web
      fetch('data/site-config.json')
        .then(r => r.ok ? r.json() : null)
        .then(externalData => {
          if (externalData && externalData.bentoSlides) {
            siteConfig = Object.assign({}, INITIAL_SITE_CONFIG, externalData);
            renderHero();
            renderActiveTab();
          }
        })
        .catch(() => {});




      // Botones de las 4 pestañas principales
      document.querySelectorAll(".main-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          switchTab(btn.getAttribute("data-tab"));
        });
      });

      // Enlaces de pestañas en el footer
      document.querySelectorAll("[data-footer-tab]").forEach(btn => {
        btn.addEventListener("click", () => {
          switchTab(btn.getAttribute("data-footer-tab"));
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });

      // Cerrar modal de detalle
      document.getElementById("btn-close-detail-modal").addEventListener("click", closeDetailModal);
      document.getElementById("btn-close-detail-footer").addEventListener("click", closeDetailModal);

      // Modal Manual de Imagen
      const brandModal = document.getElementById("brand-modal");
      document.getElementById("btn-open-brand").addEventListener("click", () => {
        brandModal.classList.remove("hidden");
        brandModal.classList.add("flex");
      });
      document.getElementById("btn-close-brand-modal").addEventListener("click", () => {
        brandModal.classList.add("hidden");
        brandModal.classList.remove("flex");
      });

      // Copiar código HEX de la paleta oficial
      document.querySelectorAll("[data-copy-hex]").forEach(btn => {
        btn.addEventListener("click", () => {
          const hex = btn.getAttribute("data-copy-hex");
          try {
            navigator.clipboard.writeText(hex);
          } catch (e) {}
          showToast(`Color institucional ${hex} copiado al portapapeles`);
        });
      });

      // Modal SEO & Seguridad
      const seoModal = document.getElementById("seo-sec-modal");
      document.getElementById("btn-open-seo-sec").addEventListener("click", () => {
        seoModal.classList.remove("hidden");
        seoModal.classList.add("flex");
      });
      document.getElementById("btn-close-seo-sec-modal").addEventListener("click", () => {
        seoModal.classList.add("hidden");
        seoModal.classList.remove("flex");
      });

      // Modal Editor Rápido CMS
      let cmsEditingBannerIdx = 0;
      function loadCmsBannerFields(idx) {
        cmsEditingBannerIdx = idx;
        const sl = siteConfig.bentoSlides[idx] || siteConfig.bentoSlides[0];
        document.getElementById("cms-slide-badge").value = sl.badge;
        document.getElementById("cms-slide-highlight").value = sl.highlight;
        document.getElementById("cms-slide-title").value = sl.title;
        document.getElementById("cms-slide-right-stat").value = sl.rightStat;
        document.getElementById("cms-slide-right-caption").value = sl.rightCaption;
        document.getElementById("cms-ticker-text").value = siteConfig.tickerText;
        document.querySelectorAll(".cms-banner-tab").forEach(b => {
          const bIdx = parseInt(b.getAttribute("data-cms-banner"), 10);
          if (bIdx === idx) {
            b.className = "cms-banner-tab px-2.5 py-1 rounded text-xs font-heading font-bold bg-[#F0B010] text-[#0A2E5C]";
          } else {
            b.className = "cms-banner-tab px-2.5 py-1 rounded text-xs font-heading font-bold text-white/80 hover:text-white";
          }
        });
      }

      document.querySelectorAll(".cms-banner-tab").forEach(btn => {
        btn.addEventListener("click", () => {
          loadCmsBannerFields(parseInt(btn.getAttribute("data-cms-banner"), 10) || 0);
        });
      });

      const cmsModal = document.getElementById("cms-modal");
      document.getElementById("btn-open-cms").addEventListener("click", () => {
        document.getElementById("cms-hero-badge").value = siteConfig.heroBadge;
        document.getElementById("cms-stats-unions").value = siteConfig.stats.unions;
        document.getElementById("cms-hero-title").value = siteConfig.heroTitle;
        document.getElementById("cms-hero-subtitle").value = siteConfig.heroSubtitle;
        document.getElementById("cms-solemn-quote").value = siteConfig.solemnQuote;
        loadCmsBannerFields(window._bentoSlideIdx || 0);
        cmsModal.classList.remove("hidden");
        cmsModal.classList.add("flex");
      });
      document.getElementById("btn-close-cms-modal").addEventListener("click", () => {
        cmsModal.classList.add("hidden");
        cmsModal.classList.remove("flex");
      });

      // Guardar cambios desde el CMS en vivo
      document.getElementById("cms-form").addEventListener("submit", (e) => {
        e.preventDefault();
        siteConfig.heroBadge = document.getElementById("cms-hero-badge").value.trim() || siteConfig.heroBadge;
        siteConfig.stats.unions = document.getElementById("cms-stats-unions").value.trim() || siteConfig.stats.unions;
        siteConfig.heroTitle = document.getElementById("cms-hero-title").value.trim() || siteConfig.heroTitle;
        siteConfig.heroSubtitle = document.getElementById("cms-hero-subtitle").value.trim() || siteConfig.heroSubtitle;
        siteConfig.solemnQuote = document.getElementById("cms-solemn-quote").value.trim() || siteConfig.solemnQuote;

        // Guardar cambios específicos del Banner Dinámico seleccionado
        const targetSlide = siteConfig.bentoSlides[cmsEditingBannerIdx];
        if (targetSlide) {
          targetSlide.badge = document.getElementById("cms-slide-badge").value.trim() || targetSlide.badge;
          targetSlide.highlight = document.getElementById("cms-slide-highlight").value.trim() || targetSlide.highlight;
          targetSlide.title = document.getElementById("cms-slide-title").value.trim() || targetSlide.title;
          targetSlide.rightStat = document.getElementById("cms-slide-right-stat").value.trim() || targetSlide.rightStat;
          targetSlide.rightCaption = document.getElementById("cms-slide-right-caption").value.trim() || targetSlide.rightCaption;
        }
        siteConfig.tickerText = document.getElementById("cms-ticker-text").value.trim() || siteConfig.tickerText;
        window._bentoSlideIdx = cmsEditingBannerIdx;

        const newTitle = document.getElementById("cms-new-news-title").value.trim();
        const newCat = document.getElementById("cms-new-news-cat").value;
        const newSummary = document.getElementById("cms-new-news-summary").value.trim();
        if (newTitle && newSummary) {
          siteConfig.news.unshift({
            id: "not-" + Date.now(),
            title: newTitle,
            category: newCat,
            date: "Noviembre 2026",
            location: "Colombia",
            featured: true,
            image: ASSETS.heroCongreso,
            summary: newSummary,
            content: newSummary,
            sourceUrl: "https://www.universidad.edu.co/tag/fenasies/"
          });
          document.getElementById("cms-new-news-title").value = "";
          document.getElementById("cms-new-news-summary").value = "";
        }

        cmsModal.classList.add("hidden");
        cmsModal.classList.remove("flex");
        renderHero();
        renderActiveTab();
        showToast("Configuración CMS actualizada en vivo en las 3 propuestas");
      });

      // Restaurar configuración original
      document.getElementById("btn-reset-cms").addEventListener("click", () => {
        siteConfig = JSON.parse(JSON.stringify(INITIAL_SITE_CONFIG));
        cmsModal.classList.add("hidden");
        cmsModal.classList.remove("flex");
        renderHero();
        renderActiveTab();
        showToast("Contenido restaurado a los valores iniciales");
      });

      // Copiar JSON de configuración
      document.getElementById("btn-export-json").addEventListener("click", () => {
        const cleanExport = JSON.stringify({
          sigla: siteConfig.sigla,
          fullName: siteConfig.fullName,
          heroBadge: siteConfig.heroBadge,
          heroTitle: siteConfig.heroTitle,
          stats: siteConfig.stats,
          totalNews: siteConfig.news.length,
          totalDocs: siteConfig.documents.length
        }, null, 2);
        try {
          navigator.clipboard.writeText(cleanExport);
        } catch (e) {}
        showToast("JSON de configuración copiado al portapapeles");
      });
    });
