export function ShowToast(operation,id){

    const toast = document.createElement("div")

    toast.classList.add("toast")

    if(operation === "add"){
        toast.textContent = `product with id ${id} has been added`
    }
    else if(operation=== "delete") {
        toast.textContent = `product with id ${id} has been deleted`
    }
else{
        toast.textContent = `Form has been submitted succesfuly`
}
    document.body.appendChild(toast)

    setTimeout(() => {
        toast.remove()
        console.log("removed")
    }, 2000);
}