"use strict";
var dateRangeFilter = require('./dateRangeFilter');

describe('Custom filters module', function () {
    describe('Date range filter', function () {
        it('should returns list of items within date range', function () {
            var startDate = new Date("October 12, 2014 11:13:00"),
                endDate = new Date("October 13, 2014 11:13:00"),
                items = [{
                    createdAt: +new Date("October 11, 2014 11:13:00")
                }, {
                    createdAt: +new Date("October 12, 2014 11:13:00")
                }, {
                    createdAt: +new Date("October 13, 2014 11:13:00")
                }, {
                    createdAt: +new Date("October 14, 2014 11:13:00")
                }];

            var filteredItems = dateRangeFilter(items, startDate, endDate);

            console.log(filteredItems);

            expect(filteredItems.length).toBe(2);
        });
    });
});