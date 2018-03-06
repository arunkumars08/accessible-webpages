var AddToCircles = function () {
    this.stack = [];
    this.init();
};

AddToCircles.prototype.init = function () {
    this.stack.push(document.getElementById('addToCircles'));
    var _this = this;
    document.getElementById('addToCircles').addEventListener('click', function(event) {
        document.getElementById('circles').style.display = 'block';
        _this.stack.push(document.getElementById('circles'));
        _this.stack.pop().focus();
    });
    document.onchange = function(event) {
        debugger;
        if(event.target.parentNode.parentNode.id === 'circles') {
            var value = event.target.getAttribute('aria-checked');
            value = value === 'false' ? 'true' : 'false';
            event.target.setAttribute('aria-checked', value);
        }
    };
    document.onkeyup = function(event) {
        if (event.keyCode === 27) {
            document.getElementById('circles').style.display = 'none';
            _this.stack.pop().focus();
        }
    }
};

window.onload = function () {
    new AddToCircles();
};
