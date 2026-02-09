const seccionHabilidades = document.querySelector("#habilidades");
const navbarToggler = document.querySelector(".navbar-toggler");

const headerNombres = document.querySelector("header");
const secciones = document.querySelectorAll("section");
const navlinks = document.querySelectorAll(".nav-link");
const navBrand = document.querySelector(".navbar-brand");
const containerProgress = document.querySelectorAll(".container-progress");
const circularProgress = document.querySelectorAll(".circular-progress");

const btnDarkmode = document.querySelector("#darkmode");
const nombreDarkmode = document.querySelector("h1");
const profesionDarkmode = document.querySelector("h3");
const titulosDarkmode = document.querySelectorAll("h2");

let llamadaHabilidades = false;
let cargaronHabilidades = false;

const cargarPorcientoHabilidades = (
	idCirculoProgreso,
	idValorHabilidad,
	valorInicial,
	valorFinal,
) => {
	const circularProgress = document.querySelector(`#${idCirculoProgreso}`);
	const progressValue = document.querySelector(`#${idValorHabilidad}`);

	let velocidad;

	if (valorFinal > 0) {
		velocidad = 500 / valorFinal;

		const progress = setInterval(function () {
			valorInicial++;
			console.log(valorInicial);
			progressValue.textContent = `${valorInicial}%`;
			circularProgress.style.background = `conic-gradient(var(--color-900) ${valorInicial * 3.6}deg, #e3e3e3 0deg)`;
			if (valorInicial === valorFinal) {
				clearInterval(progress);
			}
		}, velocidad);
		return true;
	} else if (valorFinal === 0) {
		velocidad = 500 / valorInicial;

		const progress = setInterval(function () {
			valorInicial--;
			progressValue.textContent = `${valorInicial}%`;
			circularProgress.style.background = `conic-gradient(var(--color-900) ${valorInicial * 3.6}deg, #e3e3e3 0deg)`;
			if (valorInicial === valorFinal) {
				clearInterval(progress);
			}
		}, velocidad);
		return true;
	}
};

seccionHabilidades.addEventListener("mouseover", () => {
	if (
		!llamadaHabilidades &&
		cargarPorcientoHabilidades("circulo-html", "valor-html", 0, 80) &&
		cargarPorcientoHabilidades("circulo-css", "valor-css", 0, 90) &&
		cargarPorcientoHabilidades("circulo-js", "valor-js", 0, 55) &&
		cargarPorcientoHabilidades("circulo-git", "valor-git", 0, 30)
	)
		llamadaHabilidades = true;
});

seccionHabilidades.addEventListener("mouseleave", () => {
	if (
		llamadaHabilidades &&
		cargarPorcientoHabilidades("circulo-html", "valor-html", 80, 0) &&
		cargarPorcientoHabilidades("circulo-css", "valor-css", 90, 0) &&
		cargarPorcientoHabilidades("circulo-js", "valor-js", 55, 0) &&
		cargarPorcientoHabilidades("circulo-git", "valor-git", 30, 0)
	)
		llamadaHabilidades = false;
});

/* Funciones para Dark-mode */

navbarToggler.addEventListener("click", () => {
	navbarToggler.ariaExpanded = true;
});

btnDarkmode.addEventListener("click", () => {
	headerNombres.classList.toggle("dark-mode-black");
	navBrand.classList.toggle("text-light");
	navlinks.forEach((elemento) => {
		elemento.classList.toggle("text-light");
	});
	secciones.forEach((elemento) => {
		elemento.classList.toggle("dark-mode");
	});
	secciones.forEach((elemento) => {
		elemento.classList.toggle("text-light");
	});
	containerProgress.forEach((elemento) => {
		elemento.classList.toggle("dark-mode");
	});
	circularProgress.forEach((elemento) => {
		elemento.classList.toggle("dark-mode");
	});

	nombreDarkmode.classList.toggle("text-light");
	profesionDarkmode.classList.toggle("text-light");
	titulosDarkmode.forEach((elemento) => {
		elemento.classList.toggle("text-light");
	});
});
