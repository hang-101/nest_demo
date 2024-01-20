import { EventSubscriber, DataSource } from 'typeorm';
import { PostBodyType } from '../constants';
import { PostEntity } from '../entities/post.entity';
import { PostRepository } from '../repositories';
import { SanitizeService } from '../services/sanitize.service';

// src/modules/content/subscribers/post.subscriber.ts
@EventSubscriber()
export class PostSubscriber {
    constructor(
        protected dataSource: DataSource,
        protected sanitizeService: SanitizeService,
        protected postRepository: PostRepository,
    ) {}

    listenTo() {
        return PostEntity;
    }

    /**
     * 加载文章数据的处理
     * @param entity
     */
    async afterLoad(entity: PostEntity) {
        if (entity.type === PostBodyType.HTML) {
            entity.body = this.sanitizeService.sanitize(entity.body);
        }
    }
}

// src/modules/content/subscribers/index.ts
export * from './post.subscriber';
