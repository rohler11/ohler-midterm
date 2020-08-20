"use strict";

let products = [
  {
    name: "Ikat Bowls (Set of 3)",
    category: "Kitchenware",
    description:
      "Set of 3 handmade glazed earthenware bowls featuring a bold ikat print.",
    price: 48,
    src: "product_images/bowls.jpg",
  },
  {
    name: "Rainbow Whisk",
    category: "Kitchenware",
    description: "Matte silicone rainbow whisk with a stainless steel handle.",
    price: 22,
    src: "product_images/whisk.jpg",
  },
  {
    name: "Chartreuse Tea Kettle",
    category: "Kitchenware",
    description:
      "Tea kettle with smooth glossy enamel finish and black bamboo handle.",
    price: 60,
    src: "product_images/kettle.jpg",
  },
  {
    name: "Le Creuset Saucepan",
    category: "Kitchenware",
    description:
      "Cast iron sauce pan coated in chip resistant red enamel and nonstick interior.",
    price: 190,
    src: "product_images/pan.jpg",
  },
  {
    name: "Clay Vase",
    category: "Home goods",
    description: "Classic bottle vase hand sculpted with natural clay.",
    price: 30,
    src: "product_images/pitcher.jpg",
  },
  {
    name: "Panda Plant",
    category: "Home goods",
    description:
      "Artificial Panda Plant succulent with a white stoneware planter.",
    price: 50,
    src: "product_images/plant.jpg",
  },
  {
    name: "Circle Mirror",
    category: "Furniture",
    description: "Circular glass mirror framed in carved suar wood.",
    price: 140,
    src: "product_images/mirror.jpg",
  },
  {
    name: "Bedding Set",
    category: "Home goods",
    description:
      "Collection of fine cotton bedding featuring mixed graphic pillows and a linen duvet.",
    price: 200,
    src: "product_images/bed.jpg",
  },
  {
    name: "Whatever Print with frame",
    category: "Home goods",
    description: "Matted bold graphic 8x10 print inside a black wooden frame.",
    price: 60,
    src: "product_images/photograph.jpg",
  },
  {
    name: "Dining Room Table Set",
    category: "Furniture",
    description: "Sleek bamboo dinette set with two dining chairs.",
    price: 260,
    src: "product_images/tableSet.jpg",
  },
  {
    name: "Pink Accent Chair",
    category: "Furniture",
    description:
      "Accent chair upholstered in pink wool-like fibers with tufted back.",
    price: 180,
    src: "product_images/pinkChair.jpg",
  },
  {
    name: "Wood Block Coffee Table",
    category: "Furniture",
    description: "Solid reclaimed wood coffee table with a natural finish.",
    price: 450,
    src: "product_images/coffeeTable.jpg",
  },
];

//function that is creating all the products on the main page from the products array

let productContainer = document.querySelector(".product-container");

const createProductCard = () => {
  productContainer.innerHTML = "";
  products.forEach((product, index) => {
    let card = document.createElement("div");
    card.classList.add("product-card");
    let productImage = document.createElement("img");
    productImage.classList.add("image");
    productImage.setAttribute("src", product.src);
    let productName = document.createElement("h2");
    productName.classList.add("product");
    productName.innerText = product.name;
    let productDescription = document.createElement("p");
    productDescription.classList.add("product", "desc", "info");
    productDescription.innerText = product.description;
    let productPrice = document.createElement("p");
    productPrice.classList.add("product", "price", "info");
    productPrice.innerText = `$${product.price}`;
    let productCategory = document.createElement("p");
    productCategory.classList.add("product", "category", "info");
    productCategory.innerText = product.category;
    let addCartButton = document.createElement("button");
    addCartButton.classList.add("add-cart");
    addCartButton.innerText = "Add to cart";
    addCartButton.setAttribute("data-index", index);
    card.append(
      productImage,
      productName,
      productCategory,
      productDescription,
      productPrice,
      addCartButton
    );
    productContainer.append(card);
  });
};

createProductCard();
// --------------------------------
//button showing and hidiing shopping cart
let shoppingCart = document.querySelector(".shopping-cart");

let shoppingCartShow = document.querySelector(".cartButton");
shoppingCartShow.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hi");
  shoppingCart.classList.remove("hide");
});

//empty shopping array

let shoppingCartArray = [];

let insideCart = document.querySelector(".inside-cart");
let cartItems = document.querySelector(".cart-items");

let subtotalArea = document.querySelector(".subtotal");

let addCartButton = document.querySelector(".add-cart");

let productCard = document.querySelector(".product-card");

let total = 0;
let totalTax = 0;
let finalTotal = 0;

productContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-cart")) {
    let index = e.target.getAttribute("data-index");
    shoppingCartArray.push(products[index]);
    cartItems.innerHTML = "";
    let total = 0;
    shoppingCartArray.forEach((product) => {
      total += product.price;
      let card = document.createElement("div");
      card.classList.add("cart-product");
      let productImage = document.createElement("img");
      productImage.classList.add("image", "image-cart");
      productImage.setAttribute("src", product.src);
      let productName = document.createElement("h2");
      productName.classList.add("product", "name");
      productName.innerText = product.name;
      let productPrice = document.createElement("p");
      productPrice.classList.add("product", "price", "info");
      productPrice.innerText = `$${product.price}`;
      card.append(productImage, productName, productPrice);
      cartItems.append(card);
    });
    let totalParagraph = document.createElement("p");
    totalParagraph.innerText = `Cart Subtotal: $${total}`;
    let taxParagraph = document.createElement("p");
    let totalTax = total * 0.06;
    taxParagraph.innerText = `Sales Tax Total: $${totalTax.toFixed(2)}`;
    let finalTotalParagraph = document.createElement("p");
    finalTotal = total + totalTax;
    finalTotalParagraph.innerText = `Total Due: $${finalTotal.toFixed(2)}`;
    subtotalArea.innerHTML = "";
    subtotalArea.append(totalParagraph, taxParagraph, finalTotalParagraph);
  }
});

let checkoutButton = document.querySelector(".checkout-button");
let checkoutForm = document.querySelector(".checkout-window");
checkoutButton.addEventListener("click", () => {
  shoppingCart.classList.add("hide");
  checkoutForm.classList.remove("hide");
});

let receiptContent = document.querySelector(".receipt-items");

productContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-cart")) {
    receiptContent.innerHTML = "";
    shoppingCartArray.forEach((product) => {
      total += product.price;
      let receiptCard = document.createElement("div");
      receiptCard.classList.add("cart-product");
      let productImage = document.createElement("img");
      productImage.classList.add("image", "image-cart");
      productImage.setAttribute("src", product.src);
      let productName = document.createElement("h2");
      productName.classList.add("product", "name");
      productName.innerText = product.name;
      let productPrice = document.createElement("p");
      productPrice.classList.add("product", "price", "info");
      productPrice.innerText = `$${product.price}`;
      receiptCard.append(productImage, productName, productPrice);
      receiptContent.append(receiptCard);
    });
  }
});

let cashSubtotal = document.querySelector(".cash-subtotal");
// let cashCheckoutButton = document.querySelector(".cashfinish");
let cashInput = document.querySelector(".cashcheckout");
let receiptPage = document.querySelector(".receipt");

cashInput.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(cashInput);
  let amount = data.get("camount");
  checkoutForm.classList.add("hide");
  receiptPage.classList.remove("hide");
  let changeDue = amount - finalTotal;
  let amountPaidParagraph = document.createElement("p");
  amountPaidParagraph.innerText = `Total Cash Paid $${amount}`;
  let changeDueParagraph = document.createElement("p");
  changeDueParagraph.innerText = `Change Due $${changeDue.toFixed(2)}`;
  cashSubtotal.append(amountPaidParagraph, changeDueParagraph);
});

let cardInput = document.querySelector(".cardcheckout");
let cardSubtotal = document.querySelector(".card-subtotal");

cardInput.addEventListener("submit", (e) => {
  e.preventDefault();
  checkoutForm.classList.add("hide");
  receiptPage.classList.remove("hide");
  let totalPaidParagraph = document.createElement("p");
  totalPaidParagraph.innerText = `Total Paid: $${finalTotal.toFixed(2)}`;
  cardSubtotal.append(totalPaidParagraph);
});

shoppingCart.addEventListener("click", (e) => {
  if (e.target.classList.contains("background")) {
    e.preventDefault();
    shoppingCart.classList.add("hide");
  }
});

checkoutForm.addEventListener("click", (e) => {
  if (e.target.classList.contains("background")) {
    e.preventDefault();
    checkoutForm.classList.add("hide");
  }
});

receiptPage.addEventListener("click", (e) => {
  if (e.target.classList.contains("background")) {
    e.preventDefault();
    receiptPage.classList.add("hide");
  }
});
