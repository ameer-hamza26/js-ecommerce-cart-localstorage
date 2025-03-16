export const homeQuantityToggle = (event,id,stock)=>{
const currentCardElement = document.querySelector(`#card${id}`)
// console.log(currentCardElement)

let productQuantity = currentCardElement.querySelector("#result")
console.log(productQuantity)

let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;


if(event.target.id === "max"){
    if(quantity<stock){
        quantity = ++quantity;
    }
    else if(quantity === stock){
        quantity = stock;
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

productQuantity.innerText = quantity;
console.log(quantity)
productQuantity.setAttribute("data-quantity",quantity)
}