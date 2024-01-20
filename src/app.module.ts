import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ContentModule } from './modules/content/content.module';
import { CoreModule } from './modules/core/core.module';
import { DatabaseModule } from './modules/database/database.module';
import { database } from './modules/config';

@Module({
    imports: [ContentModule, CoreModule.forRoot(), DatabaseModule.forRoot(database)],
    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule {}
