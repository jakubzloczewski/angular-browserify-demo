"use strict";

module.exports = function () {
    return function (items, startDate, endDate) {
        var newItems = [];

        startDate = startDate || {};
        endDate = endDate || {};

        if(typeof startDate.getTime === "function"){
            startDate = startDate.getTime();
        }else{
            startDate = -Infinity;
        }

        if(typeof endDate.getTime === "function"){
            endDate = endDate.getTime();
        }else{
            endDate = Infinity;
        }


        angular.forEach(items, function(item){
            if (item.createdAt >= startDate && item.createdAt <= endDate) {
                newItems.push(item);
            }
        });

        return newItems;
    };
};