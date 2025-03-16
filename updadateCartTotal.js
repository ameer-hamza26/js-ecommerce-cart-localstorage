import { getCartProductsFromLS } from "./getCartProducts.js";

export const updadateCartTotal = () => {
  let productSubTotal = document.querySelector("#productSubTotal");
  let productFinalTotal = document.querySelector("#productFinalTotal");
  let LocalCartProducts = getCartProductsFromLS();

  let initialValue = 0;
  let totalProductsPrice = LocalCartProducts.reduce((accum, currElem) => {
    let productPrice = parseInt(currElem.price) || 0;
    return accum + productPrice;
  }, initialValue);

  // Apply condition for tax
  if (totalProductsPrice === 0) {
    // If no products, set both subtotal and final total to 0
    productSubTotal.innerText = `Rs : 0`;
    productFinalTotal.innerText = `Rs : 0`;
  } else {
    // If products exist, add tax (Rs : 50) to the final total
    productSubTotal.innerText = `Rs : ${totalProductsPrice}`;
    productFinalTotal.innerText = `Rs : ${totalProductsPrice + 50}`;
  }
};