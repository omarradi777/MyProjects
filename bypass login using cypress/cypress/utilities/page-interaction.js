/**********************************************************************************************************************
 * This file is used to interact with any page element
 *
 * It contains all needed methods to interact with a web page
 ***********************************************************************************************************************/

/**
 * This is Page interactions class
 *
 * It contains all needed functions to interact with page view {}
 */
class PageInteractions {
  /**
   * Get one or more DOM elements by selector
   * @param  selector The selector to get .
   */
  getElem(selector) {
    return cy.get(selector);
  }

  /**
   * A method to Get the DOM element containing the content.
   * @param  text  The text inside the given selector.
   * @param  selector The selector used to check for the text inside it.
   */
  getElemText(selector, text) {
    return cy.contains(selector, text);
  }

  /**
   * Method to click on a button
   * @param  selector The selector to get .
   * @param  force pass {force:true} if needed .
   */
  clickBtn(selector, text, force) {
    this.getElemText(selector, text).click(force);
  }

  /**
   * Method to write on a textfield/textarea
   * @param  selector The selector to get for the textarea .
   * @param  text The text to write on it.
   * @param  force pass {force:true} if needed .
   */
  writeTxt(selector, text, force) {
    this.getElem(selector).type(text, force);
  }

  /**
   * Method to clear a textarea/textfield
   * @param  selector The selector to get to clear the textarea .
   * @param  force pass {force:true} if needed .
   */
  clearTxt(selector, force) {
    this.getElem(selector).clear(force);
  }

  /**
   * Method to pick an option from a drop-down
   * @param  selector The selector to get to click on the dropdown .
   * @param  optSelector The selector of the option/text picked from the dropdown .
   * @param  text The text of the option to be picked from the dropdown.
   * @param  force pass {force:true} if needed.
   */
  selectFromDropDown(selector, optSelector, text, force) {
    this.getElem(selector).click(force);
    this.getElemText(optSelector, text).click(force);
  }

  /**
  * Method to upload a file/image 
  * @param  file The directory of the file/image.
  * @param  mime The mime type of your file/image. 
  * @param  selector the selector of the uploader.
  * The following link contains all mimes for all possilble file formats (https://www.freeformatter.com/mime-types-list.html)
  * before using the below function you need to run 
     -npm install --save-dev cypress-file-upload
      in your project directory then 
     -import 'cypress-file-upload';
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
}
export default PageInteractions;
