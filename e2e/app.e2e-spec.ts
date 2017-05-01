import { DlPage } from './app.po';

describe('dl App', () => {
  let page: DlPage;

  beforeEach(() => {
    page = new DlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
