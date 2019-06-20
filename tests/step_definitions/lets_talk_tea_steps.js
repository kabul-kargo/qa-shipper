const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.lets_talk_tea_page();

Given(/^user is at Let's Talk Tea page$/, () => {
  return browser.navigateToPage();
});

When(/^user fill every form correctly$/, () => {
  return browser.fillForm();
});

When(/^user fill Email form with "([^"]*)"$/, (invalidEmail) => {
  return browser.fillEmail(invalidEmail);
});

When(/^user click Submit button$/, () => {
  return browser.clickSubmitButton();
});

When(/^user delete mandatory "([^"]*)"$/, (field) => {
  return browser.deleteFormValue(field);
});

Then(/^user can send email succesfully$/, async () => {
  await browser.assertSentEmail();
});

Then(/^user should get a warning that "([^"]*)" should not be empty$/, async (field) => {
  await browser.assertMissingFormError(field);
});

Then(/^user should get a warning that email adress is invalid$/, async () => {
  await browser.assertInvalidEmailError();
});
