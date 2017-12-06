import React from 'react';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import DataApi from 'state-api';

import App from 'components/App';
import config from 'config';

const serverRender = async () => {
  const sheet = new ServerStyleSheet();
  const result = {};
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(resp.data);

  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };

  result.initialContent = ReactDOMServer.renderToString(sheet.collectStyles(
    <StyleSheetManager sheet={sheet.instance}>
      <App initialData={initialData} />
    </StyleSheetManager>));

  result.styleTags = sheet.getStyleTags();
  result.initialData = initialData;

  return result;
};

export default serverRender;