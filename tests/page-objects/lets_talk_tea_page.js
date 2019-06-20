/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
const env = require('dotenv').config();
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const letsTalkPage = {
  url() {
    const url = base.setURL(`${process.env.BASE_URL_TEA}/let-s-talk-tea.html`);
    return url;
  },
  testData: {
    headerPage: "Let's Talk Tea",
    name: 'Lorem Ipsum',
    email: 'lorem@ipsum.com',
    subject: 'Dolor sit amet',
    message: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  elements: {
    // form
    nameField: '[name=name]',
    emailField: '[name=email]',
    subjectField: '[name=subject]',
    messageField: '[name=message]',
    // button
    submitButton: '[id=form_78ea690540a24bd8b9dcfbf99e999fea]>div>div:nth-child(5)',
    // pop up
    successPopUp: '[name=success]',

  },
  commands: [{
    navigateToPage() {
      this.navigate();
    },
    fillForm() {
      base.setValueTextField(client, letsTalkPage.elements.nameField, letsTalkPage.testData.name);
      base.setValueTextField(client, letsTalkPage.elements.emailField, letsTalkPage.testData.email);
      base.setValueTextField(client, letsTalkPage.elements.subjectField, letsTalkPage.testData.subject);
      base.setValueTextArea(client, letsTalkPage.elements.messageField, letsTalkPage.testData.message);
    },
    fillEmail(invalidEmail) {
      base.setValueTextField(client, letsTalkPage.elements.emailField, invalidEmail);
    },
    deleteFormValue(field) {
      base.setValueTextField(client, letsTalkPage.elements.$field, ' ');
    },
    clickSubmitButton() {
      base.clickDivElement(this, letsTalkPage.elements.submitButton);
    },
    assertSentEmail() {
      return base.assertVisible(client, letsTalkPage.elements.successPopUp);
    },
    assertMissingFormError(field) {
      return base.assertLabelContainsText(client, letsTalkPage.elements.$field, 'field is required');
    },
    assertInvalidEmailError() {
      return base.assertLabelContainsText(client, letsTalkPage.elements.emailField, 'Invalid Email');
    },
  }],
};

module.exports = letsTalkPage;
