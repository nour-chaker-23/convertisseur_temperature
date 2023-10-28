function convertTemperature() {
  var celsiusInput = document.getElementById('celsius');
  var fahrenheitInput = document.getElementById('fahrenheit');
  var celsius = parseFloat(celsiusInput.value);
  var fahrenheit = (celsius * 9) / 5 + 32;
  fahrenheitInput.value = fahrenheit;

  celsiusInput.classList.add('fade-in');
  fahrenheitInput.classList.add('fade-in');
  document.querySelector('.temperature-heading').classList.add('fade-in');
  document.querySelector('.convert-button').classList.add('fade-in');

  document.querySelector('.convert-button').classList.add('clicked-button');
  celsiusInput.addEventListener('input', function () {
    if (celsiusInput.value !== '') {
      celsiusInput.classList.add('filled-input');
    } else {
      celsiusInput.classList.remove('filled-input');
    }
  });

  setTimeout(function () {
    celsiusInput.classList.remove('fade-in');
    fahrenheitInput.classList.remove('fade-in');
    document.querySelector('.temperature-heading').classList.remove('fade-in');
    document.querySelector('.convert-button').classList.remove('fade-in');
    document
      .querySelector('.convert-button')
      .classList.remove('clicked-button');
  }, 900);
}
