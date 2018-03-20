function deepClone(ob) {
    if (!ob) {
        return null;
    }

    var to = new Object();

    for (var key in ob) {
        if (Object.prototype.hasOwnProperty.call(ob, key)) {
            to[key] = ob[key];
        }
    }

    return to;
}

var obj = {
    foo: 1,
    name: {
        another: {
            some: 'YES'
        }
    },
    another: function () {
        function anotherFunction () {}
    }
  };

  console.log(deepClone(obj));
