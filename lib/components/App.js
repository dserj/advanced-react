import React from 'react';
import ArticleList from './ArticleList';

export default class App extends React.Component {
  state = this.props.store.getState();

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
