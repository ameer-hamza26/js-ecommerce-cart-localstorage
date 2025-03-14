import { updateCartValue } from "./upadateCartValue.js";

export const getCartProductsFromLS=()=>{
    let cartProducts=localStorage.getItem("cartProductsLS");
    if(!cartProducts){
        return [];
    }

    cartProducts=JSON.parse(cartProducts);
    
        updateCartValue(cartProducts);
    return cartProducts;
}