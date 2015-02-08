"use strict";

angular.module('Components', ['ui.bootstrap'])
    .directive('datePicker', require('./datepicker'))
    .directive('spinner', require('./spinner'));