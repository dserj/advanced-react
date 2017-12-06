import React from 'react';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import StateApi from 'state-api';

import App from 'components/App';
import config from 'config';

const serverRender = async () => {
  const sheet = new ServerStyleSheet();
  const result = {};
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(resp.data);

  result.initialContent = ReactDOMServer.renderToString(sheet.collectStyles(
    <StyleSheetManager sheet={sheet.instance}>
      <App store={store} />
    </StyleSheetManager>));

  result.styleTags = sheet.getStyleTags();
  result.initialData = resp.data;

  return result;
};

export default serverRender;