const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.fillinfo_page();

Given(/^Shipper is at fill info page$/, () => {
  browser.navigateToPage();
});

When(/^Shipper fill name field with "([^"]*)"$/, (input) => {
  return browser.fillNameInfo(input);
});

When(/^Shipper fill email field with "([^"]*)"$/, (input) => {
  return browser.fillEmailInfo(input);
});

When(/^Shipper fill phone field info with "([^"]*)"$/, (input) => {
  return browser.fillPhoneInfo(input);
});

When(/^Shipper fill password field info with "([^"]*)"$/, (input) => {
  return browser.fillPasswordInfo(input);
});


When(/^Shipper click create account button$/, () => {
  return browser.clickCreateAccountButton();
});

When(/^Shipper click terms and conditions button$/, () => {
  return browser.clickTermsAndConditionButton();
});

Then(/^Shipper is on OTP page$/, async () => {
  return browser.assertOTPPage();
});
