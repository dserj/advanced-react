import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, authors }) => {
  return (
    <div>
      {Object.values(articles).map((a) =>
        <Article key={a.id} article={a} author={authors[a.authorId]} />
      )}
    </div>
  );
};

export default ArticleList;
