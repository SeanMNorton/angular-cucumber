import { AppPage } from '../app.po';
import { Given, When, Then, After } from 'cucumber';
import { browser, element, by, ExpectedConditions as EC, protractor } from 'protractor';

import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const expect = chai.use(chaiAsPromised).expect;

const appPage: AppPage = new AppPage();

Then('The Form is focused', () => {
  const activeElement = appPage.getActiveElement().getAttribute('tagName');
  const compareElement = appPage.getTodoInput().getAttribute('tagName');

  return Promise.all([compareElement, activeElement]).then((tags) => {
    expect(tags[0]).to.equal(tags[1]);
  });
});

Given('I type {string} into the form', (text) => {
  appPage.getTodoInput().sendKeys(text);
});

When('I submit the form', () => {
  appPage.submitForm();
});

Then('The form input is blank', () => {
  return appPage.getTodoInput().getAttribute('value').then((text) => {
    expect(text).to.equal('');
  });
});

Then('{string} is displayed', (text) => {
  browser.wait(
    protractor.ExpectedConditions.visibilityOf(
      element(by.css('label.todo-title'))
    ), 500
  );

  return element(by.css('label.todo-title')).getText().then(value => {
    return expect(value).to.equal(text);
  });
});

When('Remove button is clicked', () => {
  browser.driver.sleep(1000)
  element(by.css('button.destroy')).click();
})

Then('{string} is not displayed', (text) => {
  browser.driver.sleep(1000)
  return element.all(by.css('label.todo-title')).getText().then((value) => {
    return expect(value).to.equal(['']);
  })

  // browser.driver.sleep(1000)

  // return element.all(by.css('label.todo-title')).getText().then((value) => {
  //   return expect(value).to.equal(['']);
  // })
})
