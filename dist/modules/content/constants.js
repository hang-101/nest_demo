// src/modules/content/constants.ts
/**
 * 文章内容类型
 */ "use strict";
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
    PostBodyType: function() {
        return PostBodyType;
    },
    PostOrderType: function() {
        return PostOrderType;
    }
});
var PostBodyType;
(function(PostBodyType) {
    PostBodyType["HTML"] = "html";
    PostBodyType["MD"] = "markdown";
})(PostBodyType || (PostBodyType = {}));
var PostOrderType;
(function(PostOrderType) {
    PostOrderType["CREATED"] = "createdAt";
    PostOrderType["UPDATED"] = "updatedAt";
    PostOrderType["PUBLISHED"] = "publishedAt";
    PostOrderType["CUSTOM"] = "custom";
})(PostOrderType || (PostOrderType = {}));
