// src/modules/content/dtos/post.dto.ts
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
    CreatePostDto: function() {
        return CreatePostDto;
    },
    QueryPostDto: function() {
        return QueryPostDto;
    },
    UpdatePostDto: function() {
        return UpdatePostDto;
    }
});
const _swagger = require("@nestjs/swagger");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _lodash = require("lodash");
const _helpers = require("../../core/helpers");
const _constants = require("../constants");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let QueryPostDto = class QueryPostDto {
    constructor(){
        this.page = 1;
        this.limit = 10;
    }
};
_ts_decorate([
    (0, _classtransformer.Transform)(({ value })=>(0, _helpers.toBoolean)(value)),
    (0, _classvalidator.IsBoolean)(),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", Boolean)
], QueryPostDto.prototype, "isPublished", void 0);
_ts_decorate([
    (0, _classvalidator.IsEnum)(_constants.PostOrderType, {
        message: `排序规则必须是${Object.values(_constants.PostOrderType).join(',')}其中一项`
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", typeof _constants.PostOrderType === "undefined" ? Object : _constants.PostOrderType)
], QueryPostDto.prototype, "orderBy", void 0);
_ts_decorate([
    (0, _classtransformer.Transform)(({ value })=>(0, _lodash.toNumber)(value)),
    (0, _classvalidator.Min)(1, {
        message: '当前页必须大于1'
    }),
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.IsOptional)()
], QueryPostDto.prototype, "page", void 0);
_ts_decorate([
    (0, _classtransformer.Transform)(({ value })=>(0, _lodash.toNumber)(value)),
    (0, _classvalidator.Min)(1, {
        message: '每页显示数据必须大于1'
    }),
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.IsOptional)()
], QueryPostDto.prototype, "limit", void 0);
let CreatePostDto = class CreatePostDto {
    constructor(){
        this.customOrder = 0;
    }
};
_ts_decorate([
    (0, _classvalidator.MaxLength)(255, {
        always: true,
        message: '文章标题长度最大为$constraint1'
    }),
    (0, _classvalidator.IsNotEmpty)({
        groups: [
            'create'
        ],
        message: '文章标题必须填写'
    }),
    (0, _classvalidator.IsOptional)({
        groups: [
            'update'
        ]
    }),
    _ts_metadata("design:type", String)
], CreatePostDto.prototype, "title", void 0);
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)({
        groups: [
            'create'
        ],
        message: '文章内容必须填写'
    }),
    (0, _classvalidator.IsOptional)({
        groups: [
            'update'
        ]
    }),
    _ts_metadata("design:type", String)
], CreatePostDto.prototype, "body", void 0);
_ts_decorate([
    (0, _classvalidator.MaxLength)(500, {
        always: true,
        message: '文章描述长度最大为$constraint1'
    }),
    (0, _classvalidator.IsOptional)({
        always: true
    }),
    _ts_metadata("design:type", String)
], CreatePostDto.prototype, "summary", void 0);
_ts_decorate([
    (0, _classvalidator.IsDateString)({
        strict: true
    }, {
        always: true
    }),
    (0, _classvalidator.IsOptional)({
        always: true
    }),
    (0, _classvalidator.ValidateIf)((value)=>!(0, _lodash.isNil)(value.publishedAt)),
    (0, _classtransformer.Transform)(({ value })=>value === 'null' ? null : value),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], CreatePostDto.prototype, "publishedAt", void 0);
_ts_decorate([
    (0, _classvalidator.MaxLength)(20, {
        each: true,
        always: true,
        message: '每个关键字长度最大为$constraint1'
    }),
    (0, _classvalidator.IsOptional)({
        always: true
    }),
    _ts_metadata("design:type", Array)
], CreatePostDto.prototype, "keywords", void 0);
_ts_decorate([
    (0, _classtransformer.Transform)(({ value })=>(0, _lodash.toNumber)(value)),
    (0, _classvalidator.Min)(0, {
        always: true,
        message: '排序值必须大于0'
    }),
    (0, _classvalidator.IsNumber)(undefined, {
        always: true
    }),
    (0, _classvalidator.IsOptional)({
        always: true
    })
], CreatePostDto.prototype, "customOrder", void 0);
let UpdatePostDto = class UpdatePostDto extends (0, _swagger.PartialType)(CreatePostDto) {
};
_ts_decorate([
    (0, _classvalidator.IsUUID)(undefined, {
        groups: [
            'update'
        ],
        message: '文章ID格式错误'
    }),
    (0, _classvalidator.IsDefined)({
        groups: [
            'update'
        ],
        message: '文章ID必须指定'
    }),
    _ts_metadata("design:type", String)
], UpdatePostDto.prototype, "id", void 0);
