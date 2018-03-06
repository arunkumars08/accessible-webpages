// Method chaining to illustrate the selection of dom elements

var DOM = function (parent) {
    this.elements = parent;
    this.wrap = this.elements;
    this.total = this.elements.length;
    return this;
};

DOM.prototype.firstNode = function () {
    this.wrap = this.elements[0];
    return this;
};

DOM.prototype.lastNode = function () {
    this.wrap = this.elements[this.total - 1];
    return this;
};

DOM.prototype.getClass = function () {
    return this.wrap.classList;
};

DOM.prototype.nthNode = function (n) {
    this.wrap = this.elements[n];
    return this;
};

DOM.prototype.HTML = function () {
    if (Array.isArray(this.wrap)) {
        return this.wrap;
    }
    return this.wrap.innerHTML;
};
