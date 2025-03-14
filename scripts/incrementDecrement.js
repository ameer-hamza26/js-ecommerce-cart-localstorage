import { getCartProductsFromLS } from "./getCartProducts.js";
import { updadateCartTotal } from "./updadateCartTotal.js";

export const incrementDecrement =(event,id,stock,price)=>{
    

    const currentCardElement = document.querySelector(`#card${id}`)
    
    let productQuantity = currentCardElement.querySelector("#result")

    let productPrice = currentCardElement.querySelector("#price")

    let quantity= 1;
    let localStoragePrice= 0 

    let LocalCartProducts = getCartProductsFromLS()

    let existingProduct = LocalCartProducts.find((currProd)=> currProd.id === id)

    console.log("LocalCartProducts:", LocalCartProducts);
console.log("existingProduct:", existingProduct);
    if(existingProduct){
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price;
    }
    else{
        localStoragePrice=price;
        price=price
    }

    if(event.target.id === "max"){
        if(quantity<stock){
            quantity = ++quantity;
        }
        else if(quantity === stock){
            quantity = stock;
            localStoragePrice = price * stock
            localStoragePrice = Number(localStoragePrice.toFixed(2))
        }
    }
    
    if(event.target.id === "min"){
        if(quantity > 1){
            quantity = --quantity;
        }
        else if(quantity === 1){
             
            quantity = 1
        }
    }
    
    localStoragePrice = (price * quantity).toFixed(2)

    let updatedCart = {
        id,price:localStoragePrice,quantity
    }

    updatedCart = LocalCartProducts.map((currProd)=>{
        return currProd.id === id ? updatedCart : currProd
    })

     
    localStorage.setItem("cartProductsLS",JSON.stringify(updatedCart));

    productQuantity.innerHTML = quantity
    productPrice.innerHTML = localStoragePrice


updadateCartTotal()
}
