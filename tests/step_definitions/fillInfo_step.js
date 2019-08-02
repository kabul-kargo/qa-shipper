const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.fillinfo_page();

Given(/^user is at fill info page$/, () => {
  browser.navigateToPage();
});

When(/^user fill name field with "([^"]*)"$/, (input) => {
  return browser.fillNameInfo(input);
});

When(/^user fill email field with "([^"]*)"$/, (input) => {
  return browser.fillEmailInfo(input);
});

When(/^user fill phone field info with "([^"]*)"$/, (input) => {
  return browser.fillPhoneInfo(input);
});

When(/^user fill password field info with "([^"]*)"$/, (input) => {
  return browser.fillPasswordInfo(input);
});


When(/^user click create account button$/, () => {
  return browser.clickCreateAccountButton();
});

When(/^user click terms and conditions button$/, () => {
  return browser.clickTermsAndConditionButton();
});

Then(/^user is on OTP page$/, async () => {
  return browser.assertOTPPage();
});

// Then(/^user is on fillinfo company page$/, async () => {
//   await browser.assertFillinfoCompanyPage();
// });
