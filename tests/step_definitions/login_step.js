const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.login_page();

Given(/^Shipper is at login page$/, () => {
  return browser.navigateToPage();
});

When(/^Shipper fill every form correctly$/, () => {
  return browser.fillForm();
});

When(/^Shipper fill phone number field with "([^"]*)"$/, (phoneNumber) => {
  return browser.fillPhoneField(phoneNumber);
});

When(/^Shipper fill password field with "([^"]*)"$/, (password) => {
  return browser.fillPasswordField(password);
});

When(/^Shipper click Masuk$/, () => {
  return browser.clickMasukButton();
});

When(/^Shipper click Tab "([^"]*)"$/, (tabname) => {
  return browser.clickTab(tabname);
});

When(/^Shipper click forget password$/, () => {
  return browser.clickForgetPassword();
});

Then(/^Shipper is on Muat tab$/, async () => {
  await browser.assertMuatTab();
});

Then(/^Shipper is on Forget Password page$/, async () => {
  await browser.assertForgetPasswordPage();
});

Then(/^Shipper is given "([^"]*)"$/, async (warningMessage) => {
  await browser.assertWarningMessage(warningMessage);
});
