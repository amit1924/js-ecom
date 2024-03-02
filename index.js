const products = [
  {
    id: 1,
    name: "Samsung",
    model: "S23",
    ImageUrl: "s23.jpg",
  },
  {
    id: 2,
    name: "Apple",
    model: "i 15 pro max",
    ImageUrl: "i15 pro.jpg",
  },
  {
    id: 3,
    name: "Sony",
    model: "Xperia",
    ImageUrl: "xperia.jpg",
  },
  {
    id: 4,
    name: "Xiaomi",
    model: "note 13 pro",
    ImageUrl: "xiaomi.jpg",
  },
  {
    id: 5,
    name: "One Plus",
    model: "13 pro",
    ImageUrl: "oneplus.jpg",
  },
  {
    id: 6,
    name: "Realme",
    model: "narzo 50",
    ImageUrl: "realme.jpg",
  },
  {
    id: 7,
    name: "Oppo",
    model: "reno 6",
    ImageUrl: "oppo.jpg",
  },
  {
    id: 8,
    name: "Vivo",
    model: "v29e",
    ImageUrl: "vivo.jpg",
  },
];

const div = document.getElementById("div");
const input = document.getElementById("input");
const cart = document.getElementById("cart");
const p = document.getElementById("p");

let count = 0; // Move the count variable outside the event listener

function searchedProducts(productsToRender) {
  div.innerHTML = "";

  productsToRender.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");

    productCard.innerHTML = `
            <h1>${product.name}</h1>
            <h2>${product.model}</h2>
            <img src="${product.ImageUrl}" lt="${product.name}">
            <button class="btn">Add To Cart</button>
          `;

    div.appendChild(productCard);

    const button = productCard.querySelector(".btn");
    button.addEventListener("click", () => {
      count++;
      p.innerHTML = `<h2>${count}</h2>`;
    });
  });
}

input.addEventListener("change", () => {
  const value = input.value.toLowerCase();
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(value) ||
      product.model.toLowerCase().includes(value)
    );
  });
  searchedProducts(filteredProducts);
});

searchedProducts(products);
