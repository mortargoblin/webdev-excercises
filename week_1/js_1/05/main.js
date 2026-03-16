
document.querySelector('#calcBtn')
  .addEventListener('click', (e) => {
    const num = 
      Number(document.querySelector('#number').value);

    let result = 0;
    for (let i = 0; i <= num; i++) {
      result += i;
    }

    document.querySelector('#output')
      .textContent = 'result: '+result;
});
