// src/modules/content/content.module.ts
import { Module } from '@nestjs/common';
import { PostRepository } from './repositories';
import { PostService, SanitizeService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { PostController } from './controllers/post.controller';
import { PostEntity } from './entities/post.entity';
import { PostSubscriber } from './subscribers/post.subscriber';

@Module({
    imports: [
        TypeOrmModule.forFeature([PostEntity]),
        DatabaseModule.forRepository([PostRepository]),
    ],
    controllers: [PostController],
    providers: [PostService, PostSubscriber, SanitizeService],
    exports: [PostService, DatabaseModule.forRepository([PostRepository])],
})
export class ContentModule {}
