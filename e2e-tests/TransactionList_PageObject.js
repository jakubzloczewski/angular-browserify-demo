module.exports = function TransactionListPageObject() {
    this.queryInput = element(by.model('query'));

    this.get = function () {
        browser.get('http://localhost:3000/');
    };

    this.setQuery = function (query) {
        this.queryInput.sendKeys(query);
    };

    this.getAllRows = function(){
        return element.all(by.css('.transactionList tbody tr'));
    };

    this.getRowsCount = function(){
        return this.getAllRows().count();
    };
};