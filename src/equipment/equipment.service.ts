import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';

@Injectable()
export class EquipmentService {
  constructor ( private readonly prisma: PrismaService ) {}
  
  create(createEquipmentDto: CreateEquipmentDto) {
    return this.prisma.equipment.create({ data: createEquipmentDto });
  }

  findOne(id: string) {
    return this.prisma.equipment.findFirst({
      where: {
        id: id
      }
    });
  }

  update(id: string, updateEquipmentDto: UpdateEquipmentDto) {
    return this.prisma.equipment.update({
      where: {
        id: id
      },
      data: updateEquipmentDto
    });
  }

  remove(id: string) {
    return this.prisma.equipment.delete({
      where: {
        id: id
      }
    });
  }
}
