// Récupération du bouton
const boutonScroll = document.querySelector(".btn-scroll");
// Fonction pour scroll jusqu'à la section du formulaire
boutonScroll.addEventListener("click", function () {
  const element = document.querySelector(".form-section");
  element.scrollIntoView();
});

// Tableau avec les forêts
const forests = [
  { nameForest: "Bois des Vents Éternels", locationForest: "Valbelle" },
  { nameForest: "Forêt des Ombres Profondes", locationForest: "Noirebois" },
  { nameForest: "Bois des Chants d'Automne", locationForest: "Doréclair" },
  { nameForest: "Forêt des Mille Étoiles", locationForest: "Astridale" },
  { nameForest: "Bois des Flammes Ardentes", locationForest: "Feulieu" },
  { nameForest: "Forêt des Lumières Étincelantes", locationForest: "Brilleville" },
  { nameForest: "Bois des Marais Endormis", locationForest: "Sylvebrume" },
  { nameForest: "Forêt des Âmes en Peine", locationForest: "Mourneland" },
  { nameForest: "Bois des Murmures Silencieux", locationForest: "Chuchoterre" },
  { nameForest: "Forêt des Arbres Solitaires", locationForest: "Isolement" },
  { nameForest: "Bois des Fleurs Enchantées", locationForest: "Féerie" },
  { nameForest: "Forêt des Écailles d'Argent", locationForest: "Argentine" },
  { nameForest: "Bois des Secrets Perdus", locationForest: "Cacheterre" },
  { nameForest: "Forêt des Créatures Mystiques", locationForest: "Mystica" },
  { nameForest: "Bois des Tempêtes Épiques", locationForest: "Tempêtevie" },
  { nameForest: "Forêt des Regards de Braise", locationForest: "Braisefeu" },
  { nameForest: "Bois des Sages Anciens", locationForest: "Sagessebois" },
  { nameForest: "Forêt des Sources de Lumière", locationForest: "Lumièrebrume" },
  { nameForest: "Bois des Éclats de Lune", locationForest: "Lunessence" },
  { nameForest: "Forêt des Morts-Vivants", locationForest: "Nécrotis" },
  { nameForest: "Bois des Feuilles de Cristal", locationForest: "Cristalbois" },
  { nameForest: "Forêt des Dragons Légendaires", locationForest: "Dragontopie" },
  { nameForest: "Bois des Échos Éternels", locationForest: "Échoforêt" },
  { nameForest: "Forêt des Rêves Infinis", locationForest: "Rêverie" },
  { nameForest: "Bois des Brumes Énigmatiques", locationForest: "Nébulie" },
  { nameForest: "Forêt des Étoiles Scintillantes", locationForest: "Étoilelumière" },
  { nameForest: "Bois des Racines Profondes", locationForest: "Racineroc" }
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

    // Récupération des "h4" et "p" pour les modifier avec les données du tableau
    document.getElementById("forest-name").innerHTML = forests[i].nameForest;
    document.getElementById("forest-location").innerHTML = forests[i].locationForest;
  });
}