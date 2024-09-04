document.addEventListener("DOMContentLoaded", () => {
    const purchase = document.getElementById("inputPurchase");
    const buttonSave = document.getElementById("buttonSave");
    const itemList = document.getElementById("itemList");

    buttonSave.addEventListener("click", (e) => {
        e.preventDefault();

        if(purchase.value === ""){
            alert("Por favor, introduza um item.");
            return;
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

        const buttonSave = document.createElement("button");
        const img = document.createElement("img")
        buttonSave.appendChild(img);
        buttonSave.classList.add("editButtons");
        img.src = "Assets/Excluir.png";
        img.classList.add("imgButton");


        containerOptions.appendChild(buttonSave);
        listItem.appendChild(containerPurchase);
        itemList.appendChild(listItem);

        containerPurchase.appendChild(chechBox);
        containerPurchase.appendChild(namePurchase);
        containerPurchase.appendChild(containerOptions);

        purchase.value = "";
    });
});
