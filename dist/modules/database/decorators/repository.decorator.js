"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CustomRepository", {
    enumerable: true,
    get: function() {
        return CustomRepository;
    }
});
const _common = require("@nestjs/common");
const _constants = require("../constants");
const CustomRepository = (entity)=>(0, _common.SetMetadata)(_constants.CUSTOM_REPOSITORY_METADATA, entity);
