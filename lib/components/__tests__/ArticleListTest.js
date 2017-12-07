import React from 'react';
import ArticleList from '../ArticleList';

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('ArticleList', () => {
  configure({ adapter: new Adapter() });

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
  };

  it('Renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />);

    const len = wrapper.find('ArticleContainer').length;

    expect(len).toBe(2);
    //
    // // if anything changes, snapshot is going to fail. Press "U" to update snapshot
    expect(wrapper).toMatchSnapshot();
  });
});