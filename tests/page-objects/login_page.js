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
    forgetPasswordPage: 'Lupa Password',
  },
  elements: {
    // form
    phoneField: '[name="PhoneNumber"]',
    passwordField: '[name="password"]',
    // link (span)
    forgetPassword: 'button>span>span',
    // button
    submitButton: '[type="submit"]',
    // page
    homePage: '.home-page',
    forgetPasswordPage: 'div>span',
    // warning
    warningMessage: 'form>div>div>div:nth-child(3)>div>span',
  },
  commands: [{
    navigateToPage() {
      this.navigate();
    },
    fillForm() {
      base.setValueTextField(client, loginPage.elements.phoneField, loginPage.testData.telepon);
      base.setValueTextField(client, loginPage.elements.passwordField, loginPage.testData.password);
    },
    fillPhoneField(phoneNumber) {
      base.setValueTextField(client, loginPage.elements.phoneField, phoneNumber);
    },
    fillPasswordField(password) {
      base.setValueTextField(client, loginPage.elements.passwordField, password);
    },
    clickForgetPassword() {
      base.clickSpanElement(this, loginPage.elements.forgetPassword);
    },
    clickMasukButton() {
      base.clickButton(this, loginPage.elements.submitButton);
    },
    assertMuatTab() {
      return base.assertVisible(this, loginPage.elements.homePage);
    },
    assertForgetPasswordPage() {
      return base.assertSpanContainsText(this, loginPage.elements.forgetPasswordPage, loginPage.testData.forgetPasswordPage);
    },
    assertWarningMessage(warningMessage) {
      return base.assertSpanContainsText(this, loginPage.elements.warningMessage, warningMessage);
    },
  }],
};

module.exports = loginPage;
