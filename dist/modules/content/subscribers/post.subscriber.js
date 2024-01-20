"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PostSubscriber", {
    enumerable: true,
    get: function() {
        return PostSubscriber;
    }
});
const _typeorm = require("typeorm");
const _constants = require("../constants");
const _postentity = require("../entities/post.entity");
const _repositories = require("../repositories");
const _sanitizeservice = require("../services/sanitize.service");
_export_star(require("./post.subscriber"), exports);
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
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PostSubscriber = class PostSubscriber {
    listenTo() {
        return _postentity.PostEntity;
    }
    /**
     * 加载文章数据的处理
     * @param entity
     */ async afterLoad(entity) {
        if (entity.type === _constants.PostBodyType.HTML) {
            entity.body = this.sanitizeService.sanitize(entity.body);
        }
    }
    constructor(dataSource, sanitizeService, postRepository){
        this.dataSource = dataSource;
        this.sanitizeService = sanitizeService;
        this.postRepository = postRepository;
    }
};
PostSubscriber = _ts_decorate([
    (0, _typeorm.EventSubscriber)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm.DataSource === "undefined" ? Object : _typeorm.DataSource,
        typeof _sanitizeservice.SanitizeService === "undefined" ? Object : _sanitizeservice.SanitizeService,
        typeof _repositories.PostRepository === "undefined" ? Object : _repositories.PostRepository
    ])
], PostSubscriber);
