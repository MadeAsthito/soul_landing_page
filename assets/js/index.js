// Observe Header
const watcher = document.createElement("watcher");
const nav = document.getElementById("navigation");

watcher.setAttribute("data-watcher", "");
nav.before(watcher);

const observeNav = new IntersectionObserver((e) => {
	// Debugging
	// console.log(e)

	// If not VISIBLE, add class to Nav [FALSE]
	// If not INTERSECTING, add class to Nav [TRUE]
	nav.classList.toggle("sticky", !e[0].isIntersecting);
});

observeNav.observe(watcher);

// Button Click
const toggleMenu = document.querySelector("#toggle-menu");
const navBar = document.querySelector("#nav-bar");

toggleMenu.addEventListener("click", () => {
	const isVisible = navBar.getAttribute("data-visible");

	if (isVisible === "false") {
		navBar.setAttribute("data-visible", true);
		toggleMenu.setAttribute("aria-expanded", true);
	} else {
		navBar.setAttribute("data-visible", false);
		toggleMenu.setAttribute("aria-expanded", false);
	}
});

// Testimony Slider
function showTestimony(data) {
	const name = data.getAttribute("data-name");

	const textEl = document.getElementById("testimony-text");
	const nameEl = document.getElementById("testimony-name");
	const jobEl = document.getElementById("testimony-job");

	// Remove Active State
	let usersList = document.getElementsByClassName("testimony-user");
	for (user of usersList) {
		user.classList.remove("active");
	}

	testimony.forEach((testimony) => {
		if (name === testimony.name) {
			const job = testimony.job;
			const text = testimony.text;

			textEl.innerHTML = text;
			nameEl.innerHTML = name;
			jobEl.innerHTML = job;

			// Give Active State
			data.classList.add("active");
		}
	});
}

// Fixing Navigation Link :
const headerNav = document.querySelector("#navigation");
const navHeight = headerNav.offsetHeight;

document.documentElement.style.setProperty(
	"--scroll-padding",
	navHeight + "px"
);
