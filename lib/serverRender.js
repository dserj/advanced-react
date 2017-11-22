import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import App from './components/App';

const sheet = new ServerStyleSheet();
const serverRender = () => {
  return {
    initialContent: ReactDOMServer.renderToString(sheet.collectStyles(
      <StyleSheetManager sheet={sheet.instance}>
        <App />
      </StyleSheetManager>)),
    styleTags: sheet.getStyleTags()
  };
};

export default serverRender;