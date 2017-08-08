import { SwCharactersPage } from './app.po';

describe('sw-characters App', () => {
  let page: SwCharactersPage;

  beforeEach(() => {
    page = new SwCharactersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
