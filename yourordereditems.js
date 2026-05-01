let itemList = [{
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
];

let orderedItemsContainerEl = document.getElementById("orderedItemsContainer");
let headingElementEl = document.createElement("h1");
headingElementEl.textContent = "Your Ordered Items";
orderedItemsContainerEl.appendChild(headingElementEl);


let orderedListItemsEl = document.createElement("ul");
orderedItemsContainerEl.appendChild(orderedListItemsEl);
orderedListItemsEl.classList.add("m-3");

function removeTheOrder(orderedItemId) {
    let orderedItem = document.getElementById(orderedItemId);
    orderedListItemsEl.removeChild(orderedItem);
}

function addItemsToTheContainer(itemListObject) {



    let orderedItemId = "item" + itemListObject.uniqueNo;
    let labelElId = itemListObject.uniqueNo;
    let buttonElId = "button" + itemListObject.uniqueNo;


    let orderedListItemContainer = document.createElement("li");
    orderedListItemContainer.classList.add("text-center");
    orderedListItemContainer.classList.add("listItemContainerEl");
    orderedListItemContainer.classList.add("d-flex", "flex-row");
    orderedListItemContainer.classList.add("orderedListItemContainer");
    orderedListItemContainer.setAttribute("id", orderedItemId);

    let labelEl = document.createElement("label");
    labelEl.textContent = itemListObject.itemName;
    labelEl.setAttribute("id", labelElId);
    labelEl.classList.add("label-styles");
    orderedListItemContainer.appendChild(labelEl);

    let buttonEl = document.createElement("button");
    buttonEl.textContent = "Cancel";
    buttonEl.classList.add("btn", "btn-danger", "ml-3");
    buttonEl.setAttribute("id", buttonElId);
    buttonEl.setAttribute("for", labelElId);
    orderedListItemContainer.appendChild(buttonEl);

    orderedListItemsEl.appendChild(orderedListItemContainer);

    buttonEl.onclick = function () {
        removeTheOrder(orderedItemId);
    };

}



for (let itemListObject of itemList) {
    addItemsToTheContainer(itemListObject);
}