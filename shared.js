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
    title: "S-Quick Mart",
    category: "GROCERY DELIVERY PLATFORM",
    description: "A complete online grocery platform built for fast shopping, easy ordering and reliable local delivery in Parbhani.",
    heroImage: "images/smart/quickmart.jpeg",
    about: "S_Quick Mart is a complete online grocery delivery platform built for customers in Parbhani. Customers can browse products, manage their account and address, use wishlist and cart, place orders and track deliveries. The platform offers 20–30 minute local delivery, YourNeed custom orders and Pickup & Drop services. Behind the customer experience, it includes an Admin Panel, Delivery Boy system and StockFlow inventory management, creating one connected ecosystem for shopping, stock, orders and delivery.",

built: [
  "Online Grocery Store",
  "Product Categories & Subcategories",
  "Customer Login & Account",
  "Address Management",
  "Wishlist & Shopping Cart",
  "Online Order System",
  "Order Tracking",
  "YourNeed Custom Orders",
  "Pickup & Drop Service",
  "Admin Management Panel",
  "Delivery Boy Management System",
  "StockFlow Inventory System",
  "Stock & Product Management",
  "Responsive Mobile Experience"
],

features: [
  "20–30 MINUTE LOCAL DELIVERY",
  "CATEGORIES & SUBCATEGORIES",
  "WISHLIST & SHOPPING CART",
  "ORDER TRACKING",
  "YOURNEED CUSTOM ORDERS",
  "PICKUP & DROP SERVICE",
  "ADMIN CONTROL PANEL",
  "DELIVERY BOY MANAGEMENT",
  "STOCKFLOW INVENTORY MANAGEMENT"
],

technology: [
  "FULL-STACK WEB DEVELOPMENT",
  "E-COMMERCE DEVELOPMENT",
  "UI/UX DESIGN",
  "RESPONSIVE WEB DESIGN",
  "ORDER MANAGEMENT SYSTEM",
  "INVENTORY MANAGEMENT SYSTEM"
],

result: "A complete local e-commerce ecosystem connecting customers, store operations, inventory management, administration and delivery teams in one integrated platform.",
images: [
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
    title: "PEAKVISTA",
    category: "LUXURY REAL ESTATE PLATFORM",
    description: "A premium property marketplace pairing calm editorial presentation with practical search, filtering and floor-plan discovery.",
    heroImage: "ima",
    about: "PeakVista was shaped for buyers who need confidence quickly: an elevated property experience with the information architecture of a serious marketplace.",
    built: ["Property Marketplace", "Advanced Search", "Property Filters", "Floor-plan Discovery", "Responsive UI", "Editorial Listing Pages"],
    features: ["Clear property comparison", "Fast search and filtering", "Premium visual hierarchy", "AR-ready floor-plan direction", "Responsive browsing experience"],
    technology: ["Next.js", "Minimal UI Design", "Mapbox Integration", "Framer Motion"],
    result: "The result is a more confident property browsing journey that lets high-value listings lead while keeping the practical details close at hand.",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop"
    ],
    liveUrl: "https://peakvista.com"
  },
  {
    id: 3,
    title: "DIGI-BUNNY",
    category: "WEB3 NFT LAUNCH PLATFORM",
    description: "A dark, atmospheric launch experience for a 5,000-piece NFT collection with wallet connection and live minting flows.",
    heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1400&auto=format&fit=crop",
    about: "Digi-Bunny turns a complex Web3 launch into a legible, high-energy interface that guides visitors from the collection story to minting.",
    built: ["NFT Launch Website", "Collection Showcase", "Wallet Connect Flow", "Live Minting UI", "Responsive UI", "Launch Communications"],
    features: ["Focused collection storytelling", "Clear wallet connection flow", "Live minting interface", "Neon-accent visual system", "Mobile-ready launch experience"],
    technology: ["Solidity", "Web3.js", "React", "Dark UI Design"],
    result: "The launch platform gives the collection a distinct visual world while keeping the critical minting journey direct, transparent and easy to follow.",
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&w=1400&auto=format&fit=crop"
    ],
    liveUrl: "https://digibunny.io"
  },
  {
    id: 4,
    title: "VIBE",
    category: "KIDS FASHION E-COMMERCE",
    description: "A bold editorial storefront for kidswear, built to make product browsing feel like turning through a lively fashion magazine.",
    heroImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop",
    about: "Vibe gives a playful fashion brand a clear digital voice through oversized type, confident product composition and a fast route to shopping.",
    built: ["Fashion E-Commerce Store", "Editorial Product Pages", "Collection Navigation", "Mobile Shopping Flow", "Responsive UI", "Motion-led Art Direction"],
    features: ["Editorial product storytelling", "Fast collection browsing", "Bold brand-led typography", "Mobile-first shopping flow", "Clear product discovery"],
    technology: ["Shopify", "Editorial UI Design", "Frontend Development", "Interaction Animation"],
    result: "The result is a distinctive storefront that gives the collection room to speak while keeping the shopping experience intuitive for parents and young audiences.",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1400&auto=format&fit=crop"
    ],
    liveUrl: "https://vibe-kids.com"
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
