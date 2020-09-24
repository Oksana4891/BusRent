
window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    mask('[name="user_tel"]'); 
    scrolling (".pageup");
// Call Modal
bindModal(".js-contactUs", ".js-popupCall", ".js-popupCall_close", 'faded', 'fadeOut');
//    Calc Modal
// Step 1
bindModal(".js-calc", ".js-popupCalc_first", ".js-popupCalc_firstClose", 'faded', 'fadeOut');
// Step 2
bindModal(".js-next_first", ".js-popupCalc_second", ".js-popupCalc_second--close", 'faded', 'fadeOut', false);
// Step 3
bindModal(".js-next_second", ".js-popupCalc_third", ".js-popupCalc_second--third", 'faded', 'fadeOut', false);
// Step 4
bindModal(".js-next_third", ".js-popupCalc_fourth", ".js-popupCalc_second--fourth", 'faded', 'fadeOut', false);

});