import { getCartProductsFromLS } from "./getCartProducts.js"

export const updadateCartTotal =()=>{

    let productSubTotal = document.querySelector("#productSubTotal")
    let productFinalTotal = document.querySelector("#productFinalTotal")
    let LocalCartProducts  =getCartProductsFromLS()

    let initialValue = 0
    let totalProductsPrice = LocalCartProducts.reduce((accum,currElem)=>{

        let productPrice = parseInt(currElem.price) || 0
        return accum + productPrice

    },initialValue)

    productSubTotal.innerText = `Rs : ${totalProductsPrice}` 
    // console.log(totalProductsPrice)
    productFinalTotal.innerText = `Rs : ${totalProductsPrice + 50}`
}