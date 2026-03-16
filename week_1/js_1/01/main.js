
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const convertBtn = document.querySelector('#convertBtn');

convertBtn.addEventListener("click", (e) => {
  const c = Number(input.value);
  const f = c * 9/5 + 32;
  const k = c + 273.15;
  output.textContent = 'Fahrenheit: '+f+', Kelvin: '+k;
});
