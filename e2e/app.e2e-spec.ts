import { ShopFrontPage } from './app.po';

describe('shop-front App', function() {
  let page: ShopFrontPage;

  beforeEach(() => {
    page = new ShopFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
