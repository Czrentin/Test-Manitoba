// Récupération du bouton
const boutonScroll = document.querySelector(".btn-scroll");
// Fonction pour scroll jusqu'à la section du formulaire
boutonScroll.addEventListener("click", function () {
  const element = document.querySelector(".form-section");
  element.scrollIntoView();
});

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
  });
}