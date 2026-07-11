const navigation = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Get Started", href: "#contact" },
];

const experience = [
  {
    date: "2025 - Present",
    title: "Creative Engineer",
    place: "Adwoa Fosua Guesthouse - Aduman",
    description: "Designing and building clean web experiences for small businesses, products, and personal brands.",
  },
  {
    date: "2024 - 2025",
    title: "Frontend Developer",
    place: "Project-based work",
    description: "Built responsive interfaces, landing pages, and reusable UI sections with a focus on clarity and speed.",
  },
];

const education = [
  {
    date: "2022 - 2026",
    title: "Software Engineering",
    place: "Ghana Communication Technology University",
    description: "Studying full-stack development through practical projects, documentation, and consistent iteration.",
  },
  {
    date: "2018 - 2021",
    title: "General Science",
    place: "Adu Gyamfi Senior High School",
    description: "Focused on HTML, CSS, JavaScript fundamentals, layout systems, and interface craft.",
  },
];

const approaches = [
  {
    title: "Simplicity",
    icon: "feather",
    meaning:
      "I strip away the unnecessary so every interface feels intuitive and effortless to use — clarity over clutter, always.",
  },
  {
    title: "Functionality",
    icon: "settings-2",
    meaning:
      "Every feature is built to work reliably and solve a real problem — form always follows purpose.",
  },
  {
    title: "Elegance",
    icon: "sparkles",
    meaning:
      "Thoughtful details and refined visuals turn a working product into a delightful experience.",
  },
  {
    title: "Adaptability",
    icon: "refresh-cw",
    meaning:
      "My solutions scale and respond — across devices, use cases, and evolving requirements — without breaking.",
  },
];

const projects = [
  {
    title: "Adwoa Fosua Guesthouse - Aduman",
    description: "A refined hospitality website for Adwoa Fosua Guesthouse in Aduman, designed to present rooms, services, and location details with a calm, booking-first experience.",
    screenshot: "public/projects/adwoa-fosua-guesthouse-home.png",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yeboaheric",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    features: [
      { label: "Responsive stay experience", icon: "monitor" },
      { label: "Room discovery and amenities", icon: "package" },
      { label: "Clear reservation journey", icon: "shield-check" },
    ],
  },
  {
    title: "Adwoa Fosua Guesthouse Management System",
    description: "An internal management system for Adwoa Fosua Guesthouse, built to monitor reservations, room status, revenue, staff activity, and daily hotel operations from one dashboard.",
    screenshot: "public/projects/adwoa-fosua-management-dashboard.png",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yeboaheric",
    techStack: ["Python", "Django", "Render", "Docker"],
    features: [
      { label: "Reservation oversight", icon: "users" },
      { label: "Guest and room records", icon: "message-circle" },
      { label: "Responsive admin workspace", icon: "monitor" },
    ],
  },
];

const services = [
  {
    title: "Websites",
    description: "Minimal marketing and portfolio sites with clear structure and strong responsive behavior.",
    icon: "monitor-smartphone",
  },
  {
    title: "Interfaces",
    description: "Reusable UI systems for product pages, dashboards, forms, and service flows.",
    icon: "layers-3",
  },
  {
    title: "Polish",
    description: "Refining spacing, hierarchy, accessibility, and interaction states for cleaner launches.",
    icon: "sparkles",
  },
];

const techStack = [
  { name: "React", icon: "public/tech/react.svg", category: "Frontend", color: "#61DAFB", url: "https://react.dev" },
  { name: "Next.js", icon: "public/tech/nextjs.svg", category: "Framework", color: "#000000", url: "https://nextjs.org" },
  { name: "TypeScript", icon: "public/tech/typescript.svg", category: "Language", color: "#3178C6", url: "https://www.typescriptlang.org" },
  { name: "JavaScript", icon: "public/tech/javascript.svg", category: "Language", color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Python", icon: "public/tech/python.svg", category: "Language", color: "#3776AB", url: "https://www.python.org" },
  { name: "Node.js", icon: "public/tech/nodejs.svg", category: "Runtime", color: "#5FA04E", url: "https://nodejs.org" },
  { name: "Django", icon: "public/tech/django.svg", category: "Framework", color: "#092E20", url: "https://www.djangoproject.com" },
  { name: "Tailwind CSS", icon: "public/tech/tailwindcss.svg", category: "Styling", color: "#06B6D4", url: "https://tailwindcss.com" },
  { name: "Supabase", icon: "public/tech/supabase.svg", category: "Backend", color: "#3FCF8E", url: "https://supabase.com" },
  { name: "PostgreSQL", icon: "public/tech/postgresql.svg", category: "Database", color: "#4169E1", url: "https://www.postgresql.org" },
  { name: "Git", icon: "public/tech/git.svg", category: "Version control", color: "#F05032", url: "https://git-scm.com" },
  { name: "GitHub", icon: "public/tech/github.svg", category: "Collaboration", color: "#181717", url: "https://github.com" },
  { name: "Figma", icon: "public/tech/figma.svg", category: "Design", color: "#F24E1E", url: "https://figma.com" },
  { name: "Photoshop", icon: "public/tech/photoshop.svg", category: "Image editing", color: "#31A8FF", url: "https://www.adobe.com/products/photoshop.html" },
  { name: "Canva", icon: "public/tech/canva.svg", category: "Design", color: "#00C4CC", url: "https://www.canva.com" },
  { name: "Illustrator", icon: "public/tech/illustrator.svg", category: "Vector design", color: "#FF9A00", url: "https://www.adobe.com/products/illustrator.html" },
  { name: "Premiere Pro", icon: "public/tech/premiere-pro.svg", category: "Video editing", color: "#9999FF", url: "https://www.adobe.com/products/premiere.html" },
  { name: "Affinity", icon: "public/tech/affinity.svg", category: "Creative suite", color: "#7E4DD2", url: "https://affinity.serif.com" },
  { name: "Final Cut Pro", icon: "public/tech/final-cut-pro.svg", category: "Video editing", color: "#5AC8FA", url: "https://www.apple.com/final-cut-pro/" },
  { name: "Framer Motion", icon: "public/tech/framer.svg", category: "Motion", color: "#0055FF", url: "https://motion.dev" },
  { name: "Render", icon: "public/tech/render.svg", category: "Deployment", color: "#000000", url: "https://render.com" },
  { name: "Vercel", icon: "public/tech/vercel.svg", category: "Deployment", color: "#000000", url: "https://vercel.com" },
  { name: "Cloudflare", icon: "public/tech/cloudflare.svg", category: "Edge", color: "#F38020", url: "https://www.cloudflare.com" },
];

const capabilities = [
  "NextJs Custom Websites",
  "Full Stack Applications",
  "Web Design",
  "Product Design",
];

const skillLanguages = ["TypeScript", "JavaScript", "Python", "HTML", "CSS"];

const skillTech = [
  "React",
  "Next.js",
  "Node.js",
  "Django",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Figma",
  "Photoshop",
  "Canva",
  "Illustrator",
  "Premiere Pro",
  "Affinity",
  "Final Cut Pro",
  "Framer Motion",
  "Render",
  "Vercel",
  "Cloudflare",
];

const skillsMarqueeRows = [
  ["React", "Next.js", "TypeScript", "JavaScript", "Python"],
  ["Node.js", "Django", "Tailwind CSS", "Supabase", "PostgreSQL", "Git"],
  ["GitHub", "Figma", "Photoshop", "Canva", "Illustrator", "Premiere Pro"],
  ["Affinity", "Final Cut Pro", "Framer Motion", "Render", "Vercel", "Cloudflare"],
];

function getTechByName(name) {
  return techStack.find((item) => item.name === name);
}

function navLink(item, active = false, kind = "desktop") {
  const classes = active
    ? "rounded-full bg-black px-4 py-2 text-sm font-medium text-white"
    : "rounded-full px-4 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-100 hover:text-black";
  const mobileClasses =
    active
      ? "rounded-2xl bg-black px-4 py-3 text-sm font-medium text-white"
      : "rounded-2xl px-4 py-3 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-black";
  const finalClass = kind === "mobile" ? mobileClasses : classes;
  return `<a href="${item.href}" data-href="${item.href}" class="nav-link ${kind === "mobile" ? "mobile-nav-link" : ""} ${finalClass}">${item.label}</a>`;
}

function renderNavigation() {
  document.getElementById("desktopNav").innerHTML = navigation.map((item, index) => navLink(item, index === 0, "desktop")).join("");
  document.getElementById("mobileNav").innerHTML = `<div class="mx-auto grid max-w-7xl gap-2">${navigation
    .map((item, index) => navLink(item, index === 0, "mobile"))
    .join("")}</div>`;
  document.getElementById("footerNav").innerHTML = navigation
    .map((item) => `<a href="${item.href}" class="text-sm text-neutral-300 hover:text-white">${item.label}</a>`)
    .join("");
}

function timelineItem(item) {
  return `
    <article class="timeline-item">
      <div class="rounded-3xl border border-neutral-200 p-5">
        <p class="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">${item.date}</p>
        <div class="mt-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h4 class="text-base font-semibold">${item.title}</h4>
          <p class="text-sm text-neutral-500">${item.place}</p>
        </div>
        <p class="mt-3 text-sm leading-6 text-neutral-600">${item.description}</p>
        <a href="#contact" class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 hover:text-neutral-600">Show details <i data-lucide="chevron-right"></i></a>
      </div>
    </article>
  `;
}

function renderTimelines() {
  document.getElementById("experienceList").innerHTML = experience.map(timelineItem).join("");
  document.getElementById("educationList").innerHTML = education.map(timelineItem).join("");
}

function renderApproaches() {
  let grid = document.getElementById("approachGrid");

  if (!grid) {
    const approachLabel = [
      ...document.querySelectorAll("#about .section-kicker, #about h3"),
    ].find(
      (element) => element.textContent.trim().toLowerCase() === "my approach"
    );
    const wrapper = approachLabel?.parentElement;

    if (wrapper) {
      grid = document.createElement("div");
      grid.id = "approachGrid";
      grid.className = "approach-grid-compact mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2";

      const existingContent = approachLabel.nextElementSibling;
      if (existingContent) {
        existingContent.replaceWith(grid);
      } else {
        wrapper.appendChild(grid);
      }
    }
  }

  if (!grid) return;

  grid.innerHTML = approaches
    .map(
      (approach, index) => `
        <article class="approach-card group" tabindex="0">
          <div class="approach-card-inner">
            <span class="approach-card-step">${String(index + 1).padStart(2, "0")}</span>
            <div class="approach-card-icon-wrap">
              <i data-lucide="${approach.icon}" class="approach-card-icon"></i>
            </div>
          </div>
          <h3 class="approach-card-title">${approach.title}</h3>
          <div class="approach-card-meaning">
            <div class="approach-card-meaning-inner">
              <p>${approach.meaning}</p>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function macbookMockup(project) {
  return `
    <div class="macbook-mockup">
      <div class="macbook-lid">
        <div class="macbook-bezel">
          <span class="macbook-camera" aria-hidden="true"></span>
          <div class="macbook-screen">
            <img src="${project.screenshot}" alt="${project.title} screenshot" />
          </div>
        </div>
      </div>
      <div class="macbook-base" aria-hidden="true">
        <span class="macbook-notch"></span>
      </div>
    </div>
  `;
}

function renderProjects() {
  document.getElementById("projectsList").innerHTML = projects
    .map((project, index) => {
      const stack = project.techStack
        .map((item) => {
          const tech = getTechByName(item);
          const logo = tech ? `<img src="${tech.icon}" alt="${tech.name} logo" class="tech-pill-logo" />` : "";
          return `<span class="tech-pill">${logo}${item}</span>`;
        })
        .join("");
      const features = project.features
        .map((item) => `<li class="flex items-center gap-3 text-sm text-neutral-700"><i data-lucide="${item.icon}"></i>${item.label}</li>`)
        .join("");
      const reversed = index % 2 === 1 ? "lg:[&>.macbook-mockup]:order-2" : "";
      return `
        <article class="project-row grid gap-8 border-t border-neutral-200 py-12 lg:grid-cols-2 lg:items-center lg:gap-14 ${reversed}" data-project-index="${index}">
          ${macbookMockup(project)}
          <div class="project-copy">
            <p class="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">0${index + 1} / Selected work</p>
            <h3 class="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">${project.title}</h3>
            <p class="mt-4 max-w-xl text-base leading-8 text-neutral-600">${project.description}</p>
            <div class="mt-6 flex flex-wrap gap-2">${stack}</div>
            <h4 class="mt-8 text-sm font-semibold text-black">Key Features</h4>
            <ul class="mt-4 grid gap-3">${features}</ul>
            <a href="${project.liveUrl}" target="_blank" rel="noreferrer" class="project-link mt-8 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:text-neutral-600">View Project <i data-lucide="external-link"></i></a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderServices() {
  document.getElementById("servicesList").innerHTML = services
    .map(
      (service) => `
        <article class="service-card group" tabindex="0">
          <div class="service-card-icon-wrap">
            <i data-lucide="${service.icon}" class="service-card-icon"></i>
          </div>
          <div class="service-card-heading">
            <h3 class="service-card-title">${service.title}</h3>
            <span class="service-card-line" aria-hidden="true"></span>
          </div>
          <p class="service-card-description">${service.description}</p>
        </article>
      `
    )
    .join("");
}

function renderSkillList(elementId, items) {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function skillPill(name) {
  const item = getTechByName(name);
  if (!item) return "";

  return `
    <a class="skill-pill" href="${item.url}" target="_blank" rel="noreferrer" style="--skill-color: ${item.color}">
      <span>${item.name}</span>
      <img src="${item.icon}" alt="${item.name} logo" loading="lazy" />
    </a>
  `;
}

function renderSkills() {
  renderSkillList("skillsCapabilities", capabilities);
  renderSkillList("skillsLanguages", skillLanguages);
  renderSkillList("skillsTech", skillTech);

  const marquee = document.getElementById("skillsMarquee");
  if (!marquee) return;

  marquee.innerHTML = skillsMarqueeRows
    .map((row, index) => {
      const repeated = [...row, ...row];
      const direction = index % 2 === 0 ? "right" : "left";

      return `
        <div class="skills-marquee-row" data-direction="${direction}">
          <div class="skills-marquee-track">
            ${repeated.map(skillPill).join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

function initMenu() {
  const toggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  const openMenu = () => {
    mobileNav.classList.remove("hidden");
    requestAnimationFrame(() => {
      mobileNav.classList.add("is-open");
    });
  };

  const closeMenu = () => {
    mobileNav.classList.remove("is-open");
    window.setTimeout(() => {
      if (!mobileNav.classList.contains("is-open")) {
        mobileNav.classList.add("hidden");
      }
    }, 220);
  };

  toggle.addEventListener("click", () => {
    const isOpen = !mobileNav.classList.contains("is-open");
    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
    toggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    toggle.setAttribute("aria-expanded", String(isOpen));
    renderLucideIcons();
  });
  mobileNav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      closeMenu();
      toggle.innerHTML = '<i data-lucide="menu"></i>';
      toggle.setAttribute("aria-expanded", "false");
      renderLucideIcons();
    }
  });
}

function initThemeIcon() {
  const themeToggle = document.getElementById("themeToggle");
  const themeStorageKey = "portfolio-theme";
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const readStoredTheme = () => {
    try {
      return localStorage.getItem(themeStorageKey);
    } catch (error) {
      return null;
    }
  };

  const writeStoredTheme = (theme) => {
    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch (error) {
      // Ignore storage failures and continue with in-memory theme state.
    }
  };

  const resolveTheme = () => {
    const storedTheme = readStoredTheme();
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
    return mediaQuery.matches ? "dark" : "light";
  };

  const syncToggleIcon = (theme) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    themeToggle.innerHTML = theme === "dark" ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
    themeToggle.setAttribute("aria-label", `Switch theme to ${nextTheme} mode`);
    renderLucideIcons();
  };

  const applyTheme = (theme, persist = true) => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.body.dataset.theme = theme;
    if (persist) {
      writeStoredTheme(theme);
    }
    syncToggleIcon(theme);
  };

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });

  const handleSystemTheme = (event) => {
    if (readStoredTheme()) return;
    applyTheme(event.matches ? "dark" : "light", false);
  };

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", handleSystemTheme);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(handleSystemTheme);
  }

  applyTheme(resolveTheme(), false);
}

function initApproachInteractions() {
  document.querySelectorAll(".approach-card").forEach((card) => {
    const open = () => card.classList.add("is-open");
    const close = () => card.classList.remove("is-open");

    card.addEventListener("mouseenter", open);
    card.addEventListener("mouseleave", close);
    card.addEventListener("focus", open, true);
    card.addEventListener("blur", close, true);
  });
}

function renderLucideIcons() {
  if (!window.lucide) return;
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 1.75,
    },
  });
}

function setActiveNavigation(activeHref) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("data-href");
    const isMobile = link.classList.contains("mobile-nav-link");
    const isActive = href === activeHref;

    if (isMobile) {
      link.className = `nav-link mobile-nav-link ${
        isActive
          ? "rounded-2xl bg-black px-4 py-3 text-sm font-medium text-white"
          : "rounded-2xl px-4 py-3 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-black"
      }`;
      return;
    }

    link.className = `nav-link ${
      isActive
        ? "rounded-full bg-black px-4 py-2 text-sm font-medium text-white"
        : "rounded-full px-4 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-100 hover:text-black"
    }`;
  });
}

function initActiveSections() {
  const sectionIds = navigation.map((item) => item.href.replace("#", ""));
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible && visible.target.id) {
        setActiveNavigation(`#${visible.target.id}`);
      }
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
  );

  sectionIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) observer.observe(element);
  });
}

function initHeaderScroll() {
  const header = document.querySelector(".site-header");

  const sync = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

function initMotionSystem() {
  requestAnimationFrame(() => {
    document.body.classList.add("site-loaded");
  });
}

function initIntro() {
  const intro = document.getElementById("introLoader");
  const trigger = document.getElementById("introEnter");
  const shouldShow = document.documentElement.dataset.intro === "pending";

  if (!intro || !trigger || !shouldShow) {
    intro?.remove();
    return false;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const flipDuration = reduceMotion ? 60 : 860;
  const exitDuration = reduceMotion ? 80 : 520;
  let isCompleting = false;

  const enterPortfolio = () => {
    if (isCompleting) return;

    isCompleting = true;
    trigger.disabled = true;
    intro.classList.add("is-flipping");

    window.setTimeout(() => {
      try {
        sessionStorage.setItem("portfolio-intro-seen", "true");
      } catch (error) {
        // Session storage can be unavailable in private contexts.
      }

      intro.classList.add("is-exiting");
      initMotionSystem();

      window.setTimeout(() => {
        delete document.documentElement.dataset.intro;
        intro.remove();
      }, exitDuration + 260);
    }, flipDuration);
  };

  trigger.addEventListener("click", enterPortfolio);
  trigger.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    enterPortfolio();
  });

  window.setTimeout(enterPortfolio, reduceMotion ? 700 : 3600);

  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavigation();
  renderApproaches();
  renderTimelines();
  renderProjects();
  renderServices();
  renderSkills();
  initMenu();
  initApproachInteractions();
  initThemeIcon();
  initActiveSections();
  initHeaderScroll();
  if (!initIntro()) {
    initMotionSystem();
  }
  renderLucideIcons();
});
