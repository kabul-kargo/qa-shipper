const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.profile_page();

Given(/^Shipper is at profile page$/, () => {
  return browser.navigateToPage();
});

// When(/^Shipper choose register personal account$/, () => {
//   return browser.clickPersonalAccount();
// });

When(/^Shipper click "([^"]*)"$/, (clickable) => {
  return browser.clickClickable(clickable);
});

// When(/^Shipper click next$/, () => {
//   return browser.clickNext();
// });

Then(/^Shipper is redirected to "([^"]*)"$/, async (page) => {
  await browser.assertRedirectedPage(page);
});

// Then(/^Shipper is on fillinfo company page$/, async () => {
//   await browser.assertFillinfoCompanyPage();
// });
