import { Competency, EducationItem, SuccessCase } from '../types';

export const HERO_DATA = {
  name: "Mariano Saucedo Hernández",
  title: "Liderazgo, Gestión y Servicio al Ciudadano: Soluciones Integrales para Retos Institucionales",
  subtitle: "Mariano Saucedo Hernández. Abogado y Servidor Público con visión operativa y técnica. Transformo la atención ciudadana en resultados eficientes.",
  profileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHjbMM2Jd1OEKl3vQoY182PH-4ndNlZzDW0QKVfMl1F1f-fBf_hDBszE5SAqsqJWFMZfddsQm1DNjQY3GUE207YPxrhlI0G05cjem93QYe3TueIjZAxG6BeSRttfG9S_kVseigiGzXfUnZqyziPNqhuZhBAhdxmcovkU8W7bLgSPbUp3_QB3yZVq0vvXhKo9-1cQ15r8tvhjIjYLd8XFU4G1el2VU8_JMjmRIVh9NoqDUaj39f104rKSvpKRuNnva14A",
  stats: [
    { label: "Enfoque Multidisciplinario", value: "Derecho + Salud + Operaciones" },
    { label: "Satisfacción Ciudadana", value: "98% En Gestión" },
    { label: "Apego Normativo", value: "100% Rigor Legal" }
  ]
};

export const ABOUT_DATA = {
  title: "Trayectoria Polifacética con un Propósito Claro",
  paragraphs: [
    "Mi enfoque profesional se fundamenta en la intersección única de tres disciplinas que, a primera vista, podrían parecer dispares, pero que en la práctica forman una sinergia poderosa para el servicio público y la gestión institucional: el Derecho, la Enfermería y la atención operativa.",
    "La formación en Derecho me proporciona el marco analítico y normativo indispensable para asegurar que cada acción institucional esté apegada a la legalidad y la justicia. Por otro lado, mi experiencia técnica en Enfermería ha cultivado en mí una profunda empatía, resiliencia ante situaciones críticas y una comprensión intrínseca de la condición humana, habilidades invaluables cuando el objetivo central es servir a la ciudadanía.",
    "Esta amalgama de conocimientos me permite abordar los retos organizacionales no solo desde una perspectiva regulatoria y burocrática, sino con un genuino sentido de humanidad, traduciendo políticas y procedimientos en soluciones tangibles que mejoran la calidad del servicio al ciudadano y optimizan la eficiencia operativa interna."
  ],
  pillars: [
    {
      title: "Rigor Jurídico & Legalidad",
      subtitle: "Licenciatura en Derecho",
      icon: "gavel",
      description: "Garantía de apego normativo, fundamentación jurídica sólida y certeza legal en todos los procedimientos institucionales.",
      highlights: ["Análisis de políticas públicas", "Marco regulatorio y constitucional", "Dictaminación administrativa y transparencia"]
    },
    {
      title: "Humanismo & Empatía Directa",
      subtitle: "Diplomado Técnico en Enfermería",
      icon: "health_and_safety",
      description: "Sensibilidad social y templanza en momentos críticos para atender con dignidad y máxima empatía al usuario.",
      highlights: ["Contención de situaciones complejas", "Trato prioritario a grupos vulnerables", "Resiliencia activa en campo"]
    },
    {
      title: "Eficiencia Operativa & Digital",
      subtitle: "Serigrafía, Captura & Gestión",
      icon: "settings_suggest",
      description: "Capacidad práctica de organizar equipos, estandarizar registros y optimizar recursos con agilidad técnica.",
      highlights: ["Diseño de flujos de trabajo", "Control de calidad y datos masivos", "Liderazgo centrado en metas"]
    }
  ]
};

export const COMPETENCIES_DATA: Competency[] = [
  {
    id: "atencion-ciudadana",
    icon: "groups",
    title: "Atención Ciudadana y RR.PP.",
    description: "Gestión eficaz de la interfaz entre la institución y el público, garantizando respuestas oportunas y trato digno.",
    details: [
      "Diseño e implementación de ventanillas únicas de atención.",
      "Atención directa a ciudadanos con enfoque de calidez y efectividad.",
      "Manejo de protocolo de comunicación asertiva e institucional.",
      "Atención y canalización ágil de solicitudes, quejas y sugerencias."
    ],
    tags: ["Ventanilla Única", "Servicio Público", "Relaciones Públicas", "Empatía"]
  },
  {
    id: "coordinacion-operativa",
    icon: "account_tree",
    title: "Coordinación Operativa y Administrativa",
    description: "Optimización de flujos de trabajo, administración de recursos y alineación de equipos hacia objetivos comunes.",
    details: [
      "Reorganización de procesos internos para eliminar cuellos de botella.",
      "Gestión de recursos materiales y humanos con máxima transparencia.",
      "Estandarización de itinerarios de trabajo y logística operativa.",
      "Monitoreo constante de indicadores de rendimiento y productividad."
    ],
    tags: ["Procesos", "Administración", "Logística", "Indicadores"]
  },
  {
    id: "liderazgo-equipo",
    icon: "diversity_3",
    title: "Liderazgo y Trabajo en Equipo",
    description: "Fomento de un clima organizacional colaborativo, motivación de personal y resolución constructiva de conflictos.",
    details: [
      "Coordinación de personal administrativo y técnico multidisciplinario.",
      "Resolución pacífica e institucional de desavenencias laborales.",
      "Fomento de un ambiente de trabajo inclusivo y orientado a metas.",
      "Promoción de la puntualidad, compromiso y valores éticos."
    ],
    tags: ["Liderazgo", "Clima Laboral", "Cohesión", "Ética"]
  },
  {
    id: "gestion-institucional",
    icon: "fact_check",
    title: "Gestión Institucional y Verificación",
    description: "Aseguramiento del cumplimiento normativo, evaluación de procesos y diseño de estrategias de mejora continua.",
    details: [
      "Verificación de expedientes oficiales bajo normatividad vigente.",
      "Auditoría preventiva de trámites y respuesta gubernamental.",
      "Redacción de informes ejecutivos y memorias de gestión.",
      "Alineación de objetivos locales a la planeación estratégica global."
    ],
    tags: ["Auditoría", "Normatividad", "Verificación", "Mejora Continua"]
  },
  {
    id: "capacitacion-rrpp",
    icon: "school",
    title: "Capacitación y Relaciones Públicas",
    description: "Desarrollo de talento humano, transmisión de conocimientos técnicos y construcción de alianzas estratégicas.",
    details: [
      "Facilitación de cursos sobre trato digno y ética en la función pública.",
      "Enlace con dependencias públicas, asociaciones y sectores sociales.",
      "Inducción de nuevo personal en normatividad y plataformas internas.",
      "Representación institucional con alto perfil diplomático."
    ],
    tags: ["Capacitación", "Tallerista", "Alianzas", "Enlace"]
  },
  {
    id: "herramientas-digitales",
    icon: "devices",
    title: "Manejo de Herramientas Digitales",
    description: "Dominio avanzado de MS Office y plataformas de gestión para eficientar el análisis y reporte de datos operativos.",
    details: [
      "Dominio de Microsoft Office (Excel analítico, Word normativo, PowerPoint).",
      "Sistemas de captura masiva de datos y validación de expedientes.",
      "Generación de reportes cuantitativos y cualitativos para toma de decisiones.",
      "Adopción rápida de software institucional y sistemas gubernamentales."
    ],
    tags: ["MS Office", "Captura Masiva", "Bases de Datos", "Reportes"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "derecho",
    degree: "Licenciatura en Derecho",
    institution: "Formación Universitaria",
    description: "Base jurídica sólida para el análisis normativo y la gestión institucional.",
    icon: "gavel",
    badgeColorClass: "bg-[#001944] text-white",
    keySkills: ["Derecho Administrativo", "Garantías Constitucionales", "Dictaminación", "Marco Regulatorio"]
  },
  {
    id: "enfermeria",
    degree: "Diplomado Técnico en Enfermería",
    institution: "Certificación Técnica en Salud",
    description: "Competencias en atención directa, empatía y manejo de situaciones críticas.",
    icon: "health_and_safety",
    badgeColorClass: "bg-[#d5e0f7] text-[#111c2c]",
    keySkills: ["Atención Directa", "Gestión de Crisis", "Soporte Vital", "Humanización del Servicio"]
  },
  {
    id: "serigrafia",
    degree: "Diplomado Técnico en Serigrafía",
    institution: "Especialización Técnica",
    description: "Habilidades técnicas en producción visual y atención al detalle gráfico.",
    icon: "print",
    badgeColorClass: "bg-[#eceef0] text-[#191c1e]",
    keySkills: ["Producción Gráfica", "Atención al Detalle", "Material Institucional", "Control de Calidad"]
  },
  {
    id: "captura",
    degree: "Diplomado en Captura de Datos",
    institution: "Capacitación Operativa Avanzada",
    description: "Agilidad administrativa y precisión en el manejo de información institucional.",
    icon: "keyboard",
    badgeColorClass: "bg-[#eceef0] text-[#191c1e]",
    keySkills: ["Agilidad de Captura", "Bases de Datos", "Verificación Documental", "Sistematización"]
  }
];

export const SUCCESS_CASES_DATA: SuccessCase[] = [
  {
    id: "ventanilla-unica",
    title: "Optimización de Ventanilla Única de Atención",
    category: "Gestión Pública & Eficiencia",
    impact: "Reducción del 45% en tiempos de espera y 98% de índice de satisfacción",
    problem: "Saturación continua en módulos de atención al ciudadano con tiempos de respuesta superiores a 2 horas y descontento generalizado.",
    solution: "Diseño e implementación de un protocolo de atención escalonada, reorganizando filas según la complejidad del trámite e instalando un módulo de orientación rápida.",
    metrics: [
      { label: "Tiempo de espera promedio", value: "-45%" },
      { label: "Atenciones diarias", value: "350+ usuarios" },
      { label: "Satisfacción medida", value: "98%" }
    ],
    tags: ["Atención Ciudadana", "Optimización", "Servicio Público"]
  },
  {
    id: "protocolo-crisis",
    title: "Protocolo de Mediación y Empatía Institucional",
    category: "Humanización y Salud",
    impact: "100% de desacuerdos resueltos mediante concertación pacífica",
    problem: "Situaciones de alta tensión y fricción directa entre ciudadanos solicitantes y servidores públicos en trámites normativos de alto impacto social.",
    solution: "Fusionando las técnicas de contención del área de Enfermería con el fundamento legal del Derecho, se estableció una guía de escucha activa y diálogo informado.",
    metrics: [
      { label: "Incidentes escalados", value: "0%" },
      { label: "Servidores capacitados", value: "120+" },
      { label: "Atención prioritaria a vulnerables", value: "100%" }
    ],
    tags: ["Enfermería y Empatía", "Mediación", "Derecho"]
  },
  {
    id: "digitalizacion-expedientes",
    title: "Auditoría e Inventario de Expedientes Institucionales",
    category: "Tecnología & Transparencia",
    impact: "Sistematización de más de 12,000 registros con 99.8% de precisión",
    problem: "Expedientes en papel desorganizados que ralentizaban las auditorías preventivas y la expedición de constancias oficiales.",
    solution: "Coordinación de un plan intensivo de captura de datos y verificación documental en matriz Excel y base centralizada con resguardo estructurado.",
    metrics: [
      { label: "Registros sistematizados", value: "12,000+" },
      { label: "Exactitud de datos", value: "99.8%" },
      { label: "Ahorro de búsqueda", value: "60%" }
    ],
    tags: ["Captura de Datos", "Auditoría", "MS Office"]
  }
];

export const CONTACT_INFO = {
  location: "México",
  email: "contacto@marianosaucedo.com",
  availability: "Disponible para asesoría, gestión pública y liderazgo de proyectos institucionales."
};
