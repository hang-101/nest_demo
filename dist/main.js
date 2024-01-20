// src/main.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _platformfastify = require("@nestjs/platform-fastify");
const _appmodule = require("./app.module");
async function bootstrap() {
    // 使用fastify驱动
    const app = await _core.NestFactory.create(_appmodule.AppModule, new _platformfastify.FastifyAdapter(), {
        // 启用跨域访问
        cors: true,
        // 只使用error和warn这两种输出，避免在控制台冗余输出
        logger: [
            'error',
            'warn'
        ]
    });
    // 设置全局访问前缀
    app.setGlobalPrefix('api');
    // 启动后的输出
    await app.listen(3100, ()=>{
        console.log('api: http://localhost:3100');
    });
}
bootstrap();
