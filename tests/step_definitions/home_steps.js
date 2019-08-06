const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.home_page();

Given(/^Shipper is at home page$/, () => {
  return browser.navigateToPage();
});

// When(/^Shipper click Sign In button$/, () => {
//   return browser.clickSignIn();
// });

// When(/^Shipper click Sign Up button$/, () => {
//   return browser.clickSignUp();
// });

// Then(/^Shipper is on Sign Up page$/, async () => {
//   await browser.assertSignUpPage();
// });

// Then(/^Shipper is on Sign In page$/, async () => {
//   await browser.assertSignInPage();
// });
