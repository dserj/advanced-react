import StateApi from 'state-api';
import { data } from '../testData';

const store = new StateApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articles = store.getState().articles;
    const id = data.articles[0].id;
    const title = data.articles[0].title;

    expect(articles).toHaveProperty(id);
    expect(articles[id].title).toBe(title);
  });
  it('exposes authors as an object', () => {
    const authors = store.getState().authors;
    const id = data.authors[0].id;
    const title = data.authors[0].title;

    expect(authors).toHaveProperty(id);
    expect(authors[id].title).toBe(title);
  });
});
