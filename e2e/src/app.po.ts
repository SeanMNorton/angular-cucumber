import { browser, by, element, Key } from 'protractor';

export class AppPage {
  navigateTo(path = '/') {
    return browser.get(browser.baseUrl + path);
  }

  getActiveElement() {
    return browser.driver.switchTo().activeElement();
  }

  getTodoInput() {
    return element(by.tagName('input'));
  }

  submitForm() {
    element(by.tagName('form')).submit();
  }

  getFirstTodo() {
    return element(by.class('todoList'));
  }
}
