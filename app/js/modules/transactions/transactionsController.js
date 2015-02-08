"use strict";

module.exports = ['$scope', '$filter', 'TransactionsResource', function ($scope, $filter, TransactionsResource) {
    var stringifyModifiedAt = function (transaction) {
        transaction.modifiedAt = $filter('date')(transaction.modifiedAt, 'medium');
        return transaction;
    };

    $scope.query = "";
    $scope.loading = true;
    $scope.processing = false;

    TransactionsResource.query()
        .$promise.then(function (transactions) {
            $scope.loading = false;
            $scope.transactions = transactions.map(stringifyModifiedAt);
        });


    $scope.remove = function (transaction) {
        $scope.processing = true;
        TransactionsResource.delete({id: transaction.id})
            .$promise.then(function (transactions) {
                $scope.processing = false;
                $scope.transactions = transactions.map(stringifyModifiedAt);
            });
    };
}];