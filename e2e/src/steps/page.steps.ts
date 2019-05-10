import { TodoPage } from '../app.po';
import { Given, When, Then } from 'cucumber';
import {
  ExpectedConditions as EC,
  browser,
  element,
  by,
} from 'protractor';

import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const expect = chai.use(chaiAsPromised).expect;

const todoPage: TodoPage = new TodoPage();
browser.waitForAngularEnabled(false);


Given('I open the app', async () => {
  await todoPage.navigateTo();
});

When('The app page loads', () => {
  browser.wait(EC.visibilityOf(element(by.tagName('title'))));
});

Then('Todo form is displayed', () => {
  return element(by.css('form#superForm')).isDisplayed().then(res => {
    return expect(res).to.be.true;
  });
});
