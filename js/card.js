for (let i of database.data) {
    //Create Card
    let card = document.createElement("div");
    card.classList.add("item");
    card.setAttribute("id", i.projectName);
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.projectName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price + " MXN";
    container.appendChild(price);
  
    //inventory 
    let inventory = document.createElement("h6");
    inventory.innerText = "Disponibles: " + i.inventory;
    container.appendChild(inventory);
  
    let division = document.createElement("hr");
    container.appendChild(division);
  
    //buy
    let buying = document.createElement("button");
    order.setAttribute("type", "submit");
    buying.innerText = "Comprar".toUpperCase();
    buying.classList.add("catalog-button");
    container.appendChild(buying);
  
    card.appendChild(container);
    document.getElementById("portfolio-grid").appendChild(card);
  }