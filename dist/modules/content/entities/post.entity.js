"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PostEntity", {
    enumerable: true,
    get: function() {
        return PostEntity;
    }
});
const _typeorm = require("typeorm");
const _constants = require("../constants");
const _classtransformer = require("class-transformer");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PostEntity = class PostEntity extends _typeorm.BaseEntity {
};
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.PrimaryColumn)({
        type: 'varchar',
        generated: 'uuid',
        length: 36
    }),
    _ts_metadata("design:type", String)
], PostEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.Column)({
        comment: '文章标题'
    }),
    _ts_metadata("design:type", String)
], PostEntity.prototype, "title", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)({
        groups: [
            'post-detail'
        ]
    }),
    (0, _typeorm.Column)({
        comment: '文章内容',
        type: 'text'
    }),
    _ts_metadata("design:type", String)
], PostEntity.prototype, "body", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.Column)({
        comment: '文章描述',
        nullable: true
    }),
    _ts_metadata("design:type", String)
], PostEntity.prototype, "summary", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.Column)({
        comment: '关键字',
        type: 'simple-array',
        nullable: true
    }),
    _ts_metadata("design:type", Array)
], PostEntity.prototype, "keywords", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.Column)({
        comment: '文章类型',
        type: 'varchar',
        // 如果是mysql或者postgresql你可以使用enum类型
        // enum: PostBodyType,
        default: _constants.PostBodyType.MD
    }),
    _ts_metadata("design:type", typeof _constants.PostBodyType === "undefined" ? Object : _constants.PostBodyType)
], PostEntity.prototype, "type", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.Column)({
        comment: '发布时间',
        type: 'varchar',
        nullable: true
    }),
    _ts_metadata("design:type", Object)
], PostEntity.prototype, "publishedAt", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.Column)({
        comment: '自定义文章排序',
        default: 0
    }),
    _ts_metadata("design:type", Number)
], PostEntity.prototype, "customOrder", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.CreateDateColumn)({
        comment: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], PostEntity.prototype, "createdAt", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.UpdateDateColumn)({
        comment: '更新时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], PostEntity.prototype, "updatedAt", void 0);
PostEntity = _ts_decorate([
    (0, _typeorm.Entity)('content_posts')
], PostEntity);
