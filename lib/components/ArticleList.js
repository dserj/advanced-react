import React from 'react';
import Article from './Article';

class ArticleList extends React.PureComponent {
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map((a) =>
          <Article key={a.id} article={a} />
        )}
      </div>
    );
  }
}

export default ArticleList;
