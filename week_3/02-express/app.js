import express from 'express';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

// image at: /public/lain.gif

app.get('/api/v1/cats', (req, res) => {
  res.json({
    cat_id: 1,
    name: 'Kass',
    birthdate: '20.11.1917',
    weight: 4.5,
    owner: 'Jaakko Jokinen',
    image: 'https://loremflickr.com/320/240/cat',
  });
});

app.use('/public', express.static('public'));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
