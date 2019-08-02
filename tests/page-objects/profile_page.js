/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
const env = require('dotenv').config();
const base = require('bizzy-nightwatch-base-page');

const profilePage = {
  url() {
    const url = base.setURL(`${process.env.BASE_URL_KARGO}/profile`);
    return url;
  },
  testData: {
    telepon: '81218611736',
    password: 'Kargo123',
    tncTitle: 'Syarat dan Ketentuan',
    // tab
    postTab: '[href="/shipper/welcome/home"]',
    loadTab: '[href="/shipper/welcome/jobs"]',
    shipmentsTab: '[href="/shipper/welcome/shipments"]',
    notificationsTab: '[href="/shipper/welcome/notifications"]',
    profileTab: '[href="/shipper/welcome/profile"]',
  },
  elements: {
    // profile data
    emailProfile: 'div>div:nth-child(3)>div>div:nth-child(1)>button>span>div:nth-child(2)',
    phoneProfile: 'div>div:nth-child(3)>div>div:nth-child(2)>button>span>div:nth-child(2)',
    // actionable
    changePassword: 'div>div:nth-child(3)>div>div:nth-child(3)>button>span>div:nth-child(2)',
    changeLanguage: 'div>div:nth-child(5)>div>div:nth-child(1)>button>span>div:nth-child(2)',
    languageSelector: '#language_selector-button',
    termsAndCondition: 'div>div:nth-child(5)>div>div:nth-child(2)>button>span>div:nth-child(2)',
    tncTitle: '.header-title',
    logOut: 'div>div:nth-child(5)>div>div:nth-child(3)>button>span>div:nth-child(2)',
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
    clickClickable(clickable) {
      base.clickDivElement(this, clickable);
    },
    clickChangePassword() {
      base.clickDivElement(this, profilePage.elements.changePassword);
    },
    clickChangeLanguage() {
      base.clickDivElement(this, profilePage.elements.changeLanguage);
    },
    assertTab(tabName) {
      return base.assertURLContains(this, tabName);
    },
    assertRedirectedPage(page) {
      return base.assertVisible(this, page);
    },
  }],
};

module.exports = profilePage;
