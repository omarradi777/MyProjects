/**********************************************************************************************************************
 * This file contains common methods used for different test cases
 ***********************************************************************************************************************/
class CommonMethods {
  /**
   * Method to randomly generate 10-character
   * @param  selector Selector where to generate the 10 characters.
   * @param  text empty string to generate the 10 characters at.
   * Commonly used to randomly generate an e-mail/username
   * */
  nameGen(text) {
    text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  /**
   * Method to return the current month according to the values in array months
   * @var months array contains all months.
   * @var currentDate creates a Date object
   * @method getMonth() returns values from '0' to '11'
   * @var thisMonth gets values from @var months according to values from @method currentDate.getMonth()
   * */
  getMonth() {
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Aor',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    var currentDate = new Date();
    var thisMonth = months[currentDate.getMonth()];
    return thisMonth;
  }

  /**
   * Method to return the current year
   * @var currentDate creates a Date object
   * @var year gets the current year using object @method getFullYear()
   * */
  getYear() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    return year;
  }
}
export default CommonMethods;
