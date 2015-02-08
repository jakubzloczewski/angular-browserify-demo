"use strict";

module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: require('./transactionIcon.html')
    };
};