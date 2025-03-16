import { addToCart } from "./addToCart.js";
import { homeQuantityToggle } from "./homeQuantityToggle.js";


const productContainer=document.querySelector("#product-container");
const productTemplate=document.querySelector("#product-template");

export const showProductContainer= (products)=>{
    if(!products){
        alert("You have no products in the lists")
        return false
    }

    products.forEach(currProd => {
        const {id,product,category,price,brand,stock,description,image} = currProd;
        const productClone = document.importNode(productTemplate.content,true);
       
        productClone.querySelector("#category").innerText=category;
        productClone.querySelector("#image").src=image;
        productClone.querySelector("#image").alt=image;
        productClone.querySelector("#product").innerText=product;
        productClone.querySelector("#description").innerText=description;
        productClone.querySelector("#price").innerText=`Rs ${price}`;
        productClone.querySelector("#actual-price").innerText = `Rs ${(price * 3).toFixed(2)}`;
        productClone.querySelector("#stock").innerText=`Stock ${stock}`;
        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);

        productClone.querySelector("#increase-decrease").addEventListener("click",(event)=>{
            homeQuantityToggle(event,id,stock)
        });

        productClone.querySelector("#add-to-cart").addEventListener("click",(event)=>{
            addToCart(event,id,stock)

        })

        productContainer.append(productClone);

    });
}