/* =========================================================
   Blueprint Apps & Web — script
   ========================================================= */

/* ---------- CONFIGURACIÓN: pon aquí tu teléfono ----------
   Solo números, con el código de país 1 de EE. UU.
   Ejemplo: "15755551234"  →  se muestra como (575) 555-1234
   Mientras esté vacío, el botón de WhatsApp lleva al formulario. */
const TELEFONO = "15753125030";

(() => {
  "use strict";

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* =========================================================
     TEXTOS EN ESPAÑOL (el inglés ya está en el HTML)
     ========================================================= */
  const ES = {
    "skip": "Saltar al contenido",
    "nav.services": "Servicios",
    "nav.demo": "Demo",
    "nav.examples": "Ejemplos",
    "nav.pricing": "Precios",
    "nav.process": "Cómo trabajamos",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Diseño web en Las Cruces, NM",
    "hero.title": "Páginas web y apps a la medida para negocios e iglesias",
    "hero.lead": "Sitios rápidos, modernos y fáciles de usar, para que tus clientes y tu congregación te encuentren, confíen en ti y te contacten.",
    "hero.cta1": "Pide tu cotización gratis",
    "hero.cta2": "Ver ejemplos",
    "hero.p1": "Perfecta en celular",
    "hero.p2": "Español e inglés",
    "hero.p3": "Trato directo",
    "serv.eyebrow": "Servicios",
    "serv.title": "Todo lo que necesitas para verte bien en internet",
    "serv.lead": "Desde una página sencilla hasta una app que organiza tu trabajo diario.",
    "serv.1.t": "Páginas para negocios",
    "serv.1.d": "Un sitio profesional que explica lo que haces, muestra tus servicios y convierte visitas en llamadas, mensajes y clientes.",
    "serv.2.t": "Páginas para iglesias",
    "serv.2.d": "Horarios de servicio, ministerios, eventos, transmisiones en vivo y donaciones, todo en un lugar fácil de encontrar.",
    "serv.3.t": "Apps a la medida",
    "serv.3.d": "Inventarios, citas, pedidos o control interno. Herramientas hechas para tu forma de trabajar, sin pagar licencias caras.",
    "serv.4.t": "Mantenimiento mensual",
    "serv.4.d": "Actualizamos textos, fotos y horarios, cuidamos la seguridad y nos aseguramos de que todo siga funcionando.",
    "demo.eyebrow": "Demo en vivo",
    "demo.title": "Pruébala: una mini app de inventario real",
    "demo.lead": "Esto no es una imagen. Busca productos, suma o resta existencias y mira cómo la app te avisa cuando algo está por acabarse.",
    "inv.store": "Ferretería El Desierto",
    "inv.live": "En vivo",
    "inv.s1": "Productos",
    "inv.s2": "Unidades",
    "inv.s3": "Por resurtir",
    "inv.searchLbl": "Buscar",
    "inv.only": "Solo por resurtir",
    "inv.reset": "Reiniciar",
    "inv.h1": "Producto",
    "inv.h2": "Mínimo",
    "inv.h3": "Existencias",
    "inv.h4": "Estado",
    "demo.note": "¿Te imaginas algo así para tu negocio? Lo adaptamos a tus productos, tu equipo y tu forma de trabajar.",
    "ba.eyebrow": "Antes y después",
    "ba.title": "¿Así te ven tus clientes en el celular?",
    "ba.lead": "La mayoría de las personas te buscan desde su celular. Toca los botones o desliza sobre el teléfono para ver la diferencia entre una página vieja y una hecha por nosotros.",
    "ba.before": "Antes",
    "ba.after": "Después",
    "new.brand": "Mi Negocio",
    "new.rating": "Abierto hoy · 8 AM – 6 PM",
    "new.title": "Servicio confiable en Las Cruces, NM",
    "new.text": "Agenda en línea en menos de un minuto. Te confirmamos por WhatsApp.",
    "new.call": "Llamar",
    "new.open": "Abierto hoy · 8:00 am – 6:00 pm",
    "new.f1": "Respuesta rápida",
    "new.f2": "Precios claros",
    "new.f3": "Garantía",
    "new.btn": "Agenda tu cita",
    "old.title": "¡¡¡Bienvenidos a la página de Mi Negocio!!!",
    "old.marquee": "*** OFERTAS ESPECIALES *** LLÁMENOS HOY *** ABIERTO DE LUNES A VIERNES ***",
    "old.n1": "Inicio",
    "old.n2": "Quiénes somos",
    "old.n3": "Servicios",
    "old.n4": "Contacto",
    "old.img": "[ FOTO ]",
    "old.t1": "Horario:",
    "old.v1": "L-V 9am a 5pm",
    "old.t2": "Teléfono:",
    "old.v2": "Llame para info",
    "old.t3": "Correo:",
    "old.p": "Somos una empresa con más de 20 años de experiencia sirviendo a la comunidad. Ofrecemos los mejores servicios a los mejores precios. Para más información favor de llamar a la oficina en horario de oficina o mandar un correo electrónico. ¡Gracias por su visita y vuelva pronto!",
    "old.build": "PÁGINA EN CONSTRUCCIÓN",
    "old.new": "¡NUEVO!",
    "old.guest": "Firme nuestro libro de visitas",
    "old.counter": "Usted es el visitante No.",
    "old.best": "Mejor visto en Internet Explorer a 800x600",
    "ba.zoom": "🔍 ¿Y las letras?",
    "ba.hint": "👆 Desliza",
    "ba.meter": "Primera impresión de tu cliente",
    "ba.listOld": "Lo que ve tu cliente con una página vieja:",
    "ba.listNew": "Lo que ve tu cliente con una página nueva:",
    "ba.o1": "Letras diminutas: tiene que hacer zoom para leer",
    "ba.n1": "Se lee perfecto en el celular, sin hacer zoom",
    "ba.o2": "No hay botón para llamar ni escribir",
    "ba.n2": "Llama o escribe por WhatsApp con un solo toque",
    "ba.o3": "Se ve abandonada y genera desconfianza",
    "ba.n3": "Diseño moderno y reseñas que generan confianza",
    "ba.o4": "Difícil de encontrar en Google desde el celular",
    "ba.n4": "Lista para aparecer en Google (SEO local)",
    "ba.cta": "Quiero mi página nueva",
    "ex.eyebrow": "Ejemplos",
    "ex.title": "Ejemplos de nuestro trabajo",
    "ex.lead": "Ábrelos y recórrelos: son páginas y apps que funcionan, también en tu celular.",
    "ex1.tag": "Iglesia",
    "ex1.title": "Iglesia Comunidad de Gracia",
    "ex1.text": "Horarios, transmisión en vivo, eventos, peticiones de oración y donaciones en línea.",
    "ex.view": "Ver ejemplo en vivo",
    "ex2.tag": "Negocio",
    "ex2.title": "Sol del Valle Auto Repair",
    "ex2.text": "Página bilingüe para un taller mecánico: servicios con precios, horario y formulario para agendar cita.",
    "ex3.tag": "App",
    "ex3.title": "Inventario · Ferretería El Desierto",
    "ex3.text": "App que funciona: existencias, valor del inventario, alertas de resurtido y alta de productos. Español e inglés.",
    "ex.note": "Los negocios y datos de los ejemplos son ficticios.",
    "pr.eyebrow": "Precios",
    "pr.title": "Precios claros, sin sorpresas",
    "pr.lead": "Cada proyecto es diferente, pero aquí tienes un punto de partida. La cotización es gratis.",
    "promo.title": "Oferta de lanzamiento",
    "promo.text": "30% de descuento para nuestros <b>primeros 3 clientes</b> a cambio de una reseña en Google.",
    "promo.btn": "Quiero mi lugar",
    "pr.from": "desde",
    "pr.1.d": "Una página sencilla y profesional para empezar ya.",
    "pr.1.a": "1 página tipo landing",
    "pr.1.b": "Botones de llamar y WhatsApp",
    "pr.1.c": "Lista en pocos días",
    "pr.cta": "Cotizar",
    "pr.2.t": "Básica",
    "pr.2.d": "Lo esencial para un negocio o una iglesia.",
    "pr.2.a": "Hasta 4 secciones o páginas",
    "pr.2.b": "Formulario de contacto",
    "pr.2.c": "Mapa y horarios",
    "pr.pop": "Más popular",
    "pr.3.t": "Completa",
    "pr.3.d": "Un sitio completo para crecer.",
    "pr.3.a": "Hasta 8 páginas",
    "pr.3.b": "Galería, eventos o menú",
    "pr.3.c": "En español e inglés",
    "pr.4.d": "Una herramienta a la medida de tu operación.",
    "pr.4.a": "Inventario, citas o pedidos",
    "pr.4.b": "Funciona en celular y computadora",
    "pr.4.c": "Capacitación para tu equipo",
    "pr.5.t": "Mantenimiento",
    "pr.month": "/mes",
    "pr.5.d": "Tranquilidad cada mes.",
    "pr.5.a": "Cambios de textos y fotos",
    "pr.5.b": "Revisión de seguridad",
    "pr.5.c": "Soporte por WhatsApp",
    "pr.tax": "Precios en dólares (USD). No incluyen el GRT (Gross Receipts Tax) de Nuevo México.",
    "inc.title": "Qué incluye cada proyecto",
    "inc.1": "Diseño adaptado a celular, tablet y computadora",
    "inc.2": "Carga rápida y optimizada",
    "inc.3": "SEO local básico para que te encuentren en Google",
    "inc.4": "Botones de llamada, WhatsApp y mapa",
    "inc.5": "Certificado de seguridad (https)",
    "inc.6": "Ayuda para conectar tu dominio",
    "inc.7": "2 rondas de cambios",
    "inc.8": "Capacitación para usar tu sitio",
    "proc.eyebrow": "Cómo trabajamos",
    "proc.title": "Un proceso simple, en 5 pasos",
    "proc.1.t": "Platicamos",
    "proc.1.d": "Nos cuentas de tu negocio o iglesia y qué quieres lograr. Sin costo y sin compromiso.",
    "proc.2.t": "Propuesta y 50% de anticipo",
    "proc.2.d": "Te enviamos una propuesta clara con precio y tiempos. Al aprobarla, se da el 50% para comenzar.",
    "proc.3.t": "Construimos",
    "proc.3.d": "Diseñamos y programamos tu página o app, y te mantenemos al tanto del avance.",
    "proc.4.t": "Revisamos",
    "proc.4.d": "La revisamos juntos, con 2 rondas de cambios incluidas para dejarla a tu gusto.",
    "proc.5.t": "Publicamos",
    "proc.5.d": "Tu sitio sale en línea, te enseñamos a usarlo y se liquida el 50% restante.",
    "faq.eyebrow": "Preguntas frecuentes",
    "faq.title": "Lo que más nos preguntan",
    "faq.lead": "Respuestas cortas y claras. Si tu pregunta no está aquí, escríbenos.",
    "faq.1.q": "¿Cuánto cuesta una página web en Las Cruces?",
    "faq.1.a": "Nuestras páginas empiezan en $275 (Express, una sola página). La Básica empieza en $500, la Completa en $950 y una app a la medida en $1,200. La cotización es gratis y el precio final queda por escrito antes de empezar.",
    "faq.2.q": "¿Cuánto tiempo tarda?",
    "faq.2.a": "Una página Express queda lista en pocos días. Los sitios más grandes y las apps dependen de cuántas páginas y funciones lleven; la propuesta que te enviamos incluye las fechas.",
    "faq.3.q": "¿Necesito tener un dominio (.com)?",
    "faq.3.a": "No para empezar. Todos los proyectos incluyen ayuda para conectar tu dominio, y si todavía no tienes uno, te ayudamos a escogerlo y registrarlo.",
    "faq.4.q": "¿Cómo se paga?",
    "faq.4.a": "50% de anticipo al aprobar la propuesta y el 50% restante cuando tu sitio sale en línea. Los precios son en dólares y no incluyen el GRT de Nuevo México.",
    "faq.5.q": "¿Puedo hacer cambios yo mismo después?",
    "faq.5.a": "Sí. Al publicar te enseñamos a usar tu sitio. Si prefieres que nosotros hagamos los cambios de textos y fotos, el plan de mantenimiento cuesta $35 al mes e incluye soporte por WhatsApp.",
    "faq.6.q": "¿Hacen páginas en español y en inglés?",
    "faq.6.a": "Sí. Te atendemos en el idioma que prefieras y podemos hacer tu página en español, en inglés o en los dos. El plan Completo ya incluye los dos idiomas.",
    "about.eyebrow": "Sobre nosotros",
    "about.title": "Un equipo local, enfocado en resultados",
    "about.text": "Somos un estudio de diseño web con base en Las Cruces, NM. Creamos sitios y aplicaciones que ayudan a negocios e iglesias de la región a proyectar una imagen profesional, llegar a más personas y organizar mejor su operación.",
    "about.p2": "Trabajamos de cerca con cada cliente, en inglés o en español, con comunicación clara, tiempos definidos y atención personalizada de principio a fin.",
    "about.f1": "Con base en Las Cruces, NM",
    "about.f2": "Servicio bilingüe",
    "about.f3": "Atención personalizada",
    "rev.title": "Reseñas de clientes",
    "rev.text": "Estamos trabajando con nuestros primeros clientes y sus reseñas aparecerán aquí. ¿Quieres ser uno de ellos? Aprovecha la <a href=\"#precios\">oferta de lanzamiento</a>.",
    "ct.eyebrow": "Contacto",
    "ct.title": "Platiquemos de tu proyecto",
    "ct.lead": "Cuéntanos qué necesitas y te preparamos una cotización gratis, sin compromiso.",
    "ct.email": "Correo",
    "ct.phone": "Teléfono",
    "ct.area": "Zona",
    "ct.areaV": "Las Cruces, NM y alrededores",
    "ct.resp": "Respuesta",
    "ct.respV": "Respondemos en menos de 24 horas",
    "ct.waBtn": "Escríbenos por WhatsApp",
    "ct.name": "Nombre",
    "ct.contact": "Teléfono o correo",
    "ct.need": "¿Qué necesitas?",
    "ct.send": "Enviar mensaje",
    "ct.ok": "¡Gracias! Recibimos tu mensaje y te contactaremos muy pronto.",
    "ct.err": "No se pudo enviar desde aquí. Escríbenos a blueprintappsweb@gmail.com o por WhatsApp.",
    "foot.tag": "Páginas web y apps a la medida para negocios e iglesias.",
    "ct.privacy": "Al enviar, aceptas nuestra <a href=\"privacy.html#es\">política de privacidad</a>.",
    "foot.privacy": "<a href=\"privacy.html#es\">Política de privacidad</a>",
    "foot.made": "Hecho en Las Cruces, NM",
    "inv.search": "Buscar producto o código…",
    "ct.needPh": "Ej.: una página para mi taller con botón de WhatsApp…",
    "nav.menu": "Abrir menú",
    "hero.down": "Bajar",
    "ba.switch": "Elegir vista",
    "ba.range": "Comparar antes y después",
    "meta.title": "Diseño web en Las Cruces, NM | Blueprint Apps & Web",
    "meta.desc": "Diseño web en Las Cruces, NM: páginas web y apps a la medida para negocios e iglesias. Rápidas, modernas, bilingües y perfectas en celular. Pide tu cotización gratis."
  };

  /* Textos que genera JavaScript (demo, formulario, etc.) */
  const STR = {
    es: {
      langAria: "Switch to English",
      menuOpen: "Abrir menú", menuClose: "Cerrar menú",
      min: "Mín.", ok: "OK", low: "Por resurtir",
      dec: "Restar uno a {n}", inc: "Sumar uno a {n}",
      alertLow: "<b>{c} {p} por resurtir:</b> {list}",
      prod1: "producto", prodN: "productos",
      alertOk: "<b>Todo en orden.</b> Ningún producto está por debajo del mínimo.",
      empty: "No se encontraron productos.",
      waMsg: "Hola, vi su página y me interesa una cotización.",
      planMsg: "Hola, me interesa el plan {p}. ",
      promoMsg: "Hola, me interesa la oferta de lanzamiento (30% de descuento a cambio de una reseña). ",
      sending: "Enviando…", phoneMissing: "[TU TELÉFONO]",
      mBad: "Mala 😕", mOk: "Regular 🙂", mGreat: "Excelente 😍"
    },
    en: {
      langAria: "Cambiar a español",
      menuOpen: "Open menu", menuClose: "Close menu",
      min: "Min.", ok: "OK", low: "Restock",
      dec: "Remove one {n}", inc: "Add one {n}",
      alertLow: "<b>{c} {p} to restock:</b> {list}",
      prod1: "product", prodN: "products",
      alertOk: "<b>All good.</b> No product is below its minimum.",
      empty: "No products found.",
      waMsg: "Hi, I saw your website and I'd like a quote.",
      planMsg: "Hi, I'm interested in the {p} plan. ",
      promoMsg: "Hi, I'm interested in the launch offer (30% off in exchange for a review). ",
      sending: "Sending…", phoneMissing: "[YOUR PHONE]",
      mBad: "Poor 😕", mOk: "Fair 🙂", mGreat: "Excellent 😍"
    }
  };
  const PLAN_EN = { "Básica": "Basic", "Completa": "Complete", "Mantenimiento": "Maintenance" };

  /* Guardamos el inglés original del HTML */
  const EN = {
    "meta.title": document.title,
    "meta.desc": $('meta[name="description"]').content
  };
  const EN_PH = {}, EN_ARIA = {};
  $$("[data-i18n]").forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });
  $$("[data-i18n-ph]").forEach(el => { EN_PH[el.dataset.i18nPh] = el.placeholder; });
  $$("[data-i18n-aria]").forEach(el => { EN_ARIA[el.dataset.i18nAria] = el.getAttribute("aria-label"); });

  // Idioma: 1) ?lang= en la dirección, 2) lo que la persona eligió con el botón ES/EN,
  // 3) el idioma de su navegador (español si empieza con "es"), 4) inglés.
  const pickLang = () => {
    const urlLang = new URLSearchParams(location.search).get("lang");
    if (urlLang === "en" || urlLang === "es") return urlLang;
    try { const saved = localStorage.getItem("bp-lang"); if (saved === "en" || saved === "es") return saved; } catch (e) {}
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    return nav.toLowerCase().startsWith("es") ? "es" : "en";
  };
  let lang = pickLang();
  const t = (k, vars = {}) => STR[lang][k].replace(/\{(\w+)\}/g, (_, v) => vars[v] ?? "");

  function applyLang(l) {
    lang = l;
    root.lang = l;
    $$("[data-i18n]").forEach(el => {
      const k = el.dataset.i18n;
      const v = l === "es" ? (ES[k] ?? EN[k]) : EN[k];
      if (v != null && el.innerHTML !== v) el.innerHTML = v;
    });
    $$("[data-i18n-ph]").forEach(el => {
      const k = el.dataset.i18nPh;
      el.placeholder = l === "es" ? (ES[k] ?? EN_PH[k]) : EN_PH[k];
    });
    $$("[data-i18n-aria]").forEach(el => {
      const k = el.dataset.i18nAria;
      el.setAttribute("aria-label", l === "es" ? (ES[k] ?? EN_ARIA[k]) : EN_ARIA[k]);
    });
    const dict = l === "es" ? ES : EN;
    document.title = dict["meta.title"];
    $('meta[name="description"]').content = dict["meta.desc"];
    $("#menu").setAttribute("aria-label", l === "es" ? "Principal" : "Main");
    const canon = $('link[rel="canonical"]');
    if (canon) canon.href = location.origin + "/" + (l === "es" ? "?lang=es" : "");
    $("#langBtn").setAttribute("aria-label", t("langAria"));
    updateMenuAria();
    setupPhone();
    renderInventory();
    if (typeof baPos !== "undefined") setPos(baPos);
    root.classList.remove("i18n-wait");
  }

  /* =========================================================
     Teléfono / WhatsApp
     ========================================================= */
  function setupPhone() {
    const digits = TELEFONO.replace(/\D/g, "");
    const pretty = digits.length === 11
      ? `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`
      : digits.length === 10 ? `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}` : "";
    const full = digits.length === 10 ? "1" + digits : digits;
    $$(".js-phone").forEach(el => { el.textContent = pretty || t("phoneMissing"); });
    $$(".js-tel").forEach(a => { a.href = full ? `tel:+${full}` : "#contacto"; });
    $$(".js-wa").forEach(a => {
      if (full) {
        a.href = `https://wa.me/${full}?text=${encodeURIComponent(t("waMsg"))}`;
        a.target = "_blank";
      } else {
        a.href = "#contacto";
        a.removeAttribute("target");
      }
    });
  }

  /* =========================================================
     Encabezado y menú
     ========================================================= */
  const header = $(".site-header");
  const menuBtn = $("#menuBtn");
  const nav = $("#menu");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function updateMenuAria() {
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-label", open ? t("menuClose") : t("menuOpen"));
  }
  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
    updateMenuAria();
  }
  menuBtn.addEventListener("click", () => setMenu(menuBtn.getAttribute("aria-expanded") !== "true"));
  $$("a", nav).forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  $("#langBtn").addEventListener("click", () => {
    const next = lang === "es" ? "en" : "es";
    try { localStorage.setItem("bp-lang", next); } catch (e) {}   // recordar la elección
    applyLang(next);
  });

  /* =========================================================
     Portada: largo de cada trazo para la animación SVG
     ========================================================= */
  $$(".plan .draw").forEach(el => {
    try {
      const len = Math.ceil(el.getTotalLength()) + 2;
      el.style.setProperty("--len", len);
    } catch (e) {}
  });

  /* Repetir la animación de la portada mientras se ve en pantalla */
  const plan = $(".plan");
  if (plan && !reduceMotion.matches) {
    let planVisible = true;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([en]) => { planVisible = en.isIntersecting; }).observe(plan);
    }
    setInterval(() => {
      if (!planVisible || document.hidden) return;
      plan.classList.add("out");
      setTimeout(() => {
        plan.classList.remove("play");
        void plan.getBoundingClientRect();   // reinicia las animaciones
        plan.classList.add("play");
        plan.classList.remove("out");
      }, 600);
    }, 8500);
  }

  /* =========================================================
     Aparición al hacer scroll
     ========================================================= */
  const reveals = $$(".reveal");
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    reveals.forEach(el => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(el => io.observe(el));
  }

  /* =========================================================
     DEMO: inventario
     ========================================================= */
  const START = [
    { id: 1, sku: "TOR-014", es: "Tornillos 1/4\" (caja)", en: "1/4\" screws (box)", qty: 42, min: 20 },
    { id: 2, sku: "CIN-002", es: "Cinta de aislar negra", en: "Black electrical tape", qty: 8, min: 10 },
    { id: 3, sku: "PIN-110", es: "Pintura blanca (galón)", en: "White paint (gallon)", qty: 4, min: 6 },
    { id: 4, sku: "BRO-020", es: "Brocha de 2\"", en: "2\" paint brush", qty: 25, min: 10 },
    { id: 5, sku: "LED-060", es: "Foco LED 60W", en: "60W LED bulb", qty: 13, min: 12 },
    { id: 6, sku: "MAN-050", es: "Manguera de 50 ft", en: "50 ft garden hose", qty: 5, min: 4 },
    { id: 7, sku: "GUA-007", es: "Guantes de trabajo", en: "Work gloves", qty: 30, min: 15 },
    { id: 8, sku: "SIL-300", es: "Silicón transparente", en: "Clear silicone", qty: 9, min: 8 }
  ];
  let items = START.map(i => ({ ...i }));
  const list = $("#invList");
  const search = $("#invSearch");
  const onlyLow = $("#invLow");
  const alertBox = $("#invAlert");
  let lastLowCount = null;

  const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const isLow = i => i.qty <= i.min;
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function renderInventory(focus) {
    if (!list) return;
    const q = norm(search.value.trim());
    const shown = items.filter(i =>
      (!q || norm(i[lang]).includes(q) || norm(i.sku).includes(q)) && (!onlyLow.checked || isLow(i))
    );

    list.innerHTML = shown.length ? shown.map(i => {
      const name = esc(i[lang]);
      return `<li class="row${isLow(i) ? " low" : ""}" data-id="${i.id}">
        <div class="r-name"><strong>${name}</strong><span class="sku">${i.sku}</span></div>
        <div class="r-min"><span class="r-lbl">${t("min")} </span>${i.min}</div>
        <div class="r-qty">
          <button type="button" data-act="dec" aria-label="${esc(t("dec", { n: i[lang] }))}">−</button>
          <output aria-live="polite">${i.qty}</output>
          <button type="button" data-act="inc" aria-label="${esc(t("inc", { n: i[lang] }))}">+</button>
        </div>
        <div class="r-status"><span class="badge">${isLow(i) ? t("low") : t("ok")}</span></div>
      </li>`;
    }).join("") : `<li class="empty">${t("empty")}</li>`;

    // estadísticas
    const low = items.filter(isLow);
    $("#stItems").textContent = items.length;
    $("#stUnits").textContent = items.reduce((s, i) => s + i.qty, 0).toLocaleString(lang === "es" ? "es-MX" : "en-US");
    $("#stLow").textContent = low.length;
    $("#stLow").parentElement.classList.toggle("zero", low.length === 0);

    // alerta
    if (low.length) {
      alertBox.className = "app-alert";
      alertBox.innerHTML = "<span aria-hidden='true'>⚠️</span><span>" + t("alertLow", {
        c: low.length, p: low.length === 1 ? t("prod1") : t("prodN"),
        list: low.map(i => esc(i[lang])).join(", ")
      }) + "</span>";
    } else {
      alertBox.className = "app-alert ok";
      alertBox.innerHTML = "<span aria-hidden='true'>✅</span><span>" + t("alertOk") + "</span>";
    }
    if (lastLowCount !== null && lastLowCount !== low.length && !reduceMotion.matches) {
      void alertBox.offsetWidth; alertBox.classList.add("flash");
    }
    lastLowCount = low.length;

    // devolver el foco al botón que se presionó
    if (focus) {
      const btn = list.querySelector(`[data-id="${focus.id}"] [data-act="${focus.act}"]`);
      if (btn) btn.focus();
      const out = list.querySelector(`[data-id="${focus.id}"] output`);
      if (out && !reduceMotion.matches) out.classList.add("bump");
    }
  }

  list.addEventListener("click", e => {
    const btn = e.target.closest("button[data-act]");
    if (!btn) return;
    const id = +btn.closest(".row").dataset.id;
    const item = items.find(i => i.id === id);
    const act = btn.dataset.act;
    item.qty = Math.max(0, item.qty + (act === "inc" ? 1 : -1));
    renderInventory({ id, act });
  });
  search.addEventListener("input", () => renderInventory());
  onlyLow.addEventListener("change", () => renderInventory());
  $("#invReset").addEventListener("click", () => {
    items = START.map(i => ({ ...i }));
    search.value = ""; onlyLow.checked = false;
    renderInventory();
  });

  /* =========================================================
     Antes y después (celular)
     ========================================================= */
  const ba = $("#ba");
  const baRange = $("#baRange");
  const baWrap = $("#baWrap");
  const oldPage = $("#oldPage");
  const meterFill = $("#meterFill");
  const meterLbl = $("#meterLbl");
  let baState = null, baAnim = null, baPos = 100;

  // la página vieja es de 760px: se encoge al ancho del teléfono
  const fitOld = () => oldPage.style.setProperty("--s", (ba.clientWidth / 760).toFixed(4));
  fitOld();
  if ("ResizeObserver" in window) new ResizeObserver(fitOld).observe(ba);

  function setPos(p) {
    p = Math.min(100, Math.max(0, p));
    baPos = p;
    ba.style.setProperty("--pos", (Math.round(p * 10) / 10) + "%");
    // que el botón naranja no se salga de la pantalla en las orillas
    const w = ba.clientWidth || 296, x = p / 100 * w;
    ba.style.setProperty("--kx", (Math.min(w - 30, Math.max(30, x)) - x).toFixed(1) + "px");
    baRange.value = Math.round(p);
    // medidor: 100 = todo "antes", 0 = todo "después"
    const q = 100 - p;
    const hue = Math.round(q * 1.4);                 // 0 rojo → 140 verde
    baWrap.style.setProperty("--meter", `hsl(${hue} 70% 38%)`);
    baWrap.style.setProperty("--q", Math.max(5, q) + "%");
    meterLbl.textContent = q < 35 ? t("mBad") : q < 70 ? t("mOk") : t("mGreat");
    const state = p >= 50 ? "old" : "new";
    if (state !== baState) {
      baState = state;
      baWrap.classList.toggle("is-old", state === "old");
      baWrap.classList.toggle("is-new", state === "new");
      $$(".ba-switch button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.go === state)));
      if (!reduceMotion.matches) $$("#diffList li").forEach((li, k) => {
        li.classList.remove("pop"); li.style.setProperty("--k", k); void li.offsetWidth; li.classList.add("pop");
      });
    }
  }
  function animateTo(target, ms) {
    cancelAnimationFrame(baAnim);
    if (reduceMotion.matches) { setPos(target); return; }
    const from = baPos, t0 = performance.now();
    const ease = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    const step = now => {
      const k = Math.min(1, (now - t0) / ms);
      setPos(from + (target - from) * ease(k));
      if (k < 1) baAnim = requestAnimationFrame(step);
    };
    baAnim = requestAnimationFrame(step);
  }
  const touched = () => { ba.classList.add("touched"); cancelAnimationFrame(baAnim); autoplayDone = true; };

  let dragging = false;
  const fromEvent = e => {
    const r = ba.getBoundingClientRect();
    setPos(((e.clientX - r.left) / r.width) * 100);
  };
  ba.addEventListener("pointerdown", e => { dragging = true; touched(); ba.setPointerCapture?.(e.pointerId); fromEvent(e); });
  ba.addEventListener("pointermove", e => { if (dragging) fromEvent(e); });
  ["pointerup", "pointercancel", "lostpointercapture"].forEach(ev => ba.addEventListener(ev, () => { dragging = false; }));
  baRange.addEventListener("input", () => { touched(); setPos(+baRange.value); });
  $$(".ba-switch button").forEach(b => b.addEventListener("click", () => {
    touched(); animateTo(b.dataset.go === "old" ? 100 : 0, 900);
  }));

  setPos(100);

  // Al llegar a la sección: se transforma sola de "antes" a "después"
  let autoplayDone = false;
  if (!reduceMotion.matches && "IntersectionObserver" in window) {
    const aio = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting || autoplayDone) return;
      aio.disconnect();
      setTimeout(() => { if (!autoplayDone) { autoplayDone = true; animateTo(0, 2600); } }, 1400);
    }, { threshold: 0.55 });
    aio.observe(ba);
  }

  /* =========================================================
     Botones de precios → llenan el mensaje del formulario
     ========================================================= */
  const msg = $("#f-mensaje");
  let autoMsg = "";
  $$("[data-plan]").forEach(b => b.addEventListener("click", () => {
    const plan = b.dataset.plan;
    const text = plan === "promo" ? t("promoMsg") : t("planMsg", { p: lang === "en" ? (PLAN_EN[plan] || plan) : plan });
    if (!msg.value.trim() || msg.value === autoMsg) { msg.value = text; autoMsg = text; }
    setTimeout(() => $("#f-nombre").focus({ preventScroll: true }), 600);
  }));

  /* =========================================================
     Formulario: correo (Web3Forms)
     ========================================================= */
  // Clave pública de Web3Forms: los mensajes llegan a blueprintappsweb@gmail.com
  const WEB3FORMS_KEY = "1be60dfe-e63c-44b6-ae41-ea0c7c8fc886";
  const form = $("#contactForm");
  const ok = $("#formOk"), err = $("#formErr");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    ok.hidden = true; err.hidden = true;
    if (!form.reportValidity()) return;
    const fd = new FormData(form);
    if (fd.get("bot-field")) return;               // robot: se ignora en silencio
    const btn = form.querySelector('button[type="submit"]');
    const label = btn.innerHTML;
    btn.disabled = true; btn.textContent = t("sending");

    const nombre = (fd.get("nombre") || "").toString().trim();
    const contacto = (fd.get("contacto") || "").toString().trim();
    const mensaje = (fd.get("mensaje") || "").toString().trim();
    const correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto) ? contacto : "";

    // 1) Correo a tu bandeja (principal)
    const toEmail = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Nuevo mensaje de ${nombre || "un cliente"} – Blueprint Apps & Web`,
        from_name: "Página Blueprint Apps & Web",
        name: nombre,
        ...(correo ? { email: correo } : {}),
        "Teléfono o correo": contacto,
        "Qué necesita": mensaje,
        "Idioma de la página": lang === "en" ? "Inglés" : "Español",
        botcheck: ""
      })
    }).then(r => r.json()).then(d => { if (!d.success) throw new Error(d.message); return true; });

    const sent = await toEmail.catch(() => false);
    if (sent) {
      form.reset(); autoMsg = "";
      ok.hidden = false;
    } else {
      err.hidden = false;
    }
    btn.disabled = false; btn.innerHTML = label;
  });

  /* Año del pie de página */
  $("#year").textContent = new Date().getFullYear();

  /* Arranque */
  applyLang(lang);
})();
