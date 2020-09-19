var phone = '01117665040';
var password = '123456789';

  describe('Testing APIs', function() {
    before(function() {
      cy.apiLogin(phone, password);
      cy.saveLocalStorage();
      //Save token from the command in Local Storage
    });

    beforeEach(() => {
      cy.restoreLocalStorage();
      //Restore token before each test
    });

    it('API Login then click on Trips tab in sidebar', () => {
      cy.visit('http://206.189.196.39:3000');
    });

    it('API Login then click on Trips tab in sidebar', () => {
      cy.visit('http://206.189.196.39:3000');
    });
  });
