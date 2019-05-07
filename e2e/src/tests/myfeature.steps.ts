import { Given, Before, When, Then } from 'cucumber';
import { browser, element, by, ExpectedConditions } from 'protractor';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { AppPage } from '../app.po';
const expect = chai.use(chaiAsPromised).expect;

let appPage: AppPage = new AppPage();
browser.waitForAngularEnabled(false);

Before(() => {
  appPage = new AppPage();
});

Given('I open app page', () => {
  appPage.navigateTo();
});

When('app page loads', () => {
  browser.wait(
    ExpectedConditions.visibilityOf(appPage.getTitle()
  ), 5000);
});

// title passed in from feature file
Then('header {string} is displayed', (title) => {
  return appPage.getHeader().getText()
    .then(text => {
      expect(text).to.have.string(title);
    });
});
