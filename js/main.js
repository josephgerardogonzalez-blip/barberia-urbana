"use strict";

const menuButton = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const themeButton = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("#theme-toggle-label");
const appointmentForm = document.querySelector("#appointment-form");
const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");

function closeMobileMenu() {
  if (!menuButton || !mobileMenu) return;
  mobileMenu.classList.add("hidden");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    mobileMenu.classList.toggle("hidden", !willOpen);
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.setAttribute("aria-label", willOpen ? "Cerrar menú" : "Abrir menú");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMobileMenu();
      menuButton.focus();
    }
  });
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";

  if (themeButton && themeLabel) {
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.setAttribute("aria-label", isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    themeLabel.textContent = isDark ? "Modo claro" : "Modo oscuro";
  }

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.setAttribute("content", isDark ? "#18181b" : "#18181b");
}

let savedTheme = null;
try {
  savedTheme = localStorage.getItem("barberia-urbana-theme");
} catch (error) {
  savedTheme = null;
}

const preferredTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(preferredTheme);

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    try {
      localStorage.setItem("barberia-urbana-theme", nextTheme);
    } catch (error) {
      // El cambio visual sigue funcionando aunque el navegador bloquee el almacenamiento.
    }
  });
}

document.querySelectorAll(".faq-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".faq-toggle").forEach((otherButton) => {
      otherButton.setAttribute("aria-expanded", "false");
      const otherAnswer = document.getElementById(otherButton.getAttribute("aria-controls"));
      const otherSymbol = otherButton.querySelector(".faq-symbol");
      if (otherAnswer) otherAnswer.hidden = true;
      if (otherSymbol) otherSymbol.textContent = "+";
    });

    if (!isExpanded) {
      button.setAttribute("aria-expanded", "true");
      const answer = document.getElementById(button.getAttribute("aria-controls"));
      const symbol = button.querySelector(".faq-symbol");
      if (answer) answer.hidden = false;
      if (symbol) symbol.textContent = "−";
    }
  });
});

const yearLabel = document.querySelector("#current-year");
if (yearLabel) yearLabel.textContent = String(new Date().getFullYear());

const dateField = document.querySelector("#date");
if (dateField) {
  const today = new Date();
  const localDate = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, "0"), String(today.getDate()).padStart(2, "0")].join("-");
  dateField.min = localDate;
}

function showFieldError(field, message) {
  const errorLabel = document.getElementById(field.id + "-error");
  if (errorLabel) errorLabel.textContent = message;
  field.setAttribute("aria-invalid", message ? "true" : "false");
}

function getFieldError(field) {
  const value = field.value.trim();
  if (!value) return "Este campo es obligatorio.";

  if (field.id === "name" && value.length < 2) {
    return "Escribe al menos dos caracteres.";
  }

  if (field.id === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(value)) return "Escribe un correo válido, por ejemplo nombre@dominio.com.";
  }

  if (field.id === "date" && dateField && value < dateField.min) {
    return "Elige hoy o una fecha posterior.";
  }

  return "";
}

if (appointmentForm) {
  const requiredFields = Array.from(appointmentForm.querySelectorAll("[required]"));

  requiredFields.forEach((field) => {
    field.addEventListener("input", () => showFieldError(field, ""));
    field.addEventListener("change", () => showFieldError(field, ""));
  });

  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstInvalidField = null;

    requiredFields.forEach((field) => {
      const message = getFieldError(field);
      showFieldError(field, message);
      if (message && !firstInvalidField) firstInvalidField = field;
    });

    if (firstInvalidField) {
      firstInvalidField.focus();
      return;
    }

    if (toast && toastMessage) {
      toastMessage.textContent = "Formulario validado en esta demostración. No se envió ni reservó una cita.";
      toast.dataset.visible = "true";
    }

    const submitButton = document.querySelector("#submit-button");
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Datos validados";
      window.setTimeout(() => {
        submitButton.disabled = false;
        submitButton.textContent = "Validar solicitud de demostración";
      }, 1400);
    }

    window.setTimeout(() => {
      if (toast) toast.dataset.visible = "false";
    }, 5000);
  });
}
