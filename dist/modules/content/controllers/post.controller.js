"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PostController", {
    enumerable: true,
    get: function() {
        return PostController;
    }
});
const _common = require("@nestjs/common");
const _postservice = require("../services/post.service");
const _dtos = require("../dtos");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let PostController = class PostController {
    async list(options) {
        return this.service.paginate(options);
    }
    async store(data) {
        return this.service.create(data);
    }
    async update(data) {
        return this.service.update(data);
    }
    async detail(id) {
        return this.service.detail(id);
    }
    async delete(id) {
        return this.service.delete(id);
    }
    constructor(service){
        this.service = service;
    }
};
_ts_decorate([
    (0, _common.Get)(),
    (0, _common.SerializeOptions)({
        groups: [
            'post-list'
        ]
    }),
    _ts_param(0, (0, _common.Query)(new _common.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        validationError: {
            target: false
        }
    }))),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dtos.QueryPostDto === "undefined" ? Object : _dtos.QueryPostDto
    ]),
    _ts_metadata("design:returntype", Promise)
], PostController.prototype, "list", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _common.SerializeOptions)({
        groups: [
            'post-detail'
        ]
    }),
    _ts_param(0, (0, _common.Body)(new _common.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        validationError: {
            target: false
        },
        groups: [
            'create'
        ]
    }))),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dtos.CreatePostDto === "undefined" ? Object : _dtos.CreatePostDto
    ]),
    _ts_metadata("design:returntype", Promise)
], PostController.prototype, "store", null);
_ts_decorate([
    (0, _common.Patch)(),
    (0, _common.SerializeOptions)({
        groups: [
            'post-detail'
        ]
    }),
    _ts_param(0, (0, _common.Body)(new _common.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        validationError: {
            target: false
        },
        groups: [
            'update'
        ]
    }))),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dtos.UpdatePostDto === "undefined" ? Object : _dtos.UpdatePostDto
    ]),
    _ts_metadata("design:returntype", Promise)
], PostController.prototype, "update", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    (0, _common.SerializeOptions)({
        groups: [
            'post-detail'
        ]
    }),
    _ts_param(0, (0, _common.Param)('id', new _common.ParseUUIDPipe())),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], PostController.prototype, "detail", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    (0, _common.SerializeOptions)({
        groups: [
            'post-detail'
        ]
    }),
    _ts_param(0, (0, _common.Param)('id', new _common.ParseUUIDPipe())),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], PostController.prototype, "delete", null);
PostController = _ts_decorate([
    (0, _common.Controller)('posts'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _postservice.PostService === "undefined" ? Object : _postservice.PostService
    ])
], PostController);
