document.addEventListener("DOMContentLoaded", () => {
    const purchase = document.getElementById("inputPurchase");
    const buttonSave = document.getElementById("buttonSave");
    const itemList = document.getElementById("itemList");

    buttonSave.addEventListener("click", (e) => {
        e.preventDefault();

        if(purchase.value === ""){
            alert("Por favor, introduza um item.");
        } else {
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

            let dayOfPurchase = GetDate();
            let dayOfPurchaseNode = document.createTextNode(dayOfPurchase)

            const textDayOfPurchase = document.createElement("p");
            
            textDayOfPurchase.appendChild(dayOfPurchaseNode);

            containerOptions.appendChild(buttonDelete);
            containerOptions.appendChild(buttonEdit);
            listItem.appendChild(containerPurchase);
            itemList.appendChild(listItem);

            containerPurchase.appendChild(chechBox);
            containerPurchase.appendChild(namePurchase);
            containerPurchase.appendChild(containerOptions);
            listItem.appendChild(textDayOfPurchase);

            purchase.value = "";


        }
    });
});

function GetDate(){
    let date = new Date()

    let daysOfWeek = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-feira", "Sabado"];
    

    let actualDayOfWeek = daysOfWeek[date.getDay()];
    let dayNumber = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth()).padStart(2, "0");
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = String(date.getMinutes()).padStart(2, "0");

    let descriptionOfTheDay = (`${actualDayOfWeek} (${dayNumber}/${month}/${year}) às ${hours}:${minutes}`);
    return descriptionOfTheDay;
}
