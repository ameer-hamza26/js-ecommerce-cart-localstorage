import { getCartProductsFromLS } from "./getCartProducts.js";
import { ShowToast } from "./ShowToast.js";
import { updateCartValue } from "./upadateCartValue.js";




getCartProductsFromLS();

export const addToCart = (event,id,stock)=>{

    let arrLocalStorageProduct = getCartProductsFromLS();
    
    const currentProductElem=document.querySelector(`#card${id}`);
    
    // console.log(currentProductElem)
    
    let quantity = currentProductElem.querySelector("#result").innerText;
    let price = currentProductElem.querySelector("#price").innerText; 

    // console.log("price",price,"and qunatity", quantity)



    
    price = price.replace("Rs","");

    let existingProduct=arrLocalStorageProduct.find((currProd)=> currProd.id===id) 


    if(existingProduct && quantity > 1){
        quantity = Number(existingProduct.quantity) + Number(quantity);
        price = Number(price * quantity).toFixed(2);

        let updatedCart = {
            id,price,quantity
        }

        updatedCart = arrLocalStorageProduct.map((currProd)=>{
            return currProd.id === id ? updatedCart : currProd
        })

        
    localStorage.setItem("cartProductsLS",JSON.stringify(updatedCart));

    }
    if(existingProduct){
        // alert("The product is already available in the Cart");
        return false
    }


    price=Number(quantity*price).toFixed(2);
    quantity= Number(quantity)
    
    arrLocalStorageProduct.push({id,quantity,price});
    localStorage.setItem("cartProductsLS",JSON.stringify(arrLocalStorageProduct));

    
    updateCartValue(arrLocalStorageProduct);
    ShowToast("add",id)

}