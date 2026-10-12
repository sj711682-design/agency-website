// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close mobile menu after selecting a section
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

// PORTFOLIO PROJECT MODAL
const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalCloseButton = document.getElementById("modalCloseButton");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");

let lastFocusedProject = null;

document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", () => {
        lastFocusedProject = project;

        modalTitle.textContent = project.dataset.title;
        modalCategory.textContent = project.dataset.category;
        modalDescription.textContent = project.dataset.description;
        modalImage.src = project.dataset.image;
        modalImage.alt = project.querySelector("img").alt;

        projectModal.hidden = false;
        document.body.style.overflow = "hidden";
        modalClose.focus();
    });
});

function closeProjectModal() {
    projectModal.hidden = true;
    document.body.style.overflow = "";

    if (lastFocusedProject) {
        lastFocusedProject.focus();
    }
}

modalClose.addEventListener("click", closeProjectModal);
modalCloseButton.addEventListener("click", closeProjectModal);

// Close the modal when clicking outside the content
projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) {
        closeProjectModal();
    }
});

// Close the modal with Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !projectModal.hidden) {
        closeProjectModal();
    }
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    formMessage.textContent =
        "Thank you! Your form has been validated successfully. " +
        "This demo does not send messages to an email inbox yet.";

    contactForm.reset();
    formMessage.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});