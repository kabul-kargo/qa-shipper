const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.welcome_page();

Given(/^user is at welcome page$/, () => {
  return browser.navigateToPage();
});

When(/^user click Masuk button$/, () => {
  return browser.clickMasuk();
});

Then(/^user is on login page$/, async () => {
  await browser.assertLoginPage();
});
