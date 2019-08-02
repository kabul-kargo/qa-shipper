const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.register_page();

Given(/^user is at register page$/, () => {
  return browser.navigateToPage();
});

When(/^user choose register personal account$/, () => {
  return browser.clickPersonalAccount();
});

When(/^user choose register company account$/, () => {
  return browser.clickCompanyAccount();
});

When(/^user click next$/, () => {
  return browser.clickNext();
});

Then(/^user is on fillinfo personal page$/, async () => {
  await browser.assertFillinfoPersonalPage();
});

Then(/^user is on fillinfo company page$/, async () => {
  await browser.assertFillinfoCompanyPage();
});
