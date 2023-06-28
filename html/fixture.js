// Obtener el contenedor
var container = document.getElementById("container-teams");

// Crear una función para generar el contenido de cada bloque
function createBlock() {
    let block = document.createElement("div");
    block.classList.add("container1");

    let team1 = document.createElement("div");
    team1.classList.add("team1");
    let team1Img = document.createElement("img");
    team1Img.classList.add("escudo");
    team1Img.src = "../images/escudo.png";
    team1Img.alt = "escudo";
    let team1Name = document.createElement("p");
    team1Name.classList.add("equipo");
    team1Name.textContent = "Equipo 1";
    team1.appendChild(team1Img);
    team1.appendChild(team1Name);

    let team2 = document.createElement("div");
    team2.classList.add("team2");
    let team2Img = document.createElement("img");
    team2Img.classList.add("escudo");
    team2Img.src = "../images/escudo.png";
    team2Img.alt = "escudo";
    let team2Name = document.createElement("p");
    team2Name.classList.add("equipo");
    team2Name.textContent = "Equipo 2";
    team2.appendChild(team2Img);
    team2.appendChild(team2Name);

    block.appendChild(team1);
    block.appendChild(team2);

    return block;
}

// Crear una función para generar el contenido de ubicación y fecha
function createInfo() {
    let info = document.createElement("div");
    info.classList.add("container2");

    let location = document.createElement("div");
    location.classList.add("ubi");
    let locationImg = document.createElement("img");
    locationImg.src = "../images/location.svg";
    locationImg.alt = "ubicacion";
    let locationText = document.createElement("p");
    locationText.textContent = "UBICACION";
    location.appendChild(locationImg);
    location.appendChild(locationText);

    let date = document.createElement("div");
    date.classList.add("fecha");
    let dateImg = document.createElement("img");
    dateImg.src = "../images/calendar.svg";
    dateImg.alt = "calendario";
    let dateText = document.createElement("p");
    dateText.textContent = "FECHA";
    date.appendChild(dateImg);
    date.appendChild(dateText);

    info.appendChild(location);
    info.appendChild(date);

    return info;
}

// Generar el contenido repetitivo utilizando loops
for (let i = 0; i < 9; i++) {
    let teamBlock = document.createElement("div");
    teamBlock.appendChild(createBlock());
    teamBlock.appendChild(createInfo());
    container.appendChild(teamBlock);
}
