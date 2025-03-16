import { getCartProductsFromLS } from "./getCartProducts.js"
import { ShowToast } from "./ShowToast.js"
import { updateCartValue } from "./upadateCartValue.js"

export const removeProdFromCart = (id)=>{

    let cartProducts = getCartProductsFromLS()

    cartProducts=cartProducts.filter((currProd)=> currProd.id !== id)

    localStorage.setItem("cartProductsLS",JSON.stringify(cartProducts))

    let removeDiv=document.getElementById(`card${id}`)

    if(removeDiv){
        removeDiv.remove();
        ShowToast("delete",id)
    }

    updateCartValue(cartProducts )
}