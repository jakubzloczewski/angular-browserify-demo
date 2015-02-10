'use strict';

describe('Angular demo app', function () {
    describe('TransactionList', function () {
        var TransactionList = require('./TransactionList_PageObject'),
            transactionList;

        beforeEach(function () {
            transactionList = new TransactionList();
            transactionList.get();
        });

        it('shuld filter list by query', function () {
            var initialLength = transactionList.getRowsCount();

            transactionList.setQuery("Fuel");

            expect(transactionList.getRowsCount())
                .toBeLessThan(initialLength);
        });
    });
});