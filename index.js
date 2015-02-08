"use strict";

var main = function () {
    var express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        router = express.Router(),

        uuid = require('node-uuid'),

        merge = require('merge'),

        collectionPrototype = {
            getAll: function () {
                return this.data;
            },

            add: function (newItem) {
                var itemWithDates = merge(newItem, {
                    id: uuid.v1(),
                    createdAt: +new Date(),
                    modifiedAt: +new Date()
                });

                this.data.push(itemWithDates);
                return this;
            },

            remove: function (id) {
                this.data = this.data.filter(function (item) {
                    return item.id !== id;
                });

                return this;
            }
        },

        items = merge({
            data: [
                {
                    id : uuid.v1(),
                    "type": "card",
                    "name": "STATOIL",
                    "categories": ['Fuel'],
                    "amount": "-100",
                    createdAt: Date.parse("February 1, 2015")
                },
                {
                    id : uuid.v1(),
                    "type": "card",
                    "name": "Paweł i Gaweł",
                    "categories": ['Food', 'Household chemical'],
                    "amount": "-100",
                    createdAt: Date.parse("February 3, 2015")
                },
                {
                    id : uuid.v1(),
                    "type": "card",
                    "name": "Bookstore",
                    "amount": "-540",
                    "categories": ['Multimedia', 'Books'],
                    createdAt: Date.parse("February 3, 2015")
                },
                {
                    id : uuid.v1(),
                    "type": "transfer",
                    "name": "discretionary bonus",
                    "amount": "4500",
                    "categories": ['Salary'],
                    createdAt: Date.parse("February 2, 2015")
                },
                {
                    id : uuid.v1(),
                    "type": "transfer",
                    "name": "Saving",
                    "amount": "-2000",
                    "categories": ['Regular saving'],
                    createdAt: Date.parse("February 4, 2015")
                },
                {
                    id : uuid.v1(),
                    "type": "internet",
                    "name": "Footlocker",
                    "amount": "-200",
                    "categories": ['Clothing'],
                    createdAt: Date.parse("February 5, 2015")
                }
            ]
        }, collectionPrototype);

    router.use(bodyParser.json());

    router.all('*', function (req, res, next) {
        res.type('application/json');
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");

        setTimeout(function(){
            next();
        }, 1500);
    });

    router.get('/items', function (req, res, next) {
        res.send(JSON.stringify(items.getAll()));

        next();
    });

    router.delete('/items/:id', function (req, res, next) {
        var allIssues = items.remove(req.params.id)
            .getAll();

        res.send(JSON.stringify(allIssues));

        next();
    });

    app.use('/api', router);
    app.use('/', express.static('./dist/'));

    app.listen(3000);

};

main();