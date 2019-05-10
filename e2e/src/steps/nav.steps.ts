import { TodoPage } from '../app.po';
import { Given, When, Then, After } from 'cucumber';
import {
  ExpectedConditions as EC,
  browser,
  element,
  by,
  $
} from 'protractor';

import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const expect = chai.use(chaiAsPromised).expect;
const todoPage: TodoPage = new TodoPage();

Given('I open the app on not the home page', async () => {
  await todoPage.navigateTo('/contact-us')
})

When('I click the Info link', function () {
  element(by.linkText('GO TO ANOTHER PAGE')).click()
});

Then('I am on the Info page', function () {
  return browser.wait(EC.presenceOf($('h1#info-title'))).then(presence => {
    return expect(presence).to.be.true;
  })
});

When('I click the Home link', function () {
  element(by.linkText('GO HOME')).click()
});

Then('I am on the Home page', function () {
  return browser.wait(EC.presenceOf($('h1#todo-header'))).then(presence => {
    return expect(presence).to.be.true;
  })
});

