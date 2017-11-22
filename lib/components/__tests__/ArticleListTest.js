import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';


describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    },
    articleActions: {
      // return fake object
      lookupAuthor: jest.fn(() => ({}))
    }
  };

  it('Renders correctly', () => {
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />).toJSON();

    expect(tree.children.length).toBe(2);

    // if anything changes, snapshot is going to fail. Press "U" to update snapshot
    expect(tree).toMatchSnapshot();
  });
});