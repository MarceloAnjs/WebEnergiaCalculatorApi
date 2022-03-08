import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historyService.create(createHistoryDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/id/:id')
  findOne(@Param('id') id: string) {
    return this.historyService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/id/:id')
  update(@Param('id') id: string, @Body() updateHistoryDto: UpdateHistoryDto) {
    return this.historyService.update(id, updateHistoryDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/id/:id')
  remove(@Param('id') id: string) {
    return this.historyService.remove(id);
  }
}
