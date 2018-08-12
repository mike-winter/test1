function add() {
    var counter = 0;
    return function () {counter += 1; console.log(counter); return counter}
}

var myfunc=add()
myfunc()
myfunc.counter=88;
myfunc()
myfunc()
