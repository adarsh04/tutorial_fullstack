import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorialsModule } from './tutorials/tutorials.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest-blog-project', { useNewUrlParser: true}), ServeStaticModule.forRoot({rootPath: join(__dirname, '..','build'),}), TutorialsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
