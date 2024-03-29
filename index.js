const products = [
  {
    id: 1,
    name: "Samsung",
    model: "S23",
    ImageUrl: "images/s23.jpg",
  },
  {
    id: 2,
    name: "Apple",
    model: "i 15 pro max",
    ImageUrl: "images/i15 pro.jpg",
  },
  {
    id: 3,
    name: "Sony",
    model: "Xperia",
    ImageUrl: "images/xperia.jpg",
  },
  {
    id: 4,
    name: "Xiaomi",
    model: "note 13 pro",
    ImageUrl: "images/xiaomi.jpg",
  },
  {
    id: 5,
    name: "One Plus",
    model: "13 pro",
    ImageUrl: "images/oneplus.jpg",
  },
  {
    id: 6,
    name: "Realme",
    model: "narzo 50",
    ImageUrl: "images/realme.jpg",
  },
  {
    id: 7,
    name: "Oppo",
    model: "reno 6",
    ImageUrl: "images/oppo.jpg",
  },
  {
    id: 8,
    name: "Vivo",
    model: "v29e",
    ImageUrl: "images/vivo.jpg",
  },
];

const div = document.getElementById("div");
const input = document.getElementById("input");
const cart = document.getElementById("cart");
const p = document.getElementById("p");
const heading = document.getElementById("heading");

let colorIndex = 0;
let visibleIndex = "";

setInterval(function () {
  const colors = ["red", "orange", "yellow"];
  const visible = ["visible", "hidden"];
  heading.style.visibility = visible[visibleIndex];
  visibleIndex = (visibleIndex + 1) % visible.length;
  heading.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 1000);

let count = 0;
let cartItems = [];

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
      const index = cartItems.indexOf(product);
      if (index === -1) {
        cartItems.push(product);
        button.textContent = "Remove from Cart";
      } else {
        cartItems.splice(index, 1);
        button.textContent = "Add To Cart";
      }
      p.innerHTML = `<h2>${cartItems.length}</h2>`;
    });

    productCard.addEventListener("mouseenter", () => {
      button.classList.add("btns");
    });

    productCard.addEventListener("mouseleave", () => {
      button.classList.remove("btns");
    });
  });
}

input.addEventListener("focusin", () => {
  input.style.padding = "0 85px";
  input.style.backgroundColor = "pink";
  input.style.color = "black";
});

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
