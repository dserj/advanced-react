import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, articleActions }) => {
  return (
    <div>
      {Object.values(articles).map((a) =>
        <Article key={a.id} article={a} actions={articleActions} />
      )}
    </div>
  );
};

export default ArticleList;
