import { CaradiusPage } from './app.po';

describe('caradius App', () => {
  let page: CaradiusPage;

  beforeEach(() => {
    page = new CaradiusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
