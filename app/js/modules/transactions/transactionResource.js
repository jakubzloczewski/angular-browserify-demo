"use strict";

module.exports = ['$resource',
    function ($resource) {
        return $resource('/api/items/:id', {id: '@id'}, {
            delete: {method: 'DELETE', isArray: true}
        });
    }];