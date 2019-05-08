import { AppPage } from '../app.po';
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

const appPage: AppPage = new AppPage();
browser.waitForAngularEnabled(false);


Given('I open the app', () => {
  appPage.navigateTo();
});

When('The app page loads', () => {
  browser.wait(EC.visibilityOf(element(by.tagName('title'))), 5000);
});

Then('Todo form is displayed', () => {
  return element(by.css('form#superForm')).isDisplayed().then(res => {
    return expect(res).to.be.true;
  });
});
