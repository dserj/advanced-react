import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, store }) => {
  return (
    <div>
      {Object.values(articles).map((a) =>
        <Article key={a.id} article={a} store={store} />
      )}
    </div>
  );
};

export default ArticleList;
