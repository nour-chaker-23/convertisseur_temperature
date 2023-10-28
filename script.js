function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit;
}
function convertTemperature() {
  var celsiusInput = document.getElementById("celsius");
  var celsiusValue = parseFloat(celsiusInput.value);

  // Vérifie si la valeur est un nombre
  if (isNaN(celsiusValue)) {
    // Affiche un message d'erreur si ce n'est pas un nombre
    alert("Veuillez entrer une valeur numérique pour les degrés Celsius.");
    // Efface la valeur incorrecte
    celsiusInput.value = "";
    // Arrête l'exécution de la fonction
    return;
  }
  var fahrenheit = (celsiusValue * 9/5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit;
}
