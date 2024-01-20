// src/modules/database/helpers.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "paginate", {
    enumerable: true,
    get: function() {
        return paginate;
    }
});
const _lodash = require("lodash");
const paginate = async (qb, options)=>{
    const limit = (0, _lodash.isNil)(options.limit) || options.limit < 1 ? 1 : options.limit;
    const page = (0, _lodash.isNil)(options.page) || options.page < 1 ? 1 : options.page;
    const start = page >= 1 ? page - 1 : 0;
    const totalItems = await qb.getCount();
    qb.take(limit).skip(start * limit);
    const items = await qb.getMany();
    const totalPages = totalItems % limit === 0 ? Math.floor(totalItems / limit) : Math.floor(totalItems / limit) + 1;
    const remainder = totalItems % limit !== 0 ? totalItems % limit : limit;
    const itemCount = page < totalPages ? limit : remainder;
    return {
        items,
        meta: {
            totalItems,
            itemCount,
            perPage: limit,
            totalPages,
            currentPage: page
        }
    };
};
