// src/modules/core/helpers/utils.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    deepMerge: function() {
        return deepMerge;
    },
    toBoolean: function() {
        return toBoolean;
    },
    toNull: function() {
        return toNull;
    }
});
const _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
const _lodash = require("lodash");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toBoolean(value) {
    if ((0, _lodash.isNil)(value)) return false;
    if (typeof value === 'boolean') return value;
    try {
        return JSON.parse(value.toLowerCase());
    } catch (error) {
        return value;
    }
}
function toNull(value) {
    return value === 'null' ? null : value;
}
const deepMerge = (x, y, arrayMode = 'merge')=>{
    const options = {};
    if (arrayMode === 'replace') {
        options.arrayMerge = (_d, s, _o)=>s;
    } else if (arrayMode === 'merge') {
        options.arrayMerge = (_d, s, _o)=>Array.from(new Set([
                ..._d,
                ...s
            ]));
    }
    return (0, _deepmerge.default)(x, y, options);
};
