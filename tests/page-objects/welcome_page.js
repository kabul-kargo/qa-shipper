const base = require('bizzy-nightwatch-base-page');

const welcomePage = {
  url() {
    const url = base.setURL(`${process.env.BASE_URL_KARGO}`);
    return url;
  },
  elements: {
    signInButton: '#landing_page-login_button',
    signUpButton: '#button_component-button',
    backButton: '[id="back-button"]',
    signUpPage: '.landing-page',
    signInPage: '.login-page',
  },
  commands: [{
    navigateToPage() {
      this.navigate();
    },
    assertSignInPage() {
      return base.assertVisible(this, welcomePage.elements.signInPage);
    },
    assertSignUpPage() {
      return base.assertVisible(this, welcomePage.elements.signUpPage);
    },
    clickSignUp() {
      base.clickButton(this, welcomePage.elements.signUpButton);
    },
    clickSignIn() {
      base.clickSpanElement(this, welcomePage.elements.signInButton);
    },
  }],
};

module.exports = welcomePage;
