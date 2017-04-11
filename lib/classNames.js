'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function classNames() {
    var args = arguments;
    var cls = [];
    for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        if (!arg) {
            continue;
        } else if (Object.prototype.toString.call(arg) === '[object Array]') {
            cls.push(classNames.apply(null, arg));
        } else if (typeof arg === 'number' || typeof arg === 'string') {
            cls.push(arg);
        } else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {
            for (var key in arg) {
                if (Object.hasOwnProperty.call(arg, key) && arg[key]) {
                    cls.push(key);
                }
            }
        }
    }
    return cls.join(' ');
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = classNames;
} else if (typeof define === 'function' && _typeof(define.amd) === 'object' && define.amd) {
    // register as 'classnames', consistent with npm package name
    define('classnames', [], function () {
        return classNames;
    });
} else {
    window.classNames = classNames;
}