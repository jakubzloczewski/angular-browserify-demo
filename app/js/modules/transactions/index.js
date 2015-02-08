"use strict";

angular.module('Transactions', ['ngResource'])
    .factory('TransactionsResource', require('./transactionResource'))
    .controller('TransactionListController', require('./transactionsController'))
    .directive('transactionList', require('./directives/transactionList'))
    .directive('transactionIcon', require('./directives/transactionIcon'));