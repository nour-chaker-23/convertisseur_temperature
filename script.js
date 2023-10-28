function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit;
}

// sauvegarder les préférences
function savePreferences() {
  var selectedUnit = document.getElementById("units").value;
  localStorage.setItem("defaultUnit", selectedUnit);
  alert("Préférences sauvegardées avec succès !");
}   
// Fonction pour charger les préférences sauvegardées
window.onload = function() {
  var defaultUnit = localStorage.getItem("defaultUnit");
  if (defaultUnit) {
    document.getElementById("units").value = defaultUnit;
  }
}
