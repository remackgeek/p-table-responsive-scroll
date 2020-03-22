import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display top label message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Short List');
  });

  it('should not have top scroll', () => {
    const width = 800;
    const height = 900;
    browser.driver
      .manage()
      .window()
      .setSize(width, height);
    page.navigateTo();

    page.topScrollWrapperWidthSame();
  });

  it('should  have top scroll', () => {
    const width = 800;
    const height = 600;
    browser.driver
      .manage()
      .window()
      .setSize(width, height);
    page.navigateTo();

    page.topScrollWrapperWidthDifference();
  });

  it('should fill bottom container', () => {
    const width = 800;
    const height = 850;
    browser.driver
      .manage()
      .window()
      .setSize(width, height);
    page.navigateTo();

    page.bottomScrollWrapperHeightSame();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
