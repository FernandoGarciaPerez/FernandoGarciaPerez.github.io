const originalWords = {
	hello: {
		pronunciacion: "jelou",
		significado: "hola",
	},

	reasonable: {
		pronunciacion: "rísonabl",
		significado: "Razonable, justo",
	},

	"in installments": {
		pronunciacion: "ín instólments",
		significado: "A plazos, en abonos, en pagos",
	},

	"rocking chair": {
		pronunciacion: "ráking chér",
		significado: "Mecedora",
	},

	rocker: {
		pronunciacion: "rákr",
		significado: "Mecedora, rokero",
	},

	special: {
		pronunciacion: "spéshl",
		significado: "Especial",
	},

	"on special": {
		pronunciacion: "ón spéshl",
		significado: "En especial, en oferta",
	},

	shovel: {
		pronunciacion: "shavl",
		significado: "Pala (de cocina, albañil, jardín)",
	},

	"lamp shade": {
		pronunciacion: "læmp shéid",
		significado: "Pantalla para la lámpara",
	},

	handmade: {
		pronunciacion: "jéndméid",
		significado: "Hecho a mano",
	},

	amount: {
		pronunciacion: "amáunt",
		significado: "Monto, cantidad",
	},

	some: {
		pronunciacion: "sóm",
		significado: "algún, algunos, (a,as), unos o unas",
	},

	several: {
		pronunciacion: "Sévrl",
		significado: "varios o varias",
	},

	display: {
		pronunciacion: "displéi",
		significado: "exhibición, aparador, escaparate, muestra",
	},

	assortment: {
		pronunciacion: "asórtment",
		significado: "surtido o variedad",
	},

	variety: {
		pronunciacion: "varráieri",
		significado: "variedad (general) show) espectáculo",
	},

	show: {
		pronunciacion: "shóu",
		significado: "espectáculo",
	},

	account: {
		pronunciacion: "akáunt",
		significado: "cuenta",
	},

	charge: {
		pronunciacion: "chárch",
		significado: "carga, cargo, cobro, al ataque (deportes)",
	},

	in: {
		pronunciacion: "ín",
		significado: "adentro, en (sitio o lugar)",
	},

	at: {
		pronunciacion: "æt",
		significado: "en (lugar o sitio) a las (horas o tiempo)",
	},

	every: {
		pronunciacion: "évri",
		significado: "cada, todo(a,os,as)",
	},

	things: {
		pronunciacion: "díngs",
		significado: "cosas (explicar la pronunciación de la (th))",
	},

	all: {
		pronunciacion: "ól",
		significado: "todo, toda (os,as)",
	},

	whole: {
		pronunciacion: "jóul",
		significado: "todo, (a,os,as) entero (a,os,as)",
	},

	everything: {
		pronunciacion: "évri díng",
		significado: "todas las cosas",
	},

	"charge account": {
		pronunciacion: "chárch akáunt",
		significado: "cuenta de crédito (en tiendas)",
	},

	on: {
		pronunciacion: "ón",
		significado: "sobre de, arriba de, encima de, en (las cosas) encendido (aparatos eléctricos)",
	},
	for: {
		pronunciacion: "fór",
		significado: "para, por",
	},

	downtown: {
		pronunciacion: "dáuntáun",
		significado: "centro de la ciudad",
	},

	town: {
		pronunciacion: "táun",
		significado: "ciudad, pueblo",
	},

	hometown: {
		pronunciacion: "jómtáun",
		significado: "ciudad natal",
	},

	with: {
		pronunciacion: "úid",
		significado: "con",
	},

	high: {
		pronunciacion: "jái",
		significado: "alto (a, os, as) elevado (a, os, as) drogado",
	},

	higher: {
		pronunciacion: "jáier",
		significado: "mas alto (a, os, as) mas elevado (a, os, as)",
	},

	low: {
		pronunciacion: "lóu",
		significado: "bajo (a, os, as) desganado, triste",
	},

	lower: {
		pronunciacion: "lówuer",
		significado: "mas bajo (a, os, as)",
	},

	regular: {
		pronunciacion: "régüiular",
		significado: "regular, normal",
	},

	recommendations: {
		pronunciacion: "ricámendéichns",
		significado: "recomendaciones",
	},

	payment: {
		pronunciacion: "péiment",
		significado: "pago, abono",
	},

	downpayment: {
		pronunciacion: "dáunpéiment",
		significado: "enganche o anticipo",
	},

	other: {
		pronunciacion: "ódr",
		significado: "otro u otra",
	},
	//
	today: {
		pronunciacion: "tudéi",
		significado: "Ahora, hoy",
	},

	"most Of": {
		pronunciacion: "móst óf",
		significado: "La mayoría de, la mayor parte de",
	},

	different: {
		pronunciacion: "dífrent",
		significado: "Diferente, raro (a,os,as)",
	},

	manager: {
		pronunciacion: "maénællr",
		significado: "Gerente, manejador de un equipo",
	},

	salesman: {
		pronunciacion: "séilsmén",
		significado: "Vendedor, agente de ventas",
	},

	saleswoman: {
		pronunciacion: "séilsúoman",
		significado: "Vendedora, agente de ventas",
	},

	"high Chair": {
		pronunciacion: "jái chér",
		significado: "Silla alta, periquera",
	},

	prints: {
		pronunciacion: "prínts",
		significado: "Impresos, estampados",
	},

	decoration: {
		pronunciacion: "décorėishn",
		significado: "Decoración",
	},

	pillow: {
		pronunciacion: "pílou",
		significado: "Almohada",
	},

	case: {
		pronunciacion: "kéis",
		significado: "Funda, caja, caso, estuche",
	},

	another: {
		pronunciacion: "anódr",
		significado: "Otro, otra más",
	},

	bargain: {
		pronunciacion: "bárgn",
		significado: "Oferta, ganga",
	},

	"household Goods": {
		pronunciacion: "jáusjóld gúds",
		significado: "Artículos para el hogar",
	},

	wireless: {
		pronunciacion: "wuáierlés",
		significado: "Inalámbrico",
	},

	"on Sale": {
		pronunciacion: "ón séil",
		significado: "En oferta, en venta",
	},

	"for Sale": {
		pronunciacion: "fór séil",
		significado: "En venta",
	},

	"door Mat": {
		pronunciacion: "dór mæt",
		significado: "Tapete de entrada",
	},

	once: {
		pronunciacion: "uáns",
		significado: "Una vez",
	},

	twice: {
		pronunciacion: "tuáis",
		significado: "Dos veces",
	},

	toys: {
		pronunciacion: "tóis",
		significado: "Juguetes",
	},

	drugstore: {
		pronunciacion: "drógstór",
		significado: "Farmacia",
	},

	cleaners: {
		pronunciacion: "clíners",
		significado: "Limpiadores, tintorería",
	},

	laptop: {
		pronunciacion: "láptáp",
		significado: "Computadora portátil",
	},

	"computer Devices": {
		pronunciacion: "compíurer diváises",
		significado: "Artículos para la computadora",
	},

	price: {
		pronunciacion: "práis",
		significado: "Precio",
	},

	craft: {
		pronunciacion: "kraéft",
		significado: "Manualidades",
	},
	because: {
		pronunciacion: "bicás",
		significado: "porqué (para oraciones)",
	},
	merchandise: {
		pronunciacion: "mérchandáis",
		significado: "mercancía",
	},
	product: {
		pronunciacion: "prórokt",
		significado: "producto, artículo",
	},
	item: {
		pronunciacion: "áirem",
		significado: "producto, articulo",
	},
	article: {
		pronunciacion: "árikl",
		significado: "producto o articulo",
	},
	"the rest": {
		pronunciacion: "dí rést",
		significado: "el resto, lo que resta",
	},
	each: {
		pronunciacion: "ích",
		significado: "cada",
	},
	"each one": {
		pronunciacion: "ích uán",
		significado: "cada uno, cada una (os,as)",
	},
	of: {
		pronunciacion: "óf",
		significado: "de (posesión)",
	},
	comfortable: {
		pronunciacion: "cómftrbl",
		significado: "cómodo (a,os,as) confortable (agusto)",
	},
	times: {
		pronunciacion: "táims",
		significado: "tiempos, veces, ocasiones",
	},
	to: {
		pronunciacion: "tú",
		significado: "a (lugares y personas)",
	},
	Monday: {
		pronunciacion: "Móndéi",
		significado: "Lunes",
	},
	Tuesday: {
		pronunciacion: "túsdéi",
		significado: "Martes",
	},
	Wednesday: {
		pronunciacion: "úensdéi",
		significado: "Miércoles",
	},
	Thursday: {
		pronunciacion: "drsdéi",
		significado: "Jueves",
	},
	Friday: {
		pronunciacion: "fráirei",
		significado: "Viernes",
	},
	Saturday: {
		pronunciacion: "sáredéi",
		significado: "Sábado",
	},
	Sunday: {
		pronunciacion: "sándei",
		significado: "Domingo",
	},
	Interest: {
		pronunciacion: "íntrést",
		significado: "Interés (general) - (personal y monetario)",
	},
	Border: {
		pronunciacion: "bórer",
		significado: "Frontera",
	},
	"Border town": {
		pronunciacion: "bórer táun",
		significado: "Ciudad fronteriza",
	},
	Day: {
		pronunciacion: "déi",
		significado: "Día",
	},
	"A day": {
		pronunciacion: "a déi",
		significado: "Un día, al día",
	},
	Daily: {
		pronunciacion: "déili",
		significado: "Diariamente, a diario",
	},
	Week: {
		pronunciacion: "wík",
		significado: "Semana",
	},
	"A week": {
		pronunciacion: "a wík",
		significado: "Una semana, a la semana",
	},
	Weekly: {
		pronunciacion: "wíkli",
		significado: "Semanalmente",
	},
	Month: {
		pronunciacion: "mónd",
		significado: "Mes",
	},
	"A month": {
		pronunciacion: "a mónd",
		significado: "Un mes, al mes",
	},
	Monthly: {
		pronunciacion: "móndli",
		significado: "Mensualmente",
	},
	Year: {
		pronunciacion: "yír",
		significado: "Año",
	},
	"A year": {
		pronunciacion: "a yír",
		significado: "Al año, un año",
	},
	Yearly: {
		pronunciacion: "yírli",
		significado: "Anualmente",
	},
	"Every time": {
		pronunciacion: "évri táim",
		significado: "Cada vez, todo el tiempo",
	},
	Weekend: {
		pronunciacion: "uíkend",
		significado: "Fin de semana",
	},
	Where: {
		pronunciacion: "juér",
		significado: "Dónde o a dónde",
	},

	//verbos infinitivo
	"to want": {
		pronunciacion: "tu wuánt",
		significado: "Querer o desear",
	},
	"to pay": {
		pronunciacion: "tu péi",
		significado: "Pagar, abonar, liquidar",
	},
	"to give": {
		pronunciacion: "tu guív",
		significado: "Dar u otorgar",
	},
	"to need": {
		pronunciacion: "tu níd",
		significado: "Necesitar",
	},
	"to buy": {
		pronunciacion: "tu bái",
		significado: "Comprar",
	},
	"to get": {
		pronunciacion: "tu gét",
		significado: "Conseguir, adquirir, obtener, comprar, tener",
	},
	"to have": {
		pronunciacion: "tu jæv",
		significado: "Tener o traer (consigo)",
	},
	"to go": {
		pronunciacion: "tu gó",
		significado: "Ir o dirigirse a",
	},
	//
};

let words = {...originalWords};
let currentWord;
let timeLeft = 2;
let timer;

function hablar() {
	// Extracción de la palabra clave y la pronunciación
	let palabra = currentWord;

	// Crear un nuevo objeto SpeechSynthesisUtterance para la palabra clave
	let utterancePalabra = new SpeechSynthesisUtterance(palabra);

	// Configurar el idioma a inglés
	utterancePalabra.lang = "en-US";

	// Hacer que el navegador hable la palabra clave y luego su pronunciación
	window.speechSynthesis.speak(utterancePalabra);
}

function start() {
	document.getElementById("startBtn").style.display = "none";
	getNextWord();
}

function getNextWord() {
	let wordKeys = Object.keys(words);
	if (wordKeys.length === 0) {
		let repeat = confirm("¡Terminaste todas las palabras! ¿Deseas repetir?");
		if (repeat) {
			words = {...originalWords};
			getNextWord();
		} else {
			alert("¡Gracias por jugar!");
			location.reload();
		}
		return;
	}

	let randomIndex = Math.floor(Math.random() * wordKeys.length);
	currentWord = wordKeys[randomIndex];

	document.getElementById("word").innerText = currentWord;
	document.getElementById("pronunciacion").innerText = words[currentWord].pronunciacion;
	document.getElementById("timer").style.display = "block";
	document.getElementById("translation").style.display = "none";
	document.getElementById("nextWordBtn").style.display = "none";
	timeLeft = 2;
	document.getElementById("timer").innerText = timeLeft + " segundos restantes";

	timer = setInterval(() => {
		timeLeft--;
		document.getElementById("timer").innerText = timeLeft + " segundos restantes";

		if (timeLeft === 0) {
			clearInterval(timer);
			showTranslation();
		}
	}, 1000);
}

function showTranslation() {
	document.getElementById("translation").style.display = "block";
	document.getElementById("translation").innerHTML =
		"<br>Traducción: " + words[currentWord].significado;
	document.getElementById("nextWordBtn").style.display = "block";

	// Elimina la palabra actual para no repetirla
	delete words[currentWord];
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("nextWordBtn").addEventListener("click", getNextWord);
