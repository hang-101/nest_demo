// src/config/database.config.ts
/**
 * 数据库配置
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "database", {
    enumerable: true,
    get: function() {
        return database;
    }
});
const _path = require("path");
const database = ()=>({
        // 以下为mysql配置
        // charset: 'utf8mb4',
        // logging: ['error'],
        // type: 'mysql',
        // host: '127.0.0.1',
        // port: 3306,
        // username: 'root',
        // password: '12345678',
        // database: '3r',
        // 以下为sqlite配置
        type: 'better-sqlite3',
        database: (0, _path.resolve)(__dirname, '/Users/hang.yang/nestapp/back/database4.db'),
        synchronize: true,
        autoLoadEntities: true
    });
