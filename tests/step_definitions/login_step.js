const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.login_page();

Given(/^user is at login page$/, () => {
  return browser.navigateToPage();
});

When(/^user fill every form correctly$/, () => {
  return browser.fillForm();
});

When(/^user fill phone number field with "([^"]*)"$/, (phoneNumber) => {
  return browser.fillPhoneField(phoneNumber);
});

When(/^user fill password field with "([^"]*)"$/, (password) => {
  return browser.fillPasswordField(password);
});

When(/^user click Masuk$/, () => {
  return browser.clickMasukButton();
});

When(/^user click forget password$/, () => {
  return browser.clickForgetPassword();
});

Then(/^user is on Muat tab$/, async () => {
  await browser.assertMuatTab();
});

Then(/^user is on Forget Password page$/, async () => {
  await browser.assertForgetPasswordPage();
});

Then(/^user is given "([^"]*)"$/, async (warningMessage) => {
  await browser.assertWarningMessage(warningMessage);
});
