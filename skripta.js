// ================================
// Spletna trgovina – razširjena osnova
// ================================

// Funkcija za prikaz sporočila na vrhu strani
function prikaziObvestilo(besedilo) {
    // Poiščemo prostor za obvestilo ali ga ustvarimo, če ne obstaja
    let obvestilo = document.getElementById("obvestilo");

    if (!obvestilo) {
        obvestilo = document.createElement("div");
        obvestilo.id = "obvestilo";
        obvestilo.style.backgroundColor = "#dff0d8";
        obvestilo.style.color = "#3c763d";
        obvestilo.style.padding = "10px";
        obvestilo.style.margin = "10px";
        obvestilo.style.border = "1px solid #3c763d";
        obvestilo.style.borderRadius = "4px";
        obvestilo.style.fontWeight = "bold";
        document.body.prepend(obvestilo); // doda na vrh strani
    }

    // Nastavimo besedilo obvestila
    obvestilo.textContent = besedilo;

    // Po 3 sekundah skrijemo obvestilo
    setTimeout(function() {
        obvestilo.remove();
    }, 3000);
}

// Funkcija, ki se sproži ob kliku na gumb
function dodajVKosarico() {
    prikaziObvestilo("Izdelek je dodan v košarico!");
}

// Poiščemo vse gumbe na strani
let gumbi = document.querySelectorAll("button");

// Vsakemu gumbu dodamo dogodek klik
gumbi.forEach(function(gumb) {
    gumb.addEventListener("click", dodajVKosarico);
});
