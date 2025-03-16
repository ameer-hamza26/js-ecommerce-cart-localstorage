import { addToCart } from "./addToCart.js";
import { homeQuantityToggle } from "./homeQuantityToggle.js";

// Define productTemplate and productContainer outside the function
const productContainer = document.querySelector("#product-container");
const productTemplate = document.querySelector("#product-template");

if (!productTemplate) {
  console.error("Template container not found!");
}

if (!productContainer) {
  console.error("Product container not found!");
}

// Export the function
export const showProductContainer = (products) => {
  if (!products) {
    alert("You have no products in the lists");
    return false;
  }

  products.forEach((currProd) => {
    const { id, product, category, price, stock, description, image } = currProd;
    const productClone = document.importNode(productTemplate.content, true);

    // Add product data to the cloned template
    productClone.querySelector("#category").innerText = category;
    productClone.querySelector("#image").src = image;
    productClone.querySelector("#image").alt = image;
    productClone.querySelector("#product").innerText = product;
    productClone.querySelector("#description").innerText = description;
    productClone.querySelector("#price").innerText = `Rs ${price}`;
    productClone.querySelector("#actual-price").innerText = `Rs ${(price * 3).toFixed(2)}`;
    productClone.querySelector("#stock").innerText = `Stock ${stock}`;
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    // Add event listeners
    productClone.querySelector("#increase-decrease").addEventListener("click", (event) => {
      homeQuantityToggle(event, id, stock);
    });

    productClone.querySelector("#add-to-cart").addEventListener("click", (event) => {
      addToCart(event, id, stock);
    });

    // Append the cloned template to the product container
    productContainer.append(productClone);
  });
};