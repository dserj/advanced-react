import React from 'react';
import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);

export default class App extends React.Component {
  state = {};

  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  asyncFunction = () => {
    return Promise.resolve(37);
  };

  async componentDidMount() {
    this.setState({
      test: await this.asyncFunction()
    });
  }

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}
