import React from 'react';
import ArticleList from '../ArticleList';

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Article from '../Article';

describe('ArticleList', () => {
  configure({ adapter: new Adapter() });

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
  };

  Article.propTypes = {};

  it('Renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />);

    expect(wrapper.find('Article').length).toBe(2);
    //
    // // if anything changes, snapshot is going to fail. Press "U" to update snapshot
    expect(wrapper).toMatchSnapshot();
  });
});