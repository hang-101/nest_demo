// src/modules/content/services/sanitize.service.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SanitizeService", {
    enumerable: true,
    get: function() {
        return SanitizeService;
    }
});
const _sanitizehtml = /*#__PURE__*/ _interop_require_default(require("sanitize-html"));
const _helpers = require("../../core/helpers");
const _common = require("@nestjs/common");
_export_star(require("./sanitize.service"), exports);
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let SanitizeService = class SanitizeService {
    sanitize(body, options) {
        return (0, _sanitizehtml.default)(body, (0, _helpers.deepMerge)(this.config, options ?? {}, 'replace'));
    }
    constructor(){
        this.config = {};
        this.config = {
            allowedTags: _sanitizehtml.default.defaults.allowedTags.concat([
                'img',
                'code'
            ]),
            allowedAttributes: {
                ..._sanitizehtml.default.defaults.allowedAttributes,
                '*': [
                    'class',
                    'style',
                    'height',
                    'width'
                ]
            },
            parser: {
                lowerCaseTags: true
            }
        };
    }
};
SanitizeService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], SanitizeService);
