window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("body > header > constrainer > #toggle").addEventListener("click", (event) => {
    document.querySelector("body > header").classList.toggle("active");
  });
  document.querySelectorAll("a[href=\"" + window.location.origin + window.location.pathname + "\"]").forEach((element) => {
    element.classList.add("current");
  });
});