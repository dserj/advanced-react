import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const ArticleWrapper = styled.div`
  padding-bottom: 10px;
  border-bottom: solid 1px #aaa;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-weight: bold;
`;

const DateWrapper = styled.div`
  font-size: 0.85em;
  color: #888;
`;

const Author = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Body = styled.div`
  padding-left: 20px;
`;

const dateDisplay = (d) => new Date(d).toDateString();

const Article = ({ article, author }) => {
  return (
    <ArticleWrapper>
      <Title>{article.title}</Title>
      <DateWrapper>{dateDisplay(article.date)}</DateWrapper>
      <Author>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </Author>
      <Body>{article.body}</Body>
    </ArticleWrapper>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  };
}

export default storeProvider(extraProps)(Article);
