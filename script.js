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
    "nav.apps": "Apps",
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
    "inv.store": "High Desert Hardware",
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
    "ex.lead": "Proyectos reales que ya se usan y apps de muestra que puedes probar. Ábrelos y explóralos, también en tu celular.",
    "ex1.title": "Iglesia Fuente de Vida · Las Cruces",
    "ex1.text": "Página bilingüe para una iglesia local: horarios con cuenta regresiva al próximo servicio, eventos, peticiones de oración y chat.",
    "ex2.title": "App del equipo de alabanza · Fuente de Vida",
    "ex2.text": "Los músicos de la iglesia la usan cada semana: más de 200 cantos con acordes que cambian de tono, listas para el domingo, calendario de turnos y chat del equipo. Funciona en el celular, incluso sin internet.",
    "ex3.tag": "App de demostración",
    "ex3.title": "Inventario · High Desert Hardware",
    "ex3.text": "App que funciona: existencias, valor del inventario, alertas de resurtido y alta de productos. Español e inglés.",
    "ex.note": "La página de la iglesia y la app de alabanza son proyectos reales en uso. Los demás negocios y sus datos son ejemplos ficticios.",
    "pr.eyebrow": "Precios",
    "pr.title": "Precios claros, sin sorpresas",
    "pr.lead": "Cada proyecto es diferente, pero aquí tienes un punto de partida. La cotización es gratis.",
    "promo.title": "Oferta de lanzamiento",
    "promo.text": "30% de descuento para nuestros <b>primeros 3 clientes</b> a cambio de mostrar el proyecto en nuestro portafolio.",
    "promo.spots": "Quedan <b>3 de 3</b> lugares",
    "promo.ends": "Termina el 31 de diciembre de 2026",
    "promo.btn": "Quiero mi lugar",
    "pr.from": "desde",
    "pr.1.d": "Para estar en internet rápido: una página profesional con tu información y botones para contactarte.",
    "pr.1.a": "1 página tipo landing",
    "pr.1.b": "Botones de llamar y WhatsApp",
    "pr.1.c": "Se ve muy bien en el celular",
    "pr.cta": "Cotizar",
    "pr.2.t": "Básica",
    "pr.2.d": "Para un negocio o iglesia que necesita pocas páginas: servicios, horario, mapa y contacto.",
    "pr.2.a": "Hasta 4 secciones o páginas",
    "pr.2.b": "Formulario de contacto",
    "pr.2.c": "Mapa y horarios",
    "pr.pop": "Más popular",
    "pr.3.t": "Completa",
    "pr.3.d": "Para negocios con más que mostrar: más páginas, galería o menú, y en dos idiomas.",
    "pr.3.a": "Hasta 8 páginas",
    "pr.3.b": "Galería, eventos o menú",
    "pr.3.c": "En español e inglés",
    "pr.4.d": "Para dejar las hojas de Excel y el papel: una herramienta hecha a la medida de cómo trabaja tu equipo.",
    "pr.4.a": "Inventario, citas o pedidos",
    "pr.4.b": "Celular y computadora, con su propio ícono",
    "pr.4.c": "Capacitación para tu equipo",
    "pr.5.t": "Mantenimiento",
    "pr.month": "/mes",
    "pr.5.d": "Para páginas web: la mantenemos en línea, segura y al día.",
    "pr.5.a": "Hosting, revisión mensual y respaldo",
    "pr.5.b": "Hasta 2 cambios pequeños al mes",
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
    "faq.1.a": "Nuestras páginas empiezan en $275 (Express, una sola página). La Básica empieza en $500, la Completa en $950 y una app a la medida en $1,500. La cotización es gratis y el precio final queda por escrito antes de empezar.",
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
    "cf.label": "Ejemplos de nuestro trabajo",
    "cf.type": "Tipo de ejemplo",
    "cf.sites": "Páginas web",
    "cf.apps": "Apps a la medida",
    "cf.prev": "Ejemplo anterior",
    "cf.next": "Ejemplo siguiente",
    "app.tag": "Concepto de app",
    "app1.title": "Citas · Mesilla Valley Wellness",
    "app1.text": "Reservas en línea para un estudio de yoga y masajes: el cliente elige el servicio, el día y una hora disponible, y la cita llega a tu calendario.",
    "app2.title": "Cotizaciones · Summit Roofing Co.",
    "app2.text": "Cotizador para una empresa de techos: materiales, mano de obra y margen, con un total listo para enviar al cliente.",
    "app3.title": "Panel de obra · Rio Grande Builders",
    "app3.text": "Avance, tareas pendientes, presupuesto y materiales de un proyecto de construcción, todo en una pantalla.",
    "bk.s1": "Elige el servicio",
    "bk.s2": "Fecha y hora",
    "bk.s3": "Tus datos",
    "bk.s4": "Confirmar",
    "bk.trust": "Reserva segura · Las Cruces, NM",
    "bk.title": "Agenda tu cita",
    "bk.secure": "Tus datos están seguros",
    "bk.pickd": "Elige el día",
    "bk.month": "Diciembre 2026",
    "bk.wd": "<span>Dom</span><span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span>",
    "bk.today": "Ver hoy",
    "bk.pickt": "Elige la hora",
    "bk.day": "Jueves 17 de diciembre",
    "bk.tz": "Horarios en hora de la montaña (MT)",
    "bk.back": "Atrás",
    "bk.consent": "Envíame un recordatorio por mensaje un día antes.",
    "bk.next": "Continuar",
    "qt.s1": "Proyecto",
    "qt.d1": "Datos del proyecto.",
    "qt.s2": "Materiales",
    "qt.d2": "Tejas, membrana y remates.",
    "qt.s3": "Mano de obra",
    "qt.d3": "Cuadrilla y horas.",
    "qt.s4": "Cálculo",
    "qt.d4": "Costos y margen.",
    "qt.s5": "Resumen",
    "qt.d5": "Revisa y envía.",
    "qt.title": "Cotizador",
    "qt.name": "Nombre del proyecto",
    "qt.nameV": "Cambio de techo · Casa Miller",
    "qt.client": "Cliente",
    "qt.dur": "Duración",
    "qt.durV": "4 días",
    "qt.desc": "Descripción (opcional)",
    "qt.descV": "Retirar techo viejo y poner tejas arquitectónicas nuevas, 2,100 ft², con canal de goteo y ventilas.",
    "qt.details": "Detalle del cálculo",
    "qt.cost": "Costo",
    "qt.margin": "Margen",
    "qt.total": "Total cotizado",
    "qt.profitT": "Ganancia",
    "qt.exp": "Ganancia esperada",
    "qt.pm": "30% de margen",
    "qt.profit": "Ganancia",
    "qt.edited": "Editado hace 2 minutos",
    "qt.save": "Guardar",
    "qt.create": "Crear cotización",
    "pd.k1": "Tareas completadas",
    "pd.vs": "vs. mes pasado",
    "pd.k2": "Tareas abiertas",
    "pd.k3": "Avance total",
    "pd.k4": "Presupuesto usado",
    "pd.m1": "Concreto",
    "pd.m2": "Ladrillos",
    "pd.m3": "Vigas de acero",
    "pd.m4": "Aislante",
    "pd.m5": "Tablaroca",
    "pd.t1": "Eléctrico planta alta",
    "pd.t1d": "18 dic",
    "pd.hi": "Alta",
    "pd.t2": "Impermeabilizar cimientos",
    "pd.t2d": "21 dic",
    "pd.md": "Media",
    "pd.t3": "Tablaroca planta baja",
    "pd.t3d": "4 ene",
    "pd.t4": "Azulejo de baños",
    "pd.t4d": "8 ene",
    "pd.lo": "Baja",
    "pd.pcs": "pzas faltan",
    "pd.order": "Pedir",
    "pd.sf": "ft² faltan",
    "pd.m6": "Ventanas",
    "pd.units": "unidades faltan",
    "pd.title": "Panel del proyecto",
    "pd.period": "Este mes",
    "pd.filter": "Filtrar",
    "pd.tasks": "Tareas",
    "pd.total": "Total",
    "pd.l1": "Completadas",
    "pd.l2": "En proceso",
    "pd.l3": "Abiertas",
    "pd.all": "Ver todas las tareas",
    "pd.prog": "Avance del proyecto",
    "pd.overall": "General",
    "pd.x1": "Planeación",
    "pd.x2": "Estructura",
    "pd.x3": "Interiores",
    "pd.x4": "Acabados",
    "pd.report": "Ver reporte de avance",
    "pd.mats": "Materiales",
    "pd.cats": "Todos",
    "pd.allm": "Ver todos los materiales",
    "pd.open": "Tareas abiertas",
    "pd.buy": "Pedir materiales",
    "pd.t5": "Inspección de estructura de techo",
    "pd.t5d": "11 ene",
    "pd.t6": "Pintura exterior",
    "pd.t6d": "15 ene",
    "pd.m7": "Tejas",
    "pd.bund": "paquetes faltan",
    "pd.m8": "Tubo de cobre",
    "pd.ft": "pies faltan",
    "inv.n1": "Panel",
    "inv.n2": "Inventario",
    "inv.n3": "Pedidos",
    "inv.n4": "Proveedores",
    "inv.n5": "Reportes",
    "inv.role": "Gerente de tienda",
    "inv.title": "Inventario",
    "inv.sub": "Las existencias se actualizan al momento para todo el equipo.",
    "inv.s4": "Valor del inventario",
    "inv.hc": "Categoría",
    "inv.hv": "Valor",
    "real.tag": "Proyecto real",
    "ex.visit": "Visitar la página",
    "ex2.private": "App privada del equipo. Pídenos una demostración.",
    "ex.try": "Pruébala en esta página",
    "pr.1.time": "Lista en 3 a 5 días",
    "pr.2.time": "Lista en 1 a 2 semanas",
    "pr.3.time": "Lista en 2 a 4 semanas",
    "pr.4.time": "Lista en 4 a 8 semanas",
    "ct.opt": "(opcional)",
    "ct.choose": "Elige una opción",
    "ct.type": "Tipo de negocio",
    "ct.t1": "Negocio local",
    "ct.t2": "Iglesia o ministerio",
    "ct.t3": "Restaurante o comida",
    "ct.t4": "Construcción u oficios",
    "ct.t5": "Salud o belleza",
    "ct.t6": "Otro",
    "ct.when": "¿Para cuándo lo necesitas?",
    "ct.w1": "Lo antes posible",
    "ct.w2": "En 1 a 2 meses",
    "ct.w3": "Solo estoy explorando",
    "ct.budget": "Presupuesto aproximado",
    "ct.b1": "Menos de $500",
    "ct.b2": "$500 a $1,000",
    "ct.b3": "$1,000 a $2,000",
    "ct.b4": "Más de $2,000",
    "ct.b5": "No sé todavía",
    "apps.f1t": "Todo tu equipo, al día",
    "apps.f1d": "Todos ven la misma información al momento, desde el almacén, la camioneta o la oficina.",
    "apps.f2t": "En el celular y la computadora",
    "apps.f2d": "Una sola app que funciona en iPhone, Android y cualquier computadora. En el celular queda con su propio ícono en la pantalla de inicio.",
    "apps.f3t": "Empieza sencilla y crece contigo",
    "apps.f3d": "Empezamos con lo que más necesitas y después agregamos módulos: reportes, usuarios, permisos o alertas.",
    "apps.icon": "Inventario",
    "apps.toast": "Instalada en la pantalla de inicio",
    "apps.eyebrow": "Apps para negocios",
    "apps.title": "Apps a la medida que simplifican tu operación diaria",
    "apps.lead": "Deja atrás las hojas de Excel, el papel y los mensajes sin fin. Hacemos la herramienta que tu equipo necesita, a la medida de cómo ya trabajan: inventario, pedidos, citas, turnos o reportes.",
    "apps.nt": "Cómo funcionan nuestras apps",
    "apps.nd": "Son apps web: se abren desde un enlace y se instalan en el celular como cualquier otra app, con su propio ícono. <b>No se publican en la App Store ni en Google Play</b>, así que no hay cuotas ni aprobaciones de las tiendas, y cada mejora le llega a todo tu equipo al instante.",
    "apps.cta1": "Prueba la app de demostración",
    "apps.cta2": "Cuéntanos tu idea",
    "faq.7.q": "¿Mi app va a estar en la App Store?",
    "faq.7.a": "No. Nuestras apps son apps web: tu equipo las abre desde un enlace y las instala en el celular con su propio ícono, en iPhone y Android, y también funcionan en la computadora. Como no pasan por la App Store ni Google Play, no hay cuotas ni aprobaciones de las tiendas y las mejoras llegan al instante.",
    "pr.4.n": "Los sistemas más grandes, con usuarios, permisos y reportes, se cotizan por módulos.",
    "pr.5.n": "Mantenimiento de apps desde $65/mes. El dominio (unos $15 al año) lo paga el cliente.",
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
      min: "Mín.", ok: "OK", low: "Por resurtir", out: "Agotado",
      dec: "Restar uno a {n}", inc: "Sumar uno a {n}",
      alertLow: "<b>{c} {p} por resurtir:</b> {list}",
      prod1: "producto", prodN: "productos",
      alertOk: "<b>Todo en orden.</b> Ningún producto está por debajo del mínimo.",
      empty: "No se encontraron productos.",
      waMsg: "Hola, vi su página y me interesa una cotización.",
      planMsg: "Hola, me interesa el plan {p}. ",
      promoMsg: "Hola, me interesa la oferta de lanzamiento (30% de descuento a cambio de mostrar el proyecto en su portafolio). ",
      sending: "Enviando…", phoneMissing: "[TU TELÉFONO]",
      mBad: "Mala 😕", mOk: "Regular 🙂", mGreat: "Excelente 😍"
    },
    en: {
      langAria: "Cambiar a español",
      menuOpen: "Open menu", menuClose: "Close menu",
      min: "Min.", ok: "OK", low: "Restock", out: "Out of stock",
      dec: "Remove one {n}", inc: "Add one {n}",
      alertLow: "<b>{c} {p} to restock:</b> {list}",
      prod1: "product", prodN: "products",
      alertOk: "<b>All good.</b> No product is below its minimum.",
      empty: "No products found.",
      waMsg: "Hi, I saw your website and I'd like a quote.",
      planMsg: "Hi, I'm interested in the {p} plan. ",
      promoMsg: "Hi, I'm interested in the launch offer (30% off in exchange for featuring the project in your portfolio). ",
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
    if (typeof stopTyping === "function") stopTyping();
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
     Párrafos que se escriben solos al llegar a ellos
     ========================================================= */
  const typers = $$(".type-in");
  const typing = new Map();
  function stopTyping() {
    typing.forEach((timer, el) => { clearInterval(timer); el.style.minHeight = ""; el.removeAttribute("aria-busy"); });
    typing.clear();
  }
  function typeOut(el) {
    if (el.dataset.typed) return;
    el.dataset.typed = "1";
    const full = el.textContent.replace(/\s+/g, " ").trim();
    el.style.minHeight = el.offsetHeight + "px";      // evita que la página brinque
    el.setAttribute("aria-busy", "true");
    const txt = document.createTextNode("");
    const caret = document.createElement("span");
    caret.className = "caret"; caret.setAttribute("aria-hidden", "true");
    el.textContent = ""; el.append(txt, caret);
    // velocidad de "tecleo": 45 ms por letra en textos cortos; los largos no pasan de ~7 s
    const speed = Math.max(24, Math.min(45, Math.round(7000 / full.length)));
    let i = 0;
    const timer = setInterval(() => {
      i = Math.min(full.length, i + 1);
      txt.data = full.slice(0, i);
      if (i >= full.length) {
        clearInterval(timer); typing.delete(el);
        el.style.minHeight = ""; el.removeAttribute("aria-busy");
        setTimeout(() => caret.remove(), 1600);
      }
    }, speed);
    typing.set(el, timer);
  }
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    typers.forEach(el => { el.dataset.typed = "1"; });
  } else {
    const tio = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { typeOut(en.target); tio.unobserve(en.target); } });
    }, { threshold: 0.4 });
    typers.forEach(el => tio.observe(el));
  }

  /* =========================================================
     DEMO: inventario
     ========================================================= */
  // Íconos por categoría para la demo
  const CAT_ICON = {
    hw: '<path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/>',
    el: '<path d="M13 2L5 14h6l-1 8 8-12h-6z"/>',
    pt: '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>',
    gd: '<path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15"/><path d="M5 19c3-4 6-7 10-9"/>',
    sf: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
    sl: '<path d="M8 3h8v4H8zM7 7h10v14H7z"/><path d="M10 12h4"/>'
  };
  const CATS = {
    hw: { es: "Tornillería", en: "Hardware", c: "#1e56a0" }, el: { es: "Eléctrico", en: "Electrical", c: "#d97706" },
    pt: { es: "Pintura", en: "Paint", c: "#7c3aed" }, gd: { es: "Jardín", en: "Garden", c: "#15803d" },
    sf: { es: "Seguridad", en: "Safety", c: "#dc2626" }, sl: { es: "Selladores", en: "Sealants", c: "#0e7490" }
  };
  const START = [
    { id: 1, sku: "TOR-014", es: "Tornillos 1/4\" (caja)", en: "1/4\" screws (box)", cat: "hw", price: 8.99, qty: 42, min: 20 },
    { id: 2, sku: "CIN-002", es: "Cinta de aislar negra", en: "Black electrical tape", cat: "el", price: 3.49, qty: 8, min: 10 },
    { id: 3, sku: "PIN-110", es: "Pintura blanca (galón)", en: "White paint (gallon)", cat: "pt", price: 28.99, qty: 4, min: 6 },
    { id: 4, sku: "BRO-020", es: "Brocha de 2\"", en: "2\" paint brush", cat: "pt", price: 6.49, qty: 25, min: 10 },
    { id: 5, sku: "LED-060", es: "Foco LED 60W", en: "60W LED bulb", cat: "el", price: 4.99, qty: 13, min: 12 },
    { id: 6, sku: "MAN-050", es: "Manguera de 50 ft", en: "50 ft garden hose", cat: "gd", price: 24.99, qty: 5, min: 4 },
    { id: 7, sku: "GUA-007", es: "Guantes de trabajo", en: "Work gloves", cat: "sf", price: 9.99, qty: 30, min: 15 },
    { id: 8, sku: "SIL-300", es: "Silicón transparente", en: "Clear silicone", cat: "sl", price: 7.49, qty: 9, min: 8 }
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

  const money = v => v.toLocaleString(lang === "es" ? "es-MX" : "en-US", { style: "currency", currency: "USD", currencyDisplay: "narrowSymbol" });
  function renderInventory(focus) {
    if (!list) return;
    const q = norm(search.value.trim());
    const shown = items.filter(i =>
      (!q || norm(i[lang]).includes(q) || norm(i.sku).includes(q)) && (!onlyLow.checked || isLow(i))
    );

    list.innerHTML = shown.length ? shown.map(i => {
      const name = esc(i[lang]);
      const cat = CATS[i.cat] || CATS.hw;
      const state = i.qty === 0 ? "out" : (isLow(i) ? "low" : "");
      const pct = Math.min(100, Math.round(i.qty / Math.max(1, i.min * 2) * 100));
      return `<li class="row${state ? " " + state : ""}" data-id="${i.id}" style="--c:${cat.c}">
        <div class="r-name"><span class="thumb" aria-hidden="true"><svg viewBox="0 0 24 24">${CAT_ICON[i.cat] || CAT_ICON.hw}</svg></span><div><strong>${name}</strong><span class="sku">${i.sku}</span></div></div>
        <div class="r-cat"><span class="cat">${cat[lang]}</span></div>
        <div class="r-stock">
          <div class="r-qty">
            <button type="button" data-act="dec" aria-label="${esc(t("dec", { n: i[lang] }))}">−</button>
            <output aria-live="polite">${i.qty}</output>
            <button type="button" data-act="inc" aria-label="${esc(t("inc", { n: i[lang] }))}">+</button>
          </div>
          <span class="lvl" aria-hidden="true"><i style="width:${pct}%"></i></span>
          <span class="r-min">${t("min")} ${i.min}</span>
        </div>
        <div class="r-val">${money(i.qty * i.price)}</div>
        <div class="r-status"><span class="badge">${i.qty === 0 ? t("out") : (isLow(i) ? t("low") : t("ok"))}</span></div>
      </li>`;
    }).join("") : `<li class="empty">${t("empty")}</li>`;

    // estadísticas
    const low = items.filter(isLow);
    $("#stItems").textContent = items.length;
    $("#stUnits").textContent = items.reduce((s, i) => s + i.qty, 0).toLocaleString(lang === "es" ? "es-MX" : "en-US");
    $("#stLow").textContent = low.length;
    $("#stValue").textContent = money(items.reduce((sum, i) => sum + i.qty * i.price, 0));
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

  /* La oferta de lanzamiento se oculta sola al terminar (31 dic 2026, hora de Las Cruces) */
  if (Date.now() > Date.parse("2027-01-01T00:00:00-07:00")) $$(".promo").forEach(p => p.hidden = true);

  /* =========================================================
     Carrusel 3D de ejemplos (se mueve solo cuando el visitante lo pide)
     ========================================================= */
  (function () {
    const cf = $("#cf"); if (!cf) return;
    const slides = $$(".cf-slide", cf), caps = $$(".cf-c", cf), dots = $$(".cf-dots i", cf), tabs = $$(".cf-tabs button", cf);
    const n = slides.length; let cur = 0;
    function render() {
      const narrow = matchMedia("(max-width:720px)").matches;
      slides.forEach((s, i) => {
        let o = ((i - cur) % n + n) % n; if (o > n / 2) o -= n;
        const a = Math.abs(o);
        s.style.transform = `translateX(-50%) translateX(${o * 47}%) rotateY(${-o * 26}deg) scale(${1 - a * 0.24})`;
        s.style.zIndex = String(10 - a);
        s.style.opacity = a > 1 || (narrow && a) ? "0" : (a ? ".55" : "1");
        s.style.pointerEvents = a > 1 || (narrow && a) ? "none" : "";
        s.classList.toggle("is-side", a !== 0);
        s.setAttribute("aria-hidden", String(a !== 0));
      });
      caps.forEach((c, i) => { c.hidden = i !== cur; });
      dots.forEach((d, i) => d.classList.toggle("on", i === cur));
      const onApps = cur >= 1;
      tabs.forEach(t => t.setAttribute("aria-pressed", String((t.dataset.go === "1") === onApps)));
    }
    function go(i) { cur = (i + n) % n; render(); }
    $(".prev", cf).addEventListener("click", () => go(cur - 1));
    $(".next", cf).addEventListener("click", () => go(cur + 1));
    tabs.forEach(t => t.addEventListener("click", () => go(+t.dataset.go)));
    dots.forEach((d, i) => d.addEventListener("click", () => go(i)));
    slides.forEach((s, i) => s.addEventListener("click", () => { if (i !== cur) go(i); }));
    const view = $(".cf-view", cf);
    let x0 = null;
    view.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    view.addEventListener("touchend", e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1)); x0 = null; });
    cf.addEventListener("keydown", e => { if (e.key === "ArrowRight") go(cur + 1); if (e.key === "ArrowLeft") go(cur - 1); });
    addEventListener("resize", render);
    render();
  })();

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
        "Tipo de negocio": (fd.get("tipo") || "—").toString(),
        "Para cuándo": (fd.get("cuando") || "—").toString(),
        "Presupuesto": (fd.get("presupuesto") || "—").toString(),
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
