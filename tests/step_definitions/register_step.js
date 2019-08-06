const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.register_page();

Given(/^Shipper is at register page$/, () => {
  return browser.navigateToPage();
});

When(/^Shipper choose register personal account$/, () => {
  return browser.clickPersonalAccount();
});

When(/^Shipper choose register company account$/, () => {
  return browser.clickCompanyAccount();
});

When(/^Shipper click next$/, () => {
  return browser.clickNext();
});

Then(/^Shipper is on fillinfo personal page$/, async () => {
  await browser.assertFillinfoPersonalPage();
});

Then(/^Shipper is on fillinfo company page$/, async () => {
  await browser.assertFillinfoCompanyPage();
});
