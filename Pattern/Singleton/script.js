var Singleton = (function () {
    var instance;
    function init() { return { foo: "bar" }; };
    return {
        getInstance: function () {
            if (!instance) { instance = init(); }
            return instance;
        }
    }
})();

var single = Singleton.getInstance();
var single2 = Singleton.getInstance();
console.log(single, ' ', single2);