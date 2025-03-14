const cartValue=document.querySelector("#cart-button");

export const updateCartValue=(cartProducts)=>{

    cartValue.innerHTML=`<i class="fa-solid fa-cart-arrow-down">${cartProducts.length}</i>`
}