const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.welcome_page();

Given(/^user is at welcome page$/, () => {
  return browser.navigateToPage();
});

When(/^user click Sign In button$/, () => {
  return browser.clickSignIn();
});

When(/^user click Sign Up button$/, () => {
  return browser.clickSignUp();
});

Then(/^user is on Sign Up page$/, async () => {
  await browser.assertSignUpPage();
});

Then(/^user is on Sign In page$/, async () => {
  await browser.assertSignInPage();
});
