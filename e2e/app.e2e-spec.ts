import { PortsideUiPage } from './app.po';

describe('portside-ui App', () => {
  let page: PortsideUiPage;

  beforeEach(() => {
    page = new PortsideUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
