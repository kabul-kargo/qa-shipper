/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
const env = require('dotenv').config();
// eslint-disable-next-line no-unused-vars
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const welcomePage = {
  url() {
    const url = base.setURL(`${process.env.BASE_URL_KARGO}`);
    return url;
  },
  elements: {
    masukButton: '.jss29.cursor-pointer',
    loginPage: '.login-page',

  },
  commands: [{
    navigateToPage() {
      this.navigate();
    },
    assertLoginPage() {
      return base.assertVisible(this, welcomePage.elements.loginPage);
    },
    clickMasuk() {
      base.clickSpanElement(this, welcomePage.elements.masukButton);
    },
  }],
};

module.exports = welcomePage;
