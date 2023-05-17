import { Module } from '@nestjs/common';
import { TutorialsService } from './tutorials.service';
import { TutorialsController } from './tutorials.controller';
import { TutorialsSchema } from './schemas/tutorials.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Post', schema: TutorialsSchema}])
  ],
  providers: [TutorialsService],
  controllers: [TutorialsController]
})
export class TutorialsModule {}
