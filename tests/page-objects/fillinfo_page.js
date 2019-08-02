/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
const env = require('dotenv').config();
// eslint-disable-next-line no-unused-vars
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const fillInfoPersonalPage = {
  url() {
    const url = base.setURL(`${process.env.BASE_URL_KARGO}/fillinfo/personal`);
    return url;
  },
  testData: {
    name: 'asd',
    email: '123@asd.asd',
    phone: '82137014747',
    password: 'Kargo123',
  },
  elements: {
    nameField: '[name="name"]',
    emailField: '[name="email"]',
    phoneField: '[name="phone"]',
    passwordField: '[name="name"]',

    createAccountButton: '#button_component-button',
    showPassword: '#hide-button',
    tncButton: '#terms-and-conditions',
    verifyButton: '#button',
  },
  commands: [{
    navigateToPage() {
      this.navigate();
    },
    // assertFillinfoPersonalPage() {
    //   return base.assertSpanContainsText(this, fillInfoPersonalPage.elements.fillinfoPage, 'Nama');
    // },
    // assertFillinfoCompanyPage() {
    //   return base.assertSpanContainsText(this, fillInfoPersonalPage.elements.fillinfoPage, 'Nama Perusahaan');
    // },
    fillNameInfo(name) {
      base.setValueTextField(client, fillInfoPersonalPage.elements.nameField, name);
    },
    fillEmailInfo(email) {
      base.setValueTextField(client, fillInfoPersonalPage.elements.emailField, email);
    },
    fillPhoneInfo(phone) {
      base.setValueTextField(client, fillInfoPersonalPage.elements.phoneField, phone);
    },
    fillPasswordInfo(password) {
      base.setValueTextField(client, fillInfoPersonalPage.elements.passwordField, password);
    },
    clickCreateAccountButton() {
      base.clickButton(this, fillInfoPersonalPage.elements.createAccountButton);
    },
    clickTermsAndConditionButton() {
      base.clickButton(this, fillInfoPersonalPage.elements.tncButton);
    },
    assertOTPPage() {
      return base.assertVisible(this, fillInfoPersonalPage.elements.verifyButton);
    },
  }],
};

module.exports = fillInfoPersonalPage;
