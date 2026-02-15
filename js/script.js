const greetingEl = document.querySelector("#greeting");
const yearEl = document.querySelector("#year");

// Time-based greeting 
if (greetingEl) {
  const hour = new Date().getHours();
  let greeting = "Welcome!";

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning! Thanks for stopping by.";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good afternoon! Glad you're here.";
  } else {
    greeting = "Good evening! Explore my work below.";
  }

  greetingEl.textContent = greeting;
}

// Keep the current year in the footer area.
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Smooth scrolling for internal links.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      event.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

