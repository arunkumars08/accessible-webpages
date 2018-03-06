var map = {};

var Slider = function (parentElement) {
    var getAllImages = parentElement.querySelectorAll('img');
    map['slider'] = [this];
    if (getAllImages && getAllImages.length) {
        this.images = getAllImages;
        this.total = this.images.length;
        this.initSlider(getAllImages);
    }
}

Slider.prototype.initSlider = function () {
    this.current = 0;
    this.setActiveImage();
};

Slider.prototype.setActiveImage = function () {
    var _this = this;
    this.images.forEach(function (image) {
        if (image.classList.contains('selected')) {
            image.classList.remove('selected');
            image.setAttribute('aria-hidden', 'true');
        }
        _this.images[_this.current].classList.add('selected');
        _this.images[_this.current].setAttribute('aria-hidden', 'false');
        document.getElementById('current-image').innerText = _this.images[_this.current].getAttribute('alt');
    });
};

Slider.prototype.next = function () {
    this.current = this.current + 1 >= this.total ? 0 : this.current + 1;
    this.setActiveImage();
};

Slider.prototype.prev = function () {
    this.current = this.current - 1 < 0 ? this.total - 1 : this.current - 1;
    this.setActiveImage();
};


var HandleEvents = function () {
    this.init();
};

HandleEvents.prototype.init = function () {
    document.getElementById('prev').addEventListener('click', function (event) {
        map['slider'][0].prev();
        this.focus();
    });

    document.getElementById('next').addEventListener('click', function (event) {
        map['slider'][0].next();
        this.focus();
    });
};

window.onload = function () {
    var slider = new Slider(document.getElementById('slider-container'));
    new HandleEvents();
};
