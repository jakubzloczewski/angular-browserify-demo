"use strict";

module.exports = function () {
    return {
        scope: {
            date: '=date',
            placeholder: '@placeholder'
        },
        restrict: 'E',
        template: require('./datepicker.html'),
        link: function (scope) {
            scope.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                scope.opened = true;
            };
        }
    };
};