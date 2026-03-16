
const P1 = {}
const P2 = {}

document.querySelector('#calcBtn').addEventListener("click", (e) => {
  
  P1.x = Number(document.querySelector('#p1_x').value);
  P1.y = Number(document.querySelector('#p1_y').value);

  P2.x = Number(document.querySelector('#p2_x').value);
  P2.y = Number(document.querySelector('#p2_y').value);

  const distance = Math.sqrt((P1.x - P2.x)^2 + (P1.y - P2.y)^2)

  document.querySelector('#output').textContent = 'distance: '+distance;
});
