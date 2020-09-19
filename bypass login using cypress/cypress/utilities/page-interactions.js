/**********************************************************************************************************************
 * This file is used to interact with any page element
 *
 * It contains all needed methods to interact with a web page {getElem, click, writeOnElem, readElem..etc}
 ***********************************************************************************************************************/

/**
 * This is Page interactions class
 *
 * It contains all needed functions to interact with page view {}
 */
class PageInteractions {
  /**
   * This is the method to get page field element so that you can do actions on it
   * @return {element} page field element
   */
  getElem(selector) {
    return cy.get(selector);
  }

  /* A method to return a text inside a specific selecor*/
  getText(selector, text) {
    return this.getElem(selector).contains(text);
  }

  /**
   * This is the method to click elem
   * force could be replaced with {force:true} if needed
   */
  clickBtn(selector, force) {
    this.getElem(selector).click(force);
  }

  /**
   * This is the method to write txt
   * force could be replaced with {force:true} if needed
   */
  writeTxt(selector, text, force) {
    this.getElem(selector).type(text, force);
  }

  /**
   * This is the method to clear txt
   * force could be replaced with {force:true} if needed
   */
  clearTxt(selector, force) {
    this.getElem(selector).clear(force);
  }

  /* clicks on a drop-down using its selector and choose an option using it's selector and text
    selector is the selector of the dropdown to click on
    text is the text of the option you're choosing
    optSelector is the selector of the option you see (mat-option,mat-select etc...)
    force could be replaced with {force:true} if needed*/

  /**
   * This is the method is used to select item from dropdown list
   * @param {string} selector - this is the selector of dropdown icon
   * @param {string} optSelector - this is the selector of dropdown needed option
   * @param {string} text - this is the name of needed option
   * @param {string} force - this is used incase option isn`t displayed to force click`
   */
  dropDown(selector, optSelector, text, force) {
    this.getElem(selector).click(force);
    this.getText(optSelector, text).click(force);
  }

  /* A method to assert for an element text with three conditions depending
  on the assertion needed

  for example :       page.assert("h1","Welcome back!","be.visible")
  for example :       page.assert("h1","submit","be.disabled")*/

  assert(selector, text, assert1, assert2, assert3) {
    this.getText(selector, text).should(assert1, assert2, assert3);
  }

  /* upload function which takes three arguments
    -the file path itself
    -the file mime according to it's type (pdf,jpg etc..)
    -the selector where you are going to upload

    before using the below function you need to run

    -  npm install --save-dev cypress-file-upload

    in your project directory then

    -  import 'cypress-file-upload';

    in your project's cypress/support/commands.js file*/
  upload(file, mime, selector) {
    cy.fixture(file, 'base64').then(fileContent => {
      cy.get(selector).upload(
        {
          fileContent,
          fileName: file,
          mimeType: mime,
          encoding: 'base64',
        },
        {
          uploadType: 'drag-n-drop',
        },
      );
    });
  }

  /* auto generate a 10 letter name which takes two selectors
    -An empty json file so the auto generated text could be used at
    -A selector in which where the auto generated name will be written at

    you could use it also to auto-generate an email to have a unique email
    for each time you re-run the script and save that email value later on to login
    with it*/
  nameGen(selector, text) {
    text = '';
    cy.get(selector).clear();
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    cy.get(selector).type(text);
    return text;
  }
}
export default PageInteractions;
