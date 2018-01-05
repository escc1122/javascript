https://github.com/jsdoc3/jsdoc/issues/596

 /**
  * A human being.
  * @class
  * @constructor
  * @param {string} name
  */
function Person(name) { /*...*/ }
Person.prototype = {};
Person.prototype.constructor = PersonM

/**
 * @memberof Person
 */
Person.prototype.greet = function () { /*...*/ }
