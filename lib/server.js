// to use "import" see ./!notes/server-hot-reload.txt
import express from 'express';
import config from './config';
import serverRender from 'renderers/server';
import { data } from './testData.json';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const { initialContent, styleTags } = serverRender();
  res.render('index', { initialContent, styleTags });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}`);
});
