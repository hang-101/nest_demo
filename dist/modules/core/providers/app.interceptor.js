"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppIntercepter", {
    enumerable: true,
    get: function() {
        return AppIntercepter;
    }
});
const _common = require("@nestjs/common");
const _lodash = require("lodash");
_export_star(require("./app.interceptor"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}
let AppIntercepter = class AppIntercepter extends _common.ClassSerializerInterceptor {
    serialize(response, options) {
        if (!(0, _lodash.isObject)(response) && !(0, _lodash.isArray)(response) || response instanceof _common.StreamableFile) {
            return response;
        }
        // 如果是响应数据是数组,则遍历对每一项进行序列化
        if ((0, _lodash.isArray)(response)) {
            return response.map((item)=>!(0, _lodash.isObject)(item) ? item : this.transformToPlain(item, options));
        }
        // 如果是分页数据,则对items中的每一项进行序列化
        if ('meta' in response && 'items' in response) {
            const items = !(0, _lodash.isNil)(response.items) && (0, _lodash.isArray)(response.items) ? response.items : [];
            return {
                ...response,
                items: items.map((item)=>{
                    return !(0, _lodash.isObject)(item) ? item : this.transformToPlain(item, options);
                })
            };
        }
        // 如果响应是个对象则直接序列化
        return this.transformToPlain(response, options);
    }
};
