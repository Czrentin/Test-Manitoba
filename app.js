// Récupération du bouton
const boutonScroll = document.querySelector(".btn-scroll");
// Fonction pour scroll jusqu'à la section du formulaire
boutonScroll.addEventListener("click", function () {
  const element = document.querySelector(".form-section");
  element.scrollIntoView();
});

// Tableau avec les lieux
const textesDescription = [
  {
    nameForest: "Forêt en Bretagne",
    locationForest: "En Bretagne"
  },
  {
    nameForest: "Forêt en Normandie",
    locationForest: "En Normandie"
  },
  {
    nameForest: "Forêt en Ile-de-France",
    locationForest: "En Ile-de-France"
  },
  {
    nameForest: "Forêt en Bretagne",
    locationForest: "En Bretagne"
  },
  {
    nameForest: "Forêt en Bretagne",
    locationForest: "En Bretagne"
  },
  {
    nameForest: "Forêt en Bretagne",
    locationForest: "En Bretagne"
  },
  {
    nameForest: "Forêt en Bretagne",
    locationForest: "En Bretagne"
  },
];

// Récupération bouton en passant par le parent
const mapContainer = document.getElementById("map-container");
const picto = mapContainer.getElementsByClassName("picto");

// Ajoute la class active suivant le btn cliqué
for (let i = 0; i < picto.length; i++) {
  picto[i].addEventListener("click", function() {
    let active = document.getElementsByClassName("active");

    // si pas de class active
    if (active.length > 0) {
      active[0].className = active[0].className.replace(" active", "");
    }

    // Ajoute la class active au btn cliqué
    this.className += " active";

    // Remplacer le texte dans les éléments "h4" et "p" avec le texte approprié
    const name = textesDescription[i].nameForest;
    const location = textesDescription[i].locationForest;
    document.getElementById("forest-name").innerHTML = name;
    document.getElementById("forest-location").innerHTML = location;
  });
}