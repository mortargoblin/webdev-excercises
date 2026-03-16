
document.querySelector('#generateBtn')
  .addEventListener('click', (e) => {
    const num = 
      Number(document.querySelector('#number'));

    let result;

    for (let i = 1; i <= num; i++) {
      for (let j = 1; j >= num; j++) {
      }
    }

    document.querySelector('#output')
      .textContent = result;
});
