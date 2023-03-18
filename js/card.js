for (let i of database.data) {
    //Create Card
    let card = document.createElement("div");
    card.classList.add("item","design","col-sm-6","col-md-4","col-lg-4","mb-4");
    card.setAttribute("id", i.title);

    let cardContent = document.createElement("div");
    cardContent.classList.add("card", i.category, "text-center");
    // cardContent.classList.add("card", i.category, "text-center","hide");
    card.appendChild(cardContent);

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.innerText = i.category;
    cardContent.appendChild(cardHeader);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardContent.appendChild(cardBody);

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = i.title;
    cardBody.appendChild(cardTitle);

    for(let s of i.labels){
      let label = document.createElement("span");
      label.classList.add("badge","rounded-pill","text-bg-primary");
      label.innerText = s;
      cardBody.appendChild(label);
    }

    let cardDesc = document.createElement("p");
    cardDesc.classList.add("card");
    cardDesc.innerText = i.description;
    cardBody.appendChild(cardDesc);
    
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer", "text-muted");
    cardContent.appendChild(cardFooter);

    let detalles = document.createElement("button");
    detalles.classList.add("btn","btn-dark","mt-3");
    detalles.setAttribute("href","#");
    detalles.setAttribute("type","button");
    detalles.setAttribute("data-bs-toggle","modal");
    detalles.setAttribute("data-bs-target",i.modal);
    detalles.innerText = "Detalles ";
    cardFooter.appendChild(detalles);

    let mas = document.createElement("span");
    mas.classList.add("bi-info-circle-fill");
    detalles.appendChild(mas);

    document.getElementById("portfolio").appendChild(card);
  }