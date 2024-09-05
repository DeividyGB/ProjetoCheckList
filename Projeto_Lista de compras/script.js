document.addEventListener("DOMContentLoaded", () => {
    const purchase = document.getElementById("inputPurchase");
    const buttonSave = document.getElementById("buttonSave");
    const itemList = document.getElementById("itemList");

    buttonSave.addEventListener("click", (e) => {
        e.preventDefault();

        if(purchase.value === ""){
            alert("Por favor, introduza um item.");
        }

        const listItem = document.createElement("li");
        const containerPurchase = document.createElement("div");
        containerPurchase.classList.add("containerCompra");

        const namePurchase = document.createElement("p");
        namePurchase.textContent = purchase.value;

        const chechBox = document.createElement("input");
        chechBox.setAttribute("type", "checkbox");
        chechBox.classList.add("checkBoxContainer");

        const containerOptions = document.createElement("div");
        containerOptions.classList.add("containerOptions");

        const buttonDelete = document.createElement("button");
        const imgDelete = document.createElement("img")
        buttonDelete.appendChild(imgDelete);
        buttonDelete.classList.add("editButtons");
        imgDelete.src = "Assets/Excluir.png";
        imgDelete.classList.add("imgButton");
        
        const buttonEdit = document.createElement("button");
        const imgEdit = document.createElement("img");
        buttonEdit.appendChild(imgEdit);
        buttonEdit.classList.add("editButtons")
        imgEdit.src = "Assets/Edição.png";
        imgEdit.classList.add("imgButton");

        const date = new Date()
        console.log(date);

        
        containerOptions.appendChild(buttonDelete);
        containerOptions.appendChild(buttonEdit);
        listItem.appendChild(containerPurchase);
        itemList.appendChild(listItem);

        containerPurchase.appendChild(chechBox);
        containerPurchase.appendChild(namePurchase);
        containerPurchase.appendChild(containerOptions);

        purchase.value = "";
    });
});
