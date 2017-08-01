import { Ng4WeddingCardPage } from './app.po';

describe('ng4-wedding-card App', () => {
  let page: Ng4WeddingCardPage;

  beforeEach(() => {
    page = new Ng4WeddingCardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
