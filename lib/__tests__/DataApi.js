import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articles = api.getArticles();
    const id = data.articles[0].id;
    const title = data.articles[0].title;

    expect(articles).toHaveProperty(id);
    expect(articles[id].title).toBe(title);
  });
  it('exposes authors as an object', () => {
    const authors = api.getAuthors();
    const id = data.authors[0].id;
    const title = data.authors[0].title;

    expect(authors).toHaveProperty(id);
    expect(authors[id].title).toBe(title);
  });
});
