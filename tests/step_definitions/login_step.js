const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.login_page();

Given(/^user is at login page$/, () => {
  return browser.navigateToPage();
});

When(/^user fill every form correctly$/, () => {
  return browser.fillForm();
});

When(/^user click Masuk$/, () => {
  return browser.clickMasukButton();
});

Then(/^user is on Muat tab$/, async () => {
  await browser.assertMuatTab();
});
