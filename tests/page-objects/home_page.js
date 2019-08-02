/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
const env = require('dotenv').config();
const base = require('bizzy-nightwatch-base-page');

const homePage = {
  url() {
    const url = base.setURL(`${process.env.BASE_URL_KARGO}/home`);
    return url;
  },
  testData: {
    telepon: '81218611736',
    password: 'Kargo123',
    muatTabTitle: 'Shipper - Kargo',
  },
  elements: {
    // tab
    postTab: '[href="/shipper/welcome/home"]',
    loadTab: '[href="/shipper/welcome/jobs"]',
    shipmentsTab: '[href="/shipper/welcome/shipments"]',
    notificationsTab: '[href="/shipper/welcome/notifications"]',
    profileTab: '[href="/shipper/welcome/profile"]',

    // asdas
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
    clickTab(tabName) {
      link = homePage.elements + tabName;
      base.clickLinkText(this, link);
    },
    assertTab(tabName) {
      return base.assertURLContains(this, tabName);
    },
  }],
};

module.exports = homePage;
