"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PostService", {
    enumerable: true,
    get: function() {
        return PostService;
    }
});
const _helper = require("../../database/helper");
const _common = require("@nestjs/common");
const _lodash = require("lodash");
const _typeorm = require("typeorm");
const _constants = require("../constants");
const _postentity = require("../entities/post.entity");
const _repositories = require("../repositories");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PostService = class PostService {
    /**
     * 获取分页数据
     * @param options 分页选项
     * @param callback 添加额外的查询
     */ async paginate(options, callback) {
        const qb = await this.buildListQuery(this.repository.buildBaseQB(), options, callback);
        return (0, _helper.paginate)(qb, options);
    }
    /**
     * 查询单篇文章
     * @param id
     * @param callback 添加额外的查询
     */ async detail(id, callback) {
        let qb = this.repository.buildBaseQB();
        qb.where(`post.id = :id`, {
            id
        });
        qb = !(0, _lodash.isNil)(callback) && (0, _lodash.isFunction)(callback) ? await callback(qb) : qb;
        const item = await qb.getOne();
        if (!item) throw new _typeorm.EntityNotFoundError(_postentity.PostEntity, `The post ${id} not exists!`);
        return item;
    }
    /**
     * 创建文章
     * @param data
     */ async create(data) {
        const item = await this.repository.save(data);
        return this.detail(item.id);
    }
    /**
     * 更新文章
     * @param data
     */ async update(data) {
        await this.repository.update(data.id, (0, _lodash.omit)(data, [
            'id'
        ]));
        return this.detail(data.id);
    }
    /**
     * 删除文章
     * @param id
     */ async delete(id) {
        const item = await this.repository.findOneByOrFail({
            id
        });
        return this.repository.remove(item);
    }
    /**
     * 构建文章列表查询器
     * @param qb 初始查询构造器
     * @param options 排查分页选项后的查询选项
     * @param callback 添加额外的查询
     */ async buildListQuery(qb, options, callback) {
        const { orderBy, isPublished } = options;
        let newQb = qb;
        if (typeof isPublished === 'boolean') {
            newQb = isPublished ? newQb.where({
                publishedAt: (0, _typeorm.Not)((0, _typeorm.IsNull)())
            }) : newQb.where({
                publishedAt: (0, _typeorm.IsNull)()
            });
        }
        newQb = this.queryOrderBy(newQb, orderBy);
        if (callback) return callback(newQb);
        return newQb;
    }
    /**
     *  对文章进行排序的Query构建
     * @param qb
     * @param orderBy 排序方式
     */ queryOrderBy(qb, orderBy) {
        switch(orderBy){
            case _constants.PostOrderType.CREATED:
                return qb.orderBy('post.createdAt', 'DESC');
            case _constants.PostOrderType.UPDATED:
                return qb.orderBy('post.updatedAt', 'DESC');
            case _constants.PostOrderType.PUBLISHED:
                return qb.orderBy('post.publishedAt', 'DESC');
            case _constants.PostOrderType.CUSTOM:
                return qb.orderBy('customOrder', 'DESC');
            default:
                return qb.orderBy('post.createdAt', 'DESC').addOrderBy('post.updatedAt', 'DESC').addOrderBy('post.publishedAt', 'DESC');
        }
    }
    constructor(repository){
        this.repository = repository;
    }
};
PostService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _repositories.PostRepository === "undefined" ? Object : _repositories.PostRepository
    ])
], PostService);
