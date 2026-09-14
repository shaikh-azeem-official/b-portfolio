const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;
if (cursor && ring) {
  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.left = `${mouseX - 6}px`;
    cursor.style.top = `${mouseY - 6}px`;
  });
  (function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  })();
  document.querySelectorAll("a,button,.panel,.service-card,.project-card,.project-visual").forEach((element) => {
    element.addEventListener("mouseenter", () => { cursor.style.transform = "scale(3)"; ring.style.opacity = "0"; });
    element.addEventListener("mouseleave", () => { cursor.style.transform = "scale(1)"; ring.style.opacity = ".5"; });
  });
}
const nav = document.getElementById("nav");
const navLinks = nav?.querySelector(".nav-links");
if (navLinks && !navLinks.querySelector('a[href="about.html"]')) {
  const aboutItem = document.createElement("li");
  aboutItem.innerHTML = '<a href="about.html">About</a>';
  navLinks.insertBefore(aboutItem, navLinks.lastElementChild);
}
window.addEventListener("scroll", () => nav?.classList.toggle("scrolled", window.scrollY > 50));
const canvas = document.querySelector(".hero-canvas");
if (canvas) {
  const context = canvas.getContext("2d");
  let time = 0;
  const resizeCanvas = () => { canvas.width = window.innerWidth; canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight; };
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let line = 0; line < 38; line += 1) {
      context.beginPath();
      context.strokeStyle = line % 7 === 0 ? "rgba(57,255,20,.22)" : "rgba(212,160,23,.12)";
      context.lineWidth = .8;
      for (let x = -20; x <= canvas.width + 20; x += 10) {
        const wave = Math.sin((x - canvas.width / 2) * .006 + time * .8 + line * .15) * 48 + Math.cos((x - canvas.width / 2) * .003 - time * .5) * 30;
        const y = canvas.height / 2 + wave + (line - 19) * 17;
        x === -20 ? context.moveTo(x, y) : context.lineTo(x, y);
      }
      context.stroke();
    }
    time += .005;
    requestAnimationFrame(draw);
  };
  draw();
}
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
}), { threshold: .12, rootMargin: "0px 0px -50px 0px" });
document.querySelectorAll(".reveal,.reveal-l,.reveal-r").forEach((element) => observer.observe(element));

const projects = [
  {
    id: 1,
     title: "S-QUICK MART",
    category: "GROCERY DELIVERY PLATFORM",
    description: "A full-scale online grocery delivery ecosystem built for Parbhani — connecting fast local shopping with real-time order, stock and delivery management.",
    heroImage: "images/smart/quickmart.jpeg",
    about: "S-Quick Mart was engineered as a complete local grocery ecosystem rather than just a storefront. Customers get fast browsing, account and address management, wishlist, cart and live order tracking — with 20–30 minute delivery, YourNeed custom-order requests, and a Pickup & Drop service. Behind the scenes, a powerful Admin Panel runs on real-time Firestore data, coordinating StockFlow inventory management and a dedicated Delivery Boy system — giving the business one connected control centre for stock, orders and delivery, updating live.",
    built: ["Online Grocery Storefront", "Product Categories & Subcategories", "Customer Login & Account System", "Address Management", "Wishlist & Shopping Cart", "Real-time Order Placement & Tracking", "YourNeed Custom Order Requests", "Pickup & Drop Service", "Admin Control Panel", "Delivery Boy Management System", "StockFlow Inventory System", "Live Product & Stock Management", "Responsive Mobile Experience"],
    features: ["20–30 minute local delivery", "Real-time order tracking with live status updates", "Category & subcategory-based product discovery", "Wishlist and persistent shopping cart", "YourNeed custom order requests for unlisted items", "Pickup & Drop logistics service", "Centralised admin control panel", "Dedicated delivery-boy assignment & management", "StockFlow live inventory tracking", "Fully responsive mobile-first design"],
    technology: ["HTML5 / CSS3", "Vanilla JavaScript (ES6+)", "Firebase Authentication", "Cloud Firestore (Real-time Database)", "Firebase Storage", "Custom Admin Dashboard (StockFlow + Delivery System)"],
    result: "The result is a genuine local e-commerce ecosystem — not just a shop, but a live operations hub where customers, store staff, inventory and delivery teams all work off the same real-time data.",images: [
      "images/smart/quickmart.jpeg",
      "images/smart/1.jpeg",
      "images/smart/2.jpeg",
      "images/smart/3.jpeg",
      "images/smart/4.jpeg",
      "images/smart/5.jpeg",
      "images/smart/6.jpeg",
      "images/smart/7.jpeg",
      "images/smart/8.jpeg",
      "images/smart/9.jpeg",
    ],
    liveUrl: "https://squickmart.store"
  },
  {
    id: 2,
    title: "ROYAL FASHION",
    category: "WOMEN'S ETHNIC WEAR E-COMMERCE PLATFORM",
    description: "A complete women's fashion e-commerce platform for ready-made lehengas, party wear and festive collections, built with a rich gold-and-editorial aesthetic and a fully functional shopping experience from browsing to checkout.",
    heroImage: "images/fashion/1.jpeg",
    about: "Royal Fashion was built as a full-scale local fashion storefront — combining a premium, boutique-style visual identity with a genuine e-commerce engine: catalogue browsing, cart, wishlist, checkout and order tracking, backed by a dedicated admin dashboard for managing the entire store.",
    built: ["Product Catalogue & Categories", "Advanced Shop Filters", "Cart & Wishlist System", "Customer Login & Registration", "Checkout & Order Flow", "Order Tracking Dashboard", "Full Admin Panel", "Inventory & Coupon Management"],
    features: ["Multi-filter product search (price, size, colour, rating, stock)", "Dynamic product pages with gallery, variants & related items", "Cart, wishlist and order-history for every customer", "Role-based admin dashboard with sales stats & recent orders", "Delivery-zone validation at checkout", "Fully responsive, elegant gold-accented design"],
    technology: ["HTML5 / CSS3", "Vanilla JavaScript", "Firebase-ready Architecture (Auth, Firestore, Storage)", "Custom Admin Dashboard", "Responsive Design System"],
    result: "The result is a boutique-grade online store that feels premium to shop on while giving the business owner a genuinely usable back-end — products, orders, inventory, banners, coupons and reviews all manageable from one admin panel.",images: [
      "images/fashion/2.jpeg",
      "images/fashion/3.jpeg",
      "images/fashion/4.jpeg",
      "images/fashion/5.jpeg",
      "images/fashion/6.jpeg",
      "images/fashion/7.jpeg",
      "images/fashion/8.jpeg",
      "images/fashion/9.jpeg",
      "images/fashion/10.jpeg",
      "images/fashion/11.jpeg",
      "images/fashion/12.jpeg",
    ],
    liveUrl: "https://shaikh-azeem-official.github.io/fashion"
  },
  {
    id: 3,
    title: "TANDURIWALA",
    category: "FINE DINING RESTAURANT WEBSITE",
    description: "A dark-and-gold luxury restaurant experience with glass-morphism visuals, smooth parallax animations, and a complete guest journey from menu to table booking.",
    heroImage: "images/tanduriwala/1.jpeg",
    about: "Tanduriwala was designed to make fine dining feel as premium online as it does at the table — an atmospheric dark theme, elegant typography, and a smooth, story-led browsing experience across every page.",
    built: ["Restaurant Landing Page", "Categorised Menu System", "Table Reservation Form", "Chef & About Story", "Contact & Location Page", "Review & Gallery Sections"],
    features: ["Glass-morphism cards with backdrop blur", "Category-tab menu with live item switching", "Reservation form with date, time & guest validation", "Animated stats counters and testimonial slider", "Scroll-triggered fade and parallax animations", "Fully responsive mobile-first layout"],
    technology: ["HTML5", "CSS3 (Grid & Flexbox)", "Vanilla JavaScript (ES6+)", "Intersection Observer API", "Google Fonts", "Font Awesome"],
    result: "The result is an upscale digital presence that mirrors the restaurant's real-world elegance, guiding guests smoothly from discovery to a confirmed reservation.",images: [
      "images/tanduriwala/2.jpeg",
      "images/tanduriwala/3.jpeg",
      "images/tanduriwala/4.jpeg",
      "images/tanduriwala/5.jpeg",
      "images/tanduriwala/6.jpeg",
      "images/tanduriwala/7.jpeg",
      "images/tanduriwala/8.jpeg",
      "images/tanduriwala/9.jpeg",
      "images/tanduriwala/10.jpeg",
      "images/tanduriwala/11.jpeg",
      "images/tanduriwala/12.jpeg",
      "images/tanduriwala/13.jpeg",
      "images/tanduriwala/14.jpeg",
      "images/tanduriwala/15.jpeg",
      "images/tanduriwala/16.jpeg"
      
    ],
    liveUrl: "https://restorantproject.github.io/restorant/"
  },
  {
    id: 4,
        title: "DEVELOPER ACADEMY",
    category: "SCHOOL / EDUCATIONAL INSTITUTION WEBSITE",
    description: "A complete informational platform for a school, bringing admissions, academics, results, notices and events together in one clean, easy-to-navigate site.",
    heroImage: "images/academy/1.png",
    about: "Developer Academy was built to give a school a genuine digital front door — a place where parents can check admissions and fees, students can track results and notices, and the institution's story comes through clearly.",
    built: ["School Landing Page", "Online Admissions Form", "Academics & Syllabus Pages", "Faculty Directory", "Photo Gallery & Events", "Notices & Announcements Board", "Student Result Checker"],
    features: ["Live scrolling announcement ticker", "Online admission form with fee structure & eligibility", "Class-wise syllabus and timetable listing", "Faculty profiles by subject/department", "Event and gallery showcase (sports day, annual function, workshops)", "Online result lookup for students", "Fully responsive across devices"],
    technology: ["HTML5", "CSS3", "Vanilla JavaScript", "Responsive Grid Layout"],
    result: "The result is a school website that functions as a genuine information hub — reducing phone calls and front-office queries by putting admissions, results and notices directly in parents' and students' hands.",images: [
      "images/academy/2.jpeg",
      "images/academy/3.jpeg",
      "images/academy/4.jpeg",
      "images/academy/5.jpeg",
      "images/academy/6.jpeg",
      "images/academy/7.jpeg",
      "images/academy/8.jpeg",
      "images/academy/9.jpeg",
      "images/academy/10.jpeg"
    ],
    liveUrl: "#"
  }
];

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
const listMarkup = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
const projectFromId = (id) => projects.find((project) => project.id === Number(id));
const projectModal = document.createElement("div");
projectModal.className = "case-study";
projectModal.setAttribute("aria-hidden", "true");
projectModal.innerHTML = `<div class="case-study-shell" role="dialog" aria-modal="true" aria-label="Project case study"><button class="case-study-close" type="button" aria-label="Close case study">CLOSE <span>×</span></button><div class="case-study-content"></div></div>`;
if (document.body) document.body.appendChild(projectModal);
const caseContent = projectModal.querySelector(".case-study-content");
const closeCaseStudy = () => {
  if (!projectModal.classList.contains("is-open")) return;
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("case-study-open");
  if (window.location.search) history.replaceState({}, "", "projects.html");
};
const renderCaseStudy = (project) => {
  caseContent.innerHTML = `<header class="case-study-hero"><div class="case-study-hero-copy"><div class="case-study-kicker">PROJECT ${String(project.id).padStart(2, "0")} / ${escapeHtml(project.category)}</div><h1>${escapeHtml(project.title)}</h1><p>${escapeHtml(project.description)}</p></div><div class="case-study-hero-image"><img src="${escapeHtml(project.heroImage)}" alt="${escapeHtml(project.title)} project preview"><button class="case-scroll-arrow" type="button" aria-label="Scroll to project details">↓</button></div></header><div class="case-study-body"><section class="case-study-intro"><div class="case-study-label">ABOUT THE PROJECT</div><p>${escapeHtml(project.about)}</p></section><div class="case-study-columns"><section><div class="case-study-label">WHAT WE BUILT</div><ul class="case-study-list">${listMarkup(project.built)}</ul></section><section><div class="case-study-label">KEY FEATURES</div><ul class="case-study-list">${listMarkup(project.features)}</ul></section></div><section class="case-study-tech"><div class="case-study-label">TECHNOLOGY / SERVICES</div><div class="case-study-tags">${project.technology.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div></section><section class="case-study-result"><div class="case-study-label">PROJECT RESULT</div><p>${escapeHtml(project.result)}</p></section><section class="case-study-gallery"><div class="case-study-label">PROJECT GALLERY</div><div class="gallery-grid">${project.images.map((image, index) => `<button type="button" class="gallery-item" data-gallery-index="${index}"><img src="${escapeHtml(image)}" alt="${escapeHtml(project.title)} gallery image ${index + 1}"></button>`).join("")}</div></section><div class="case-study-action"><a class="btn-primary" href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer">VIEW LIVE PROJECT →</a></div></div>`;
  caseContent.querySelector(".case-scroll-arrow").addEventListener("click", () => projectModal.querySelector(".case-study-body").scrollIntoView({ behavior: "smooth", block: "start" }));
  caseContent.querySelectorAll(".gallery-item").forEach((item) => item.addEventListener("click", () => openLightbox(project, Number(item.dataset.galleryIndex))));
};
const openCaseStudy = (id, updateHistory = false) => {
  const project = projectFromId(id);
  if (!project || !caseContent) return;
  renderCaseStudy(project);
  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("case-study-open");
  if (updateHistory) history.pushState({ project: project.id }, "", `projects.html?project=${project.id}`);
  projectModal.querySelector(".case-study-close").focus();
  projectModal.scrollTop = 0;
};
const lightbox = document.createElement("div");
lightbox.className = "case-lightbox";
lightbox.innerHTML = `<button class="lightbox-close" type="button" aria-label="Close image">×</button><button class="lightbox-prev" type="button" aria-label="Previous image">‹</button><figure><img alt=""></figure><button class="lightbox-next" type="button" aria-label="Next image">›</button>`;
document.body.appendChild(lightbox);
let activeGallery = null;
let activeGalleryIndex = 0;
const updateLightbox = () => {
  const image = lightbox.querySelector("img");
  image.src = activeGallery.images[activeGalleryIndex];
  image.alt = `${activeGallery.title} gallery image ${activeGalleryIndex + 1}`;
};
const openLightbox = (project, index) => {
  activeGallery = project;
  activeGalleryIndex = index;
  updateLightbox();
  lightbox.classList.add("is-open");
  lightbox.querySelector(".lightbox-close").focus();
};
projectModal.querySelector(".case-study-close").addEventListener("click", closeCaseStudy);
lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.classList.remove("is-open"));
lightbox.querySelector(".lightbox-prev").addEventListener("click", () => { activeGalleryIndex = (activeGalleryIndex - 1 + activeGallery.images.length) % activeGallery.images.length; updateLightbox(); });
lightbox.querySelector(".lightbox-next").addEventListener("click", () => { activeGalleryIndex = (activeGalleryIndex + 1) % activeGallery.images.length; updateLightbox(); });
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (lightbox.classList.contains("is-open")) lightbox.classList.remove("is-open");
  else closeCaseStudy();
});
window.addEventListener("popstate", () => {
  const projectId = new URLSearchParams(window.location.search).get("project");
  if (projectId) openCaseStudy(projectId);
  else closeCaseStudy();
});

const projectLinks = document.querySelectorAll(".project-link, .project-item .proj-link, .featured-project .btn-outline, .project-card .proj-link");
projectLinks.forEach((link, index) => {
  const projectId = Number(link.closest(".project-item")?.querySelector(".proj-num")?.textContent || link.closest(".project-card")?.querySelector("h3")?.dataset.projectId || index + 1);
  if (!projectFromId(projectId)) return;
  link.href = `projects.html?project=${projectId}`;
  link.dataset.projectId = projectId;
  if (link.closest(".featured-project")) link.textContent = "VIEW CASE STUDY →";
  link.addEventListener("click", (event) => {
    if (window.location.pathname.endsWith("projects.html")) {
      event.preventDefault();
      openCaseStudy(projectId, true);
    }
  });
});
const projectsPage = document.querySelector(".projects-band");
if (projectsPage) {
  const featured = projectsPage.querySelector(".featured-project");
  const featuredProject = projectFromId(1);
  if (featured && featuredProject) {
    const image = featured.querySelector(".project-visual img");
    if (image) { image.src = featuredProject.heroImage; image.alt = `${featuredProject.title} project preview`; }
    featured.querySelector(".proj-label").textContent = featuredProject.category;
    featured.querySelector(".project-name").innerHTML = "S_QUICK<br>MART";
    featured.querySelector(".project-copy").textContent = featuredProject.description;
  }
  projectsPage.querySelectorAll(".project-card").forEach((card, index) => {
    const project = projectFromId(index + 2);
    if (!project) return;
    const visual = card.querySelector(".project-visual");
    let image = visual.querySelector("img");
    if (!image) { image = document.createElement("img"); visual.prepend(image); }
    image.src = project.heroImage;
    image.alt = `${project.title} project preview`;
    card.querySelector(".proj-label").textContent = project.category;
    card.querySelector(".tag").textContent = project.category;
    card.querySelector("h3").textContent = project.title;
    card.querySelector("p").textContent = project.description;
  });
}
const requestedProject = new URLSearchParams(window.location.search).get("project");
if (requestedProject) openCaseStudy(requestedProject);
