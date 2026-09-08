const cur = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
if (cur && ring) {
  let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = `${mx - 6}px`;
    cur.style.top = `${my - 6}px`;
  });
  (function a() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = `${rx}px`;
    ring.style.top = `${ry}px`;
    requestAnimationFrame(a);
  })();
  document
    .querySelectorAll(
      "a,button,.bento-card,.service-card,.project-item,.info-card",
    )
    .forEach((e) => {
      e.addEventListener("mouseenter", () => {
        cur.style.transform = "scale(3)";
        ring.style.opacity = "0";
      });
      e.addEventListener("mouseleave", () => {
        cur.style.transform = "scale(1)";
        ring.style.opacity = ".5";
      });
    });
}
const nav = document.getElementById("nav");
window.addEventListener("scroll", () =>
  nav?.classList.toggle("scrolled", scrollY > 50),
);
document.querySelectorAll(".reveal,.reveal-l,.reveal-r").forEach((e) => {
  e.style.transitionDelay = e.style.transitionDelay || "0s";
  new IntersectionObserver(
    (entries, o) =>
      entries.forEach((x) => {
        if (x.isIntersecting) {
          x.target.classList.add("visible");
          o.unobserve(x.target);
        }
      }),
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  ).observe(e);
});
