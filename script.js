function convertTemperature() {
  var celsiusInput = document.getElementById('celsius');
  var fahrenheitInput = document.getElementById('fahrenheit');
  var celsius = parseFloat(celsiusInput.value);
  var fahrenheit = (celsius * 9) / 5 + 32;
  fahrenheitInput.value = fahrenheit;

  celsiusInput.classList.add('temperature-input-converted');
  fahrenheitInput.classList.add('temperature-input-converted');
  document
    .querySelector('.temperature-heading')
    .classList.add('temperature-heading-converted');
  document
    .querySelector('.convert-button')
    .classList.add('convert-button-converted');

  setTimeout(function () {
    celsiusInput.classList.remove('temperature-input-converted');
    fahrenheitInput.classList.remove('temperature-input-converted');
    document
      .querySelector('.temperature-heading')
      .classList.remove('temperature-heading-converted');
    document
      .querySelector('.convert-button')
      .classList.remove('convert-button-converted');
  }, 300);
}
