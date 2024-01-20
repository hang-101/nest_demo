import { CustomRepository } from '@/modules/database/decorators';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';

// src/modules/content/repositories/post.repository.ts
@CustomRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
    buildBaseQB() {
        console.log('crea');
        return this.createQueryBuilder('post');
    }
}
