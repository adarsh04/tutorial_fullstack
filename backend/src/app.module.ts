import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorialsModule } from './tutorials/tutorials.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest-blog-project', { useNewUrlParser: true}), ConfigModule.forRoot({ isGlobal: true }), TutorialsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
