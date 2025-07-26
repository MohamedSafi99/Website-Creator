import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IdeaDocument = Idea & Document;

@Schema()
export class Idea {
  @Prop({ required: true })
  prompt: string;

  @Prop({ required: true })
  html: string;
}

export const IdeaSchema = SchemaFactory.createForClass(Idea);
