function convertTemperature() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const errorMessage = document.getElementById("error-message");

  const celsiusValue = parseFloat(celsiusInput.value);

  if (isNaN(celsiusValue)) {
    errorMessage.textContent = "Erreur : Veuillez saisir une valeur numerique en Celsius.";
    fahrenheitInput.value = ""; // Effacer la sortie
  } else {
    // Effectuer la conversion de Celsius à Fahrenheit
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
    errorMessage.textContent = ""; // Effacer tout message d'erreur précédent
  }
}
