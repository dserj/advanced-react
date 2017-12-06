import React from 'react';
import ArticleList from './ArticleList';

export default class App extends React.Component {
  state = {
    authors: this.props.initialData.authors,
    articles: this.props.initialData.articles
  };

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId]
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}
