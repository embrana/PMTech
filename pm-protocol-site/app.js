const protocols = [
  {
    id: "roadmap",
    label: "Roadmap",
    title: "Program & Roadmap Management",
    thesis:
      "El roadmap es una herramienta viva para alinear outcomes, capacidad técnica y prioridades de negocio sin fijar falsas certezas.",
    focus:
      "Definir, mantener y ajustar continuamente un roadmap realista conectado a outcomes, capacidad y aprendizaje.",
    image: "assets/images/thumbs/roadmap-framework.png",
    phases: [
      ["Alineación estratégica", "Traducir visión ejecutiva en outcomes medibles y criterios de decisión."],
      ["Viabilidad técnica", "Auditar capacidad, vacaciones, soporte, deuda y dependencias con Head of Development."],
      ["Priorización objetiva", "Usar RICE, WSJF o Valor vs. Complejidad para reducir decisiones por presión política."],
      ["Ventana móvil", "Now-Next-Later: detalle alto en el trimestre actual y dirección estratégica en 6-12 meses."],
      ["Revisión continua", "Cadencia semanal con equipo, mensual con líderes y trimestral con CEO/stakeholders."]
    ],
    controls: [
      ["Capacidad 70-80%", "Reservar 20-30% para incidentes, iteraciones, soporte y aprendizaje técnico."],
      ["70/30 producto/deuda", "Balancear nuevas funcionalidades con salud del software y reducción de deuda técnica."],
      ["Dependencias visibles", "Todo compromiso relevante debe tener owner, riesgo y condición de entrada."]
    ],
    outputs: ["Now-Next-Later", "RICE/WSJF", "Roadmap Review", "Dependency Map"]
  },
  {
    id: "scope",
    label: "Scope",
    title: "Scope Management & Delivery Accountability",
    thesis:
      "El alcance se protege antes del sprint: si una historia no está lista, no entra; si cambia, se evalúa impacto.",
    focus:
      "Traducir necesidades de negocio a scopes técnicos claros, priorizar y evitar expansión no controlada.",
    image: "assets/images/thumbs/scope-delivery.png",
    phases: [
      ["BRD → PRD → TSD", "Separar Why, What y How para mantener trazabilidad entre ROI, funcionalidad y arquitectura."],
      ["Delimitación estricta", "Crear WBS, out-of-scope list y MoSCoW con Must-have limitado a capacidad real."],
      ["Control de cambios", "Toda modificación pasa por impacto en tiempo, recursos, riesgo y prioridad."],
      ["Planificación con buffer", "No planificar al 100%; reservar margen para bugs, dependencias y trabajo no previsto."],
      ["Accountability por flujo", "Medir Lead Time, Cycle Time y Throughput, no solo porcentaje completado."]
    ],
    controls: [
      ["Definition of Ready", "Criterios, dependencias y condiciones técnicas completas antes de entrar al sprint."],
      ["No gold-plating", "Evitar features no solicitadas y canalizar pedidos informales al cambio formal."],
      ["Rituales de inspección", "Stand-up para bloqueos y retrospectiva para causas de variación."]
    ],
    outputs: ["BRD", "PRD", "TSD/SDD", "DoR", "Change Request"]
  },
  {
    id: "capacity",
    label: "Capacity",
    title: "Engineering Operations & Capacity Planning",
    thesis:
      "La capacidad no es cantidad de personas: es ancho de banda productivo, foco, habilidades críticas y salud del equipo.",
    focus:
      "Evaluar capacidad, balancear iniciativas paralelas y anticipar restricciones de recursos.",
    image: "assets/images/thumbs/capacity-workflow.png",
    phases: [
      ["Capacidad neta", "Restar ceremonias, soporte, vacaciones, revisiones y aplicar focus factor de 70-85%."],
      ["Skill matrix", "Detectar cuellos de botella humanos y puntos únicos de falla antes de prometer fechas."],
      ["WIP limits", "Reducir cambio de contexto y forzar resolución: dejar de empezar y empezar a terminar."],
      ["Scenario planning", "Modelar ausencias, retrasos de contratación, proyectos urgentes y cambios de prioridad."],
      ["Health monitor", "Revisar estrés, claridad de roles y carga cognitiva para sostener capacidad real."]
    ],
    controls: [
      ["Reserva de mantenimiento", "Asignar 10-20% a deuda técnica y bugs para proteger salud del código."],
      ["Forecast móvil", "Usar escenarios trimestrales, no presupuestos rígidos anuales."],
      ["Value Stream Mapping", "Detectar esperas repetidas en code review, QA, release o dependencias externas."]
    ],
    outputs: ["Capacity Model", "Skill Matrix", "WIP Policy", "Scenario Map"]
  },
  {
    id: "communication",
    label: "Comms",
    title: "Cross-functional Communication & Expectation Management",
    thesis:
      "La comunicación PM no es reportar todo: es darle a cada audiencia la precisión que necesita para decidir.",
    focus:
      "Actuar como puente entre stakeholders de negocio e ingeniería, gestionando prioridades, restricciones y cambios.",
    image: "assets/images/thumbs/communication-workflow.png",
    phases: [
      ["Mapa de stakeholders", "Separar contribuidores y beneficiarios para evitar sobrecarga de información."],
      ["Single source of truth", "Centralizar decisiones, prioridades, restricciones y progreso en Jira/Linear/Confluence."],
      ["Cadencia diferenciada", "Detalle operativo para ingeniería y visibilidad ejecutiva RAG para negocio."],
      ["Cambio temprano", "Comunicar riesgos antes de que sean inmanejables con Problema → Impacto → Mitigación → Solicitud."],
      ["Dashboards self-service", "Reducir reuniones manuales con vistas actualizadas por rol y estado."]
    ],
    controls: [
      ["No finger-pointing", "Comunicación objetiva y sin culpas frente a stakeholders."],
      ["RAG status", "Rojo, ámbar y verde para explicar salud del proyecto en segundos."],
      ["Supuestos visibles", "Toda fecha se comunica junto con condiciones, dependencias y riesgos."]
    ],
    outputs: ["Comms Plan", "RAG Dashboard", "Stakeholder Map", "Update Template"]
  },
  {
    id: "vendors",
    label: "Vendors",
    title: "Vendor & Integration Governance",
    thesis:
      "Las integraciones se gestionan como sistemas de dependencia: scope, seguridad, entrega, monitoreo y salida.",
    focus:
      "Coordinar proveedores externos, pagos, PMS, channel managers, third-party tools y dependencias que impactan timelines.",
    image: "assets/images/thumbs/vendor-governance.png",
    phases: [
      ["Selección estratégica", "Evaluar costo, arquitectura API, estabilidad financiera, seguridad y ajuste operativo."],
      ["Especificación técnica", "Exigir integraciones profundas, bidireccionales, con tokenización y sincronización confiable."],
      ["Entrega iterativa", "Discovery, diseño, sprints, QA funcional/rendimiento/seguridad y despliegues progresivos."],
      ["Dependency stewardship", "Mapear impacto en cadena y coordinar opciones, no buscar culpables."],
      ["Monitoreo y QBR", "SLIs, SLOs internos, alertas tempranas, sync semanal y revisión ejecutiva trimestral."]
    ],
    controls: [
      ["API readiness", "PoC temprana para validar documentación y comportamiento real del tercero."],
      ["Blue-Green", "Limitar radio de impacto y habilitar reversión rápida en integraciones críticas."],
      ["Offboarding", "Plan de salida desde el día uno: accesos, datos, transición y proveedor alternativo."]
    ],
    outputs: ["Vendor Scorecard", "SLA/SLO Sheet", "Integration Brief", "Offboarding Plan"]
  },
  {
    id: "risk",
    label: "Risk",
    title: "Risk & Incident Management",
    thesis:
      "Un incidente es un riesgo que se materializó. Por eso el loop termina actualizando el registro de riesgos.",
    focus:
      "Identificar riesgos, planificar mitigación y coordinar incidentes con resolución y comunicación oportuna.",
    image: "assets/images/thumbs/risk-incident.png",
    phases: [
      ["Identificación proactiva", "Auditar deuda técnica, APIs, complejidad, capacidad y brechas de habilidades."],
      ["Mitigación", "Evitar, reducir, transferir o amortiguar; abordar primero el trabajo más incierto."],
      ["Incident command", "Separar Incident Commander, Operations Lead y Communications Lead."],
      ["Comunicación", "Reconocer el incidente temprano y actualizar con cadencia clara aunque no haya novedades."],
      ["Post-mortem", "Blameless, 5 Whys, action items con owner y fecha; retroalimentar risk register."]
    ],
    controls: [
      ["Risk owner", "Cada riesgo tiene una persona con autoridad para actuar."],
      ["Runbooks", "Reducen carga cognitiva y aceleran diagnóstico bajo presión."],
      ["SPOC", "Status page o service desk como punto único de verdad."]
    ],
    outputs: ["Risk Register", "RACI", "Runbook", "Post-mortem"]
  },
  {
    id: "improvement",
    label: "Improve",
    title: "Process & Continuous Improvement",
    thesis:
      "El proceso debe reflejar cómo trabaja realmente el equipo: simple, automatizado, medible y ajustable.",
    focus:
      "Diseñar workflows en Jira/Linear, adaptar Agile, mejorar rituales y sostener backlogs limpios y accionables.",
    image: "assets/images/thumbs/process-improvement.png",
    phases: [
      ["Workflow simple", "Estados mínimos: Triage, Backlog, In Progress, In Review, Done."],
      ["Framework contextual", "Scrum para nuevas funcionalidades, Kanban para soporte, Scrumban para equipos maduros."],
      ["Métricas de flujo", "Cycle Time, Throughput, CFD y control charts para detectar bloqueos."],
      ["Backlog DEEP", "Detallado adecuadamente, estimado, emergente y priorizado con triage regular."],
      ["Retros accionables", "Cerrar cada ciclo con 1-3 mejoras con owner, fecha y criterio de éxito."]
    ],
    controls: [
      ["Automatización", "PRs mueven tickets y reducen esfuerzo manual de actualización."],
      ["Tickets inactivos", "Reglas de limpieza para cerrar o archivar solicitudes sin movimiento."],
      ["CI/CD mindset", "Entrega incremental con feedback continuo y menor riesgo acumulado."]
    ],
    outputs: ["Workflow Map", "DEEP Backlog", "Retro Actions", "Automation Rules"]
  }
];

const backlogItems = [
  {
    title: "Narrativa hero de modalidad de trabajo",
    area: "roadmap",
    priority: "Must",
    status: "Done",
    story: "Como visitante, quiero entender en 20 segundos cómo trabajo y qué sistema operativo uso.",
    acceptance: "Hero con tesis, CTAs y evidencia cuantificada."
  },
  {
    title: "Principios de trabajo → Protocolo",
    area: "roadmap",
    priority: "Must",
    status: "Done",
    story: "Como lector, quiero ver los principios que conectan estrategia, producto, ingeniería y operación.",
    acceptance: "Tabla responsive con principio, operación y artefacto observable."
  },
  {
    title: "Playbooks por dominio",
    area: "delivery",
    priority: "Must",
    status: "Done",
    story: "Como líder de equipo, quiero ver cómo se opera cada dominio sin leer documentos largos.",
    acceptance: "Tabs accesibles con fases, controles, outputs e imagen de evidencia."
  },
  {
    title: "Flujo Business → Code",
    area: "delivery",
    priority: "Should",
    status: "Done",
    story: "Como stakeholder, quiero ver cómo una idea pasa a implementación sin perder trazabilidad.",
    acceptance: "Timeline BRD, PRD, TSD/SDD, backlog y release."
  },
  {
    title: "Calculadora de capacidad",
    area: "ops",
    priority: "Must",
    status: "Done",
    story: "Como sponsor de negocio, quiero entender compromisos realistas basados en capacidad y buffers.",
    acceptance: "Inputs editables y outputs de capacidad bruta, compromiso y reserva."
  },
  {
    title: "Triage de riesgo",
    area: "ops",
    priority: "Should",
    status: "Done",
    story: "Como PM, quiero mostrar cómo se decide mitigar, reducir o aceptar un riesgo.",
    acceptance: "Matriz interactiva con acción recomendada por cuadrante."
  },
  {
    title: "Plan 30/60/90 de entrada a un sistema",
    area: "roadmap",
    priority: "Must",
    status: "Done",
    story: "Como equipo, quiero saber cómo entro a un contexto nuevo sin romper confianza.",
    acceptance: "Tres etapas con diagnóstico, control y predictibilidad."
  },
  {
    title: "Backlog filtrable del sitio",
    area: "delivery",
    priority: "Should",
    status: "Done",
    story: "Como visitante, quiero ver que el propio sitio fue tratado como producto.",
    acceptance: "Filtros por área, búsqueda y tarjetas con historia y aceptación."
  },
  {
    title: "Kit de artefactos",
    area: "ops",
    priority: "Should",
    status: "Done",
    story: "Como equipo, quiero saber qué documentos y tableros se instalarían en la operación.",
    acceptance: "Seis artefactos con propósito claro y lenguaje accionable."
  },
  {
    title: "Galería de evidencia visual",
    area: "evidence",
    priority: "Must",
    status: "Done",
    story: "Como visitante, quiero comprobar que el sitio se basa en material existente.",
    acceptance: "Todas las infografías y mapas están disponibles en galería ampliable."
  },
  {
    title: "Ledger de documentos fuente",
    area: "evidence",
    priority: "Must",
    status: "Done",
    story: "Como lector técnico, quiero abrir los documentos base si necesito profundidad.",
    acceptance: "Los nueve .docx están copiados y enlazados."
  },
  {
    title: "Resumen profesional en inglés",
    area: "evidence",
    priority: "Could",
    status: "Done",
    story: "Como lector internacional, quiero entender el protocolo en inglés profesional.",
    acceptance: "Sección English-ready con explicación ejecutiva de cómo trabajo."
  },
  {
    title: "North Star Metrics",
    area: "roadmap",
    priority: "Must",
    status: "Done",
    story: "Como product owner, quiero conectar el producto desde cero con una métrica de valor recurrente.",
    acceptance: "Sección con NSM, árbol de métricas, inputs y guardrails."
  },
  {
    title: "Design Thinking para producto from scratch",
    area: "delivery",
    priority: "Must",
    status: "Done",
    story: "Como equipo de producto, quiero ver cómo se descubre, define, prototipa y valida antes de construir.",
    acceptance: "Loop de empatizar, definir, idear, prototipar y testear con foco en aprendizaje."
  }
];

const evidenceItems = [
  ["roadmap-framework.png", "Strategic Roadmap Framework", "Roadmap, capacidad 80/20, Now-Next-Later y rituales."],
  ["scope-delivery.png", "Scope and Delivery Excellence", "BRD/PRD/TSD, MoSCoW, DoR, buffers y métricas."],
  ["capacity-workflow.png", "Engineering Capacity Workflow", "Focus factor, WIP, skill matrix, escenarios y health monitor."],
  ["communication-workflow.png", "Business-Tech Communication Workflow", "Audiencias, single source of truth, RAG y crisis framework."],
  ["vendor-governance.png", "Vendor and Integration Governance", "Selección, integración profunda, dependencia, SLOs y QBR."],
  ["risk-incident.png", "Risk and Incident Management", "Risky work first, mitigation, incident command y post-mortems."],
  ["process-improvement.png", "Process & Continuous Improvement", "Workflow simple, WIP, DEEP backlog y retros con datos."],
  ["delivery-excellence.png", "Engineering Delivery Excellence", "DORA, WIP, probabilistic forecasting y commitment guide."],
  ["mindmap-01.png", "Mind Map 01", "Mapa mental de vendor and integration governance."],
  ["mindmap-02.png", "Mind Map 02", "Mapa mental de responsabilidades y flujos PM."],
  ["mindmap-03.png", "Mind Map 03", "Mapa mental de estrategia y operaciones software PM."],
  ["mindmap-04.png", "Mind Map 04", "Mapa mental de roadmap management."],
  ["mindmap-05.png", "Mind Map 05", "Mapa mental de scope and delivery."],
  ["mindmap-06.png", "Mind Map 06", "Mapa mental de capacity planning."],
  ["mindmap-07.png", "Mind Map 07", "Mapa mental de communication workflow."],
  ["mindmap-08.png", "Mind Map 08", "Mapa mental de risk and incident management."],
  ["mindmap-09.png", "Mind Map 09", "Mapa mental ampliado de operational strategy."],
  ["mindmap-10.png", "Mind Map 10", "Mapa mental de process improvement."],
  ["mindmap-11.png", "Mind Map 11", "Mapa mental de execution blueprint."]
];

const protocolTabs = document.querySelector("#protocolTabs");
const protocolPanel = document.querySelector("#protocolPanel");
const backlogGrid = document.querySelector("#backlogGrid");
const searchInput = document.querySelector("#backlogSearch");
let currentFilter = "all";

function renderProtocol(index = 0) {
  const item = protocols[index];

  protocolTabs.innerHTML = protocols
    .map(
      (protocol, protocolIndex) => `
        <button
          class="tab-button"
          type="button"
          role="tab"
          id="tab-${protocol.id}"
          aria-controls="panel-${protocol.id}"
          aria-selected="${protocolIndex === index}"
          data-index="${protocolIndex}"
        >
          <span aria-hidden="true">${String(protocolIndex + 1).padStart(2, "0")}</span>
          <strong>${protocol.label}</strong>
        </button>
      `
    )
    .join("");

  protocolPanel.id = `panel-${item.id}`;
  protocolPanel.setAttribute("role", "tabpanel");
  protocolPanel.setAttribute("aria-labelledby", `tab-${item.id}`);
  protocolPanel.innerHTML = `
    <div class="protocol-hero">
      <div class="protocol-copy">
        <p class="eyebrow">${item.focus}</p>
        <h3>${item.title}</h3>
        <p>${item.thesis}</p>
        <div class="outcome-strip">${item.outputs.map((output) => `<span>${output}</span>`).join("")}</div>
      </div>
      <div class="protocol-image">
        <img src="${item.image}" alt="Infografía de ${item.title}" loading="lazy">
      </div>
    </div>
    <div class="protocol-body">
      <div>
        <h4>Fases de operación</h4>
        <ol class="phase-list">
          ${item.phases
            .map(
              ([title, text], phaseIndex) => `
                <li>
                  <span>${phaseIndex + 1}</span>
                  <div><strong>${title}</strong><p>${text}</p></div>
                </li>
              `
            )
            .join("")}
        </ol>
      </div>
      <aside>
        <h4>Controles PM</h4>
        <ul class="control-list">
          ${item.controls.map(([title, text]) => `<li><strong>${title}</strong><p>${text}</p></li>`).join("")}
        </ul>
      </aside>
    </div>
  `;

  protocolTabs.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => renderProtocol(Number(button.dataset.index)));
  });
}

function renderBacklog() {
  const query = searchInput.value.trim().toLowerCase();
  const filteredItems = backlogItems.filter((item) => {
    const matchesFilter = currentFilter === "all" || item.area === currentFilter;
    const haystack = `${item.title} ${item.story} ${item.acceptance} ${item.priority} ${item.area}`.toLowerCase();
    return matchesFilter && haystack.includes(query);
  });

  backlogGrid.innerHTML = filteredItems.length
    ? filteredItems
        .map(
          (item) => `
            <article class="backlog-card">
              <header>
                <span class="tag done">${item.status}</span>
                <span class="tag">${item.priority}</span>
              </header>
              <h3>${item.title}</h3>
              <p>${item.story}</p>
              <p><strong>Aceptación:</strong> ${item.acceptance}</p>
              <div class="backlog-meta">
                <span>${item.area}</span>
                <span>Static UX</span>
              </div>
            </article>
          `
        )
        .join("")
    : `<p class="empty-state">No hay funcionalidades con ese filtro. Probá con roadmap, vendor, riesgo o RAG.</p>`;
}

function renderGallery() {
  const gallery = document.querySelector("#gallery");
  gallery.innerHTML = evidenceItems
    .map(
      ([file, title, caption]) => `
        <figure class="gallery-card">
          <button class="gallery-button" type="button" data-src="assets/images/${file}" data-title="${title}" data-caption="${caption}">
            <img src="assets/images/thumbs/${file}" alt="${title}" loading="lazy">
          </button>
          <figcaption>
            <strong>${title}</strong>
            <small>${caption}</small>
          </figcaption>
        </figure>
      `
    )
    .join("");

  const dialog = document.querySelector("#imageDialog");
  const dialogImage = document.querySelector("#dialogImage");
  const dialogTitle = document.querySelector("#dialogTitle");

  gallery.querySelectorAll(".gallery-button").forEach((button) => {
    button.addEventListener("click", () => {
      dialogImage.src = button.dataset.src;
      dialogImage.alt = button.dataset.caption;
      dialogTitle.textContent = button.dataset.title;
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  });
}

function updateCapacity() {
  const readNumber = (selector, fallback, min, max) => {
    const raw = Number(document.querySelector(selector).value);
    if (!Number.isFinite(raw)) return fallback;
    return Math.min(max, Math.max(min, raw));
  };
  const team = readNumber("#teamSize", 6, 1, 50);
  const days = readNumber("#sprintDays", 10, 1, 30);
  const focus = Number(document.querySelector("#focusFactor").value);
  const buffer = Number(document.querySelector("#bufferFactor").value);

  const gross = team * days;
  const focusAdjusted = gross * (focus / 100);
  const reserve = focusAdjusted * (buffer / 100);
  const commitment = focusAdjusted - reserve;

  document.querySelector("#focusValue").textContent = `${focus}%`;
  document.querySelector("#bufferValue").textContent = `${buffer}%`;
  document.querySelector("#grossCapacity").textContent = `${Math.round(gross)} días-persona`;
  document.querySelector("#commitCapacity").textContent = `${Math.round(commitment)} días-persona`;
  document.querySelector("#reserveCapacity").textContent = `${Math.round(reserve)} días-persona`;
}

function setupRiskTriage() {
  const output = document.querySelector("#riskOutput");
  document.querySelectorAll(".risk-cell").forEach((button) => {
    button.addEventListener("click", () => {
      output.textContent = button.dataset.risk;
    });
  });
}

function setupNavObserver() {
  const links = [...document.querySelectorAll(".site-nav a")];
  const sections = [...document.querySelectorAll("main section[id]")];

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.6] }
  );

  sections.forEach((section) => observer.observe(section));
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderBacklog();
  });
});

searchInput.addEventListener("input", renderBacklog);
document.querySelector("#printSite").addEventListener("click", () => window.print());
document.querySelectorAll("#teamSize, #sprintDays, #focusFactor, #bufferFactor").forEach((input) => {
  input.addEventListener("input", updateCapacity);
});

renderProtocol();
renderBacklog();
renderGallery();
updateCapacity();
setupRiskTriage();
setupNavObserver();
