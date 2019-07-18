/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
const env = require('dotenv').config();
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const loginPage = {
  url() {
    const url = base.setURL(`${process.env.BASE_URL_KARGO}/login`);
    return url;
  },
  testData: {
    telepon: '81218611736',
    password: 'Kargo123',
    muatTabTitle: 'Shipper - Kargo',
  },
  elements: {
    // form
    phoneField: '[name="PhoneNumber"]',
    passwordField: '[name="password"]',
    // button
    submitButton: '[type="submit"]',
    // home page
    homePage: '.home-page',
  },
  commands: [{
    navigateToPage() {
      this.navigate();
    },
    fillForm() {
      base.setValueTextField(client, loginPage.elements.phoneField, loginPage.testData.telepon);
      base.setValueTextField(client, loginPage.elements.passwordField, loginPage.testData.password);
    },
    clickMasukButton() {
      base.clickButton(this, loginPage.elements.submitButton);
    },
    assertMuatTab() {
      return base.assertVisible(this, loginPage.elements.homePage);
    },
  }],
};

module.exports = loginPage;
