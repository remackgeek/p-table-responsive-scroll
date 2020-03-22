import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('h3.shortlist')).getText() as Promise<string>;
  }

  topScrollWrapperWidthDifference() {
    element(by.css('.topcontainer .ui-table-scrollable-body'))
      .getSize()
      .then(value => {
        const outerSize = value;

        element(by.css('.topcontainer .ui-table-scrollable-body-table'))
          .getSize()
          .then(innerValue => {
            const innerSize = innerValue;
            expect(innerSize.width).toBeLessThan(outerSize.width);
          });
      });
  }

  topScrollWrapperWidthSame() {
    element(by.css('.topcontainer .ui-table-scrollable-body'))
      .getSize()
      .then(value => {
        const outerSize = value;

        element(by.css('.topcontainer .ui-table-scrollable-body-table'))
          .getSize()
          .then(innerValue => {
            const innerSize = innerValue;
            expect(innerSize.width).toEqual(outerSize.width);
          });
      });
  }

  bottomScrollWrapperHeightSame() {
    element(by.css('.bottomcontainer .ui-table-scrollable-view'))
      .getSize()
      .then(value => {
        const outerSize = value;

        element(by.css('.bottomcontainer .ui-table-scrollable-header'))
          .getSize()
          .then(headerValue => {
            const headerSize = headerValue;

            element(by.css('.bottomcontainer .ui-table-scrollable-body'))
              .getSize()
              .then(bodyValue => {
                const bodySize = bodyValue;
                expect(headerSize.height + bodySize.height).toEqual(outerSize.height);
              });
          });
      });
  }
}
