import { AppPage } from '../app.po';
import { Given, When, Then} from 'cucumber';
import { browser } from 'protractor';

import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const expect = chai.use(chaiAsPromised).expect;

const appPage: AppPage = new AppPage();
browser.waitForAngularEnabled(false);


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

Then('The Form is focused', () => {
  const activeElement = appPage.getActiveElement().getAttribute('tagName');
  const compareElement = appPage.getTodoInput().getAttribute('tagName');

  return Promise.all([compareElement, activeElement]).then((tags) => {
    expect(tags[0]).to.equal(tags[1]);
  });
});
