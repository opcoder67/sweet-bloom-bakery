const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");
let count = 0;

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    cartCount.textContent = count;
    toast.textContent = `${button.dataset.name} added to your cart`;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
  });
});

const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product");
filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");
    const category = filter.dataset.filter;
    products.forEach((product) => {
      product.classList.toggle("hidden", category !== "all" && product.dataset.category !== category);
    });
  });
});

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
