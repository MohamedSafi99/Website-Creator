import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { IdeasService } from './ideas.service';
import { IdeasController } from './ideas.controller';
import { Idea, IdeaSchema } from './schemas/ideas.schema';
import { GeminiModule } from '../gemini/gemini.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Idea.name, schema: IdeaSchema }]),
    GeminiModule,
  ],
  controllers: [IdeasController],
  providers: [IdeasService],
})
export class IdeasModule {}
