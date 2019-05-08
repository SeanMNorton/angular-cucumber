import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path = '/') {
    return browser.get(browser.baseUrl + path);
  }

  getActiveElement() {
    return browser.driver.switchTo().activeElement()
  }

  getTodoInput() {
    return element(by.tagName('input'))
  }
}
