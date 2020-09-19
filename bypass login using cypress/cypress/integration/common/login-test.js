/**********************************************************************************************************************
 * This file is used to contain login Tests for all different personas
 *
 * It contains all happy/negative scenarios for login view {login , forget pw , ..etc}
 ***********************************************************************************************************************/

import PageInteractions from '../../utilities/page-interactions.js';
//import Utilities from '../../utilities/utilities.js';

let page = new PageInteractions();
let role;

describe('Testing login feature', function() {
  // before(function() {
  //   cy.fixture('data/common/login-data.json').as('login');
  //   cy.visit('/login');
  // });

  describe('Happy scenarios for login', function() {
    it('Check persona 1 valid login', function() {
      role = 'client';
      page.writeText(this.login.userName.selector, this.login.userName.client);
      page.writeText(
        this.login.password.selector,
        this.login.password.validValue,
      );
      page.clickBtn(this.login.loginBtnSel);
    });

    it('Check persona 2 valid login', function() {
      role = 'freelancer';
      page.writeText(
        this.login.userName.selector,
        this.login.userName.freelancer,
      );
      page.writeText(
        this.login.password.selector,
        this.login.password.validValue,
      );
      page.clickBtn(this.login.loginBtnSel);
    });
  });

  describe('Negative scenarios for login', function() {
    // it('Check login with empty PW', function() {
    // });
    // it('Check login with empty user name', function() {
    // });
    // it('Check login with wrong pw, valid email', function() {
    // });
    // it('Check login with invalid email', function() {
    // });
  });

  describe.only('testing page-interaction functions', function() {
    afterEach(function() {
      cy.contains('Logout').click();
    });
    it('testing the functions', function() {
      cy.visit('https://pyr297ots7y3c4mz.nawapro.com/en/professionals/login');
      page.assert('h1', 'Welcome back!', 'be.visible');
      page.writeText('#login-email', 'user@test.com');
      page.nameGen('#login-email', '');
      page.writeText('#login-password', '12345678');
      page.getText('button', 'Sign in').click();
      page.getText('span', ' Branch 1 ').click();
      page.dropDown(
        '#location-governorate-undefined-0',
        'mat-option',
        'Al-Fayoum',
      );

      // page.dropDown("#purposes","mat-option","Medical")
      // page.dropDown("#development-areas","mat-option"," Al-Fayoum ",{force:true})
    });
  });

  afterEach(function() {
    if (role == 'client') {
      cy.get(this.login.logout.selIfClient).click({ force: true });
    } else if (role == 'freelancer') {
      cy.get(this.login.logout.selIfFreelancer).click({ force: true });
    }
  });
});
