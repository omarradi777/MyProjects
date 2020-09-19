/**********************************************************************************************************************
 * This file contains assertion methods to assert for various interactable elements
 ***********************************************************************************************************************/
class Assertion {
  /**
   * Method to assert that a text is visible in a certain element
   * @param  selector The selector of the element.
   * @param  text The text to assert on.
   */
  isTxtVisible(selector, text) {
    cy.contains(selector, text).should('be.visible');
  }

  /**
   * Method to assert that a url includes the following directory
   * for example : check /login directory the base URL
   * @param  url The url directory to check.
   */
  checkUrl(url) {
    cy.url().should('include', url);
  }

  /**
   * Method to check that a link works and re-directs user to another Tab
   * @param  href The url directory to check.
   */
  checkLink(href) {
    cy.get(href).should('have.attr', 'target', '_blank');
  }

  /**
   * Method to check that a button is enabled
   * @param  selector The selector of the button.
   * @param text the text name of the button
   */
  isEnabled(selector, text) {
    cy.contains(selector, text).should('be.enabled');
  }

  /**
   * Method to check that a button is disabled
   * @param  selector The selector of the button.
   * @param text the text name of the button
   */
  isDisabled(selector, text) {
    cy.contains(selector, text).should('be.disabled');
  }
}
export default Assertion;
