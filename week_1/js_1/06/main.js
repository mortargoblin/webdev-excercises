document.querySelector('#generateBtn')
  .addEventListener('click', (e) => {
    const num = 
      Number(document.querySelector('#number').value);

    let result = '<table>';

    for (let i = 1; i <= num; i++) {
      result += '<tr>';
      for (let j = 1; j <= num; j++) {
        console.log('iterated ' + i*j);
        result += '<td>'+ i*j +'</td>';
      }
      result += '</tr>';
    }

    result += '</table>';

    document.querySelector('#output')
      .innerHTML = result;
});
