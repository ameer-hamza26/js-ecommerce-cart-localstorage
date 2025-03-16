import products from "./api/products.json"
import { getCartProductsFromLS } from "./getCartProducts.js"
import { fetchQuantityFromLS } from "./fetchQuantityFromLS.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { updadateCartTotal } from "./updadateCartTotal.js";


let cartProducts= getCartProductsFromLS();


let filterProducts=products.filter((currProd)=>{
    
    return cartProducts.some((currElem)=> currElem.id === currProd.id)

})

// console.log(filterProducts)


const cartElement= document.querySelector("#product-container")
const templateContainer= document.querySelector("#product-cart-template")

const showCartProduct = ()=>{
    filterProducts.forEach(currProd => {
        const {id,product,category,price,stock,image} = currProd;
        const productClone = document.importNode(templateContainer.content,true);

        let LsActualData = fetchQuantityFromLS(id,price)

        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
        productClone.querySelector("#price").innerText=LsActualData.price;
        productClone.querySelector("#result").innerText=LsActualData.quantity;
        productClone.querySelector("#image").src=image;
        productClone.querySelector("#category").innerText=category;
        productClone.querySelector("#product").innerText=product;

                productClone.querySelector("#increase-decrease").addEventListener("click",(event)=>{
                    incrementDecrement(event,id,stock,price)
                });
        
        productClone.querySelector("#remove-from-cart").addEventListener("click",()=> removeProdFromCart(id))

        cartElement.appendChild(productClone)



    });
}

showCartProduct()


updadateCartTotal()