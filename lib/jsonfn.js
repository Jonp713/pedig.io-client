/**
* JSONfn - javascript (both node.js and browser) plugin to stringify, 
*          parse and clone objects with Functions, Regexp and Date.
*  
* Version - 0.60.00
* Copyright (c) 2012 - 2014 Vadim Kiryukhin
* vkiryukhin @ gmail.com
* http://www.eslinstructor.net/jsonfn/
* 
* Licensed under the MIT license ( http://www.opensource.org/licenses/mit-license.php )
*
*   USAGE:
*     browser:
*         JSONfn.stringify(obj);
*         JSONfn.parse(str[, date2obj]);
*         JSONfn.clone(obj[, date2obj]);
*
*     nodejs:
*       var JSONfn = require('path/to/json-fn');
*       JSONfn.stringify(obj);
*       JSONfn.parse(str[, date2obj]);
*       JSONfn.clone(obj[, date2obj]);
*
*
*     @obj      -  Object;
*     @str      -  String, which is returned by JSONfn.stringify() function; 
*     @date2obj - Boolean (optional); if true, date string in ISO8061 format
*                 is converted into a Date object; otherwise, it is left as a String.
*/

"use strict";


  module.exports.

  module.exports.clone = function (obj, date2obj) {
    return exports.parse(exports.stringify(obj), date2obj);
  };



