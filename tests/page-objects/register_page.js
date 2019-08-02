/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
const env = require('dotenv').config();
// eslint-disable-next-line no-unused-vars
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const welcomePage = {
  url() {
    const url = base.setURL(`${process.env.BASE_URL_KARGO}/register`);
    return url;
  },
  elements: {
    personalAccount: '[alt="personal"]',
    corporateAccount: '[alt="corporate"]',
    nextButton: '[id="button"]',
    fillinfoPage: '.landing-page>div>form>div>div>div>span',

  },
  commands: [{
    navigateToPage() {
      this.navigate();
    },
    assertFillinfoPersonalPage() {
      return base.assertSpanContainsText(this, welcomePage.elements.fillinfoPage, 'Nama');
    },
    assertFillinfoCompanyPage() {
      return base.assertSpanContainsText(this, welcomePage.elements.fillinfoPage, 'Nama Perusahaan');
    },
    clickCompanyAccount() {
      base.clickImageElement(this, welcomePage.elements.corporateAccount);
    },
    clickPersonalAccount() {
      base.clickImageElement(this, welcomePage.elements.personalAccount);
    },
    clickNext() {
      base.clickButton(this, welcomePage.elements.nextButton);
    },
  }],
};

module.exports = welcomePage;
