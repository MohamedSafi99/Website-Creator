import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GeminiService } from '../gemini/gemini.service';
import { Idea, IdeaDocument } from './schemas/ideas.schema';

@Injectable()
export class IdeasService {
  constructor(
    @InjectModel(Idea.name) private ideaModel: Model<IdeaDocument>,
    private geminiService: GeminiService,
  ) {}

  async create(prompt: string): Promise<Idea> {
    const html = await this.geminiService.generateLandingPage(prompt);
    const createdIdea = new this.ideaModel({ prompt, html });
    return createdIdea.save();
  }

  async getIdea(id: string): Promise<Idea | null> {
    return this.ideaModel.findById(id).exec();
  }
}
