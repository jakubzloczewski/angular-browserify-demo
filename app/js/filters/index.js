"use strict";

angular.module('Filters', [])
    .filter('dateRange', function(){
        return require('./dateRangeFilter');
    });