import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { IdeasService } from './ideas.service';

@Controller('ideas')
export class IdeasController {
  constructor(private readonly ideasService: IdeasService) {}

  @Post()
  async create(@Body('prompt') prompt: string) {
    return this.ideasService.create(prompt);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.ideasService.getIdea(id);
  }
}
