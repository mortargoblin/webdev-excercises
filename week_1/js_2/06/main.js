const movies = [];
const count = Number(prompt('enter number of movies'));

const output = document.querySelector('#output');

for (let i = 0; i < count; i++) {
  const title = prompt('Enter title');
  let rating = 0;
  do {
    rating = Number(prompt(`Enter rating for ${title} (between 1 and 5)`));
  } while (!(rating >= 1 && rating <= 5));

  movies.push({
    title: title, 
    rating: rating
  });
}

// TOTAL JIT BS BELOW. 
movies.sort((a, b) => a.rating - b.rating);
// console.log(movies); // !!!!!!
movies.reverse();
// console.log('AFTER REVERSE:', movies); // BOTH LOG THE SAME

console.log('best-rated movie:', movies[0].title);

for (let movie of movies) {
  const div = document.createElement('div');
  div.textContent = `title: ${movie.title}, rating: ${movie.rating}`;
  output.appendChild(div);
}
