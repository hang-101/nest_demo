// src/modules/database/database.module.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DatabaseModule", {
    enumerable: true,
    get: function() {
        return DatabaseModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _constants = require("./constants");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let DatabaseModule = class DatabaseModule {
    static forRoot(configRegister) {
        return {
            global: true,
            module: DatabaseModule,
            imports: [
                _typeorm.TypeOrmModule.forRoot(configRegister())
            ]
        };
    }
    static forRepository(repositories, dataSourceName) {
        const providers = [];
        for (const Repo of repositories){
            const entity = Reflect.getMetadata(_constants.CUSTOM_REPOSITORY_METADATA, Repo);
            if (!entity) {
                continue;
            }
            providers.push({
                inject: [
                    (0, _typeorm.getDataSourceToken)(dataSourceName)
                ],
                provide: Repo,
                useFactory: (dataSource)=>{
                    const base = dataSource.getRepository(entity);
                    return new Repo(base.target, base.manager, base.queryRunner);
                }
            });
        }
        return {
            exports: providers,
            module: DatabaseModule,
            providers
        };
    }
};
DatabaseModule = _ts_decorate([
    (0, _common.Module)({})
], DatabaseModule);
