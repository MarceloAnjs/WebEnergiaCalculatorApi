import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/id/:id')
  findOne(@Param('id') id: string) {
    return this.equipmentService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/id/:id')
  update(@Param('id') id: string, @Body() updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentService.update(id, updateEquipmentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/id/:id')
  remove(@Param('id') id: string) {
    return this.equipmentService.remove(id);
  }
}
