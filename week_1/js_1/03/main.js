
document.querySelector('#determineBtn').
  addEventListener('click', (e) => {
    const side1 = Number(document.querySelector('#side1').value);
    const side2 = Number(document.querySelector('#side2').value);
    const side3 = Number(document.querySelector('#side3').value);

    let result;

    if (
      side1 === side2 
      && side2 === side3
    ) {
      result = 'equilateral';
    } else if (
      side1 === side2
      || side1 === side3
      || side2 === side3
    ) {
      result = 'isosceles';
    } else {
      result = 'scalene';
    }

    document.querySelector('#output').textContent = result;
});
