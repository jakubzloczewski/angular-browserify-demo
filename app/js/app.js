"use strict";

angular.module('myApp', [
    'Transactions',
    'Components',
    'Filters'])
    .directive('app', function () {
        return {restrict: 'E', template: require('./app.html')};
    });

require('./components');
require('./filters');
require('./modules/transactions');