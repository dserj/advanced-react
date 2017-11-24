import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import App from './components/App';

const serverRender = () => {
  const sheet = new ServerStyleSheet();
  const result = {};

  result.initialContent = ReactDOMServer.renderToString(sheet.collectStyles(
    <StyleSheetManager sheet={sheet.instance}>
      <App />
    </StyleSheetManager>));

  result.styleTags = sheet.getStyleTags();

  return result;
};

export default serverRender;