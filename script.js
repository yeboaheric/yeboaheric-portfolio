// ============================
// DATA — Edit these arrays to
// update your portfolio content
// ============================

const skills = [
  { name: "HTML",       icon: "🌐", level: 80 },
  { name: "CSS",        icon: "🎨", level: 70 },
  { name: "JavaScript", icon: "⚡", level: 60 },
  { name: "Bootstrap",  icon: "🅱️", level: 65 },
  { name: "Node.js",    icon: "🟢", level: 40 },
  { name: "Git",        icon: "🔀", level: 50 },
];

const projects = [
  {
    emoji: "🌐",
    title: "Portfolio Website",
    description: "My personal developer portfolio. Built with HTML, CSS, Bootstrap and JavaScript.",
    tags: ["HTML", "CSS", "Bootstrap", "JS"],
    github: "#",
    live: "#",
  },
  {
    emoji: "📝",
    title: "Coming Soon...",
    description: "My next project is in the works. Stay tuned!",
    tags: ["???"],
    github: "#",
    live: "#",
  },
  {
    emoji: "🚀",
    title: "Coming Soon...",
    description: "Another exciting project. Learning never stops.",
    tags: ["???"],
    github: "#",
    live: "#",
  },
];


// ============================
// RENDER SKILLS
// Loops over the skills array
// and builds HTML for each one
// ============================

function renderSkills() {
  const grid = document.getElementById("skillsGrid");

  skills.forEach(function(skill) {
    // Create the outer column div
    const col = document.createElement("div");
    col.className = "col-6 col-md-4 col-lg-2 fade-in-section";

    // Build the card HTML using a template literal (backtick string)
    col.innerHTML = `
      <div class="skill-card">
        <span class="skill-icon">${skill.icon}</span>
        <span class="skill-name">${skill.name}</span>
        <div class="skill-bar-wrap">
          <div class="skill-bar" data-level="${skill.level}"></div>
        </div>
      </div>
    `;

    grid.appendChild(col);
  });
}


// ============================
// RENDER PROJECTS
// Same idea — loops an array,
// builds HTML, appends to grid
// ============================

function renderProjects() {
  const grid = document.getElementById("projectsGrid");

  projects.forEach(function(project) {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 fade-in-section";

    // Build tag badges
    const tagsHTML = project.tags
      .map(tag => `<span class="project-tag">${tag}</span>`)
      .join("");

    col.innerHTML = `
      <div class="project-card">
        <div class="project-img">${project.emoji}</div>
        <div class="project-body">
          <div class="project-tags">${tagsHTML}</div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-links">
            <a href="${project.github}" class="project-link" target="_blank">⭐ GitHub</a>
            <a href="${project.live}"   class="project-link" target="_blank">🔗 Live Demo</a>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(col);
  });
}


// ============================
// SCROLL ANIMATIONS
// Watches elements on the page;
// adds "visible" class when they
// enter the viewport
// ============================

function initScrollAnimations() {
  // IntersectionObserver fires a callback when
  // an element enters or leaves the screen
  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // If it's a skill bar, animate its width
          const bar = entry.target.querySelector(".skill-bar");
          if (bar) {
            const level = bar.getAttribute("data-level");
            bar.style.width = level + "%";
          }

          // If it's a stat counter, start counting up
          const statNums = entry.target.querySelectorAll(".stat-num");
          statNums.forEach(animateCounter);
        }
      });
    },
    { threshold: 0.15 }  // trigger when 15% of the element is visible
  );

  // Observe every element with the fade-in-section class
  document.querySelectorAll(".fade-in-section").forEach(function(el) {
    observer.observe(el);
  });
}


// ============================
// COUNTER ANIMATION
// Counts a number from 0 up to
// the data-target attribute value
// ============================

function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-target"), 10);
  const duration = 1500; // ms
  const stepTime = 20;   // how often to update (ms)
  const steps = duration / stepTime;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(function() {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, stepTime);
}


// ============================
// NAVBAR SCROLL EFFECT
// Adds a class when user scrolls
// down so the navbar gets smaller
// ============================

function initNavbar() {
  const nav = document.getElementById("mainNav");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 60) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}


// ============================
// CONTACT FORM
// Handles the form submission
// and shows a success message
// ============================

function initContactForm() {
  const form     = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", function(event) {
    // Prevent the page from refreshing on submit
    event.preventDefault();

    const name    = document.getElementById("nameInput").value;
    const email   = document.getElementById("emailInput").value;
    const message = document.getElementById("messageInput").value;

    // Basic validation
    if (!name || !email || !message) {
      feedback.textContent = "Please fill in all fields.";
      feedback.style.color = "#ff6b6b";
      return;
    }

    // In a real app you'd send this to a server.
    // For now we just show a success message.
    feedback.textContent = `Thanks ${name}! I'll be in touch soon. 🎉`;
    feedback.style.color = "#6c63ff";
    form.reset();
  });
}


// ============================
// SMOOTH SCROLL FOR NAV LINKS
// When a nav link is clicked,
// scroll smoothly to that section
// ============================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(event) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}


// ============================
// INIT — Run everything when
// the page finishes loading
// ============================

document.addEventListener("DOMContentLoaded", function() {
  renderSkills();
  renderProjects();
  initNavbar();
  initContactForm();
  initSmoothScroll();

  // Small delay before observing so elements are rendered first
  setTimeout(initScrollAnimations, 100);

  // Mark about section stats for animation
  document.querySelectorAll(".about-stats").forEach(function(el) {
    el.classList.add("fade-in-section");
  });

  // Re-observe after adding the class
  setTimeout(function() {
    document.querySelectorAll(".fade-in-section:not(.visible)").forEach(function(el) {
      new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.querySelectorAll(".stat-num").forEach(animateCounter);
          }
        });
      }, { threshold: 0.15 }).observe(el);
    });
  }, 200);
});