import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path = '/') {
    return browser.get(browser.baseUrl + path);
  }
}
