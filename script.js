const liste_reseaux = document.getElementById("liste_reseaux");

function toggleVisibility() {
  if (liste_reseaux.classList.contains("opacity-0")) {
    // Afficher l'élément
    liste_reseaux.classList.remove("opacity-0");
    liste_reseaux.classList.add("opacity-1");
  } else {
    // Masquer l'élément
    liste_reseaux.classList.remove("opacity-1");
    liste_reseaux.classList.add("opacity-0");
  }
}

document.getElementById("partager").addEventListener("click", toggleVisibility);
document
  .getElementById("partager_banniere")
  .addEventListener("click", toggleVisibility);
