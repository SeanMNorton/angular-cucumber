import { AppPage } from '../app.po'
import { Given, When, Then } from 'cucumber';
import {
  ExpectedConditions as EC,
  browser,
  element,
  by
} from 'protractor'

import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const expect = chai.use(chaiAsPromised).expect



let appPage: AppPage = new AppPage();
browser.waitForAngularEnabled(false);

Given('I open the app', () => {
  appPage.navigateTo();
})

When('The app page loads', () => {
  browser.wait(EC.visibilityOf(element(by.tagName('title'))),5000)
})

Then('Todo form is displayed', () => {
  return element(by.css('form#superForm')).isDisplayed().then(res => {
    expect(res).to.be.true
  })
})

Then('The Form is focused', function () {
  let activeElement = appPage.getActiveElement().getAttribute('tagName');
  let compareElement = appPage.getTodoInput().getAttribute('tagName'); 
  
  return Promise.all([compareElement, activeElement]).then((tags) => {
    expect(tags[0]).to.equal(tags[1]);
  });
});