import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';

@Injectable()
export class HistoryService {
  constructor(private readonly prisma: PrismaService) {}
  create(createHistoryDto: CreateHistoryDto) {
    return this.prisma.history.create({
      data: {
        ...createHistoryDto,
      },
    });
  }

  findOne(userId: string) {
     return this.prisma.history.findFirst({
      where: {
        userId,
      },
    });
  }

  update(id: string, updateHistoryDto: UpdateHistoryDto) {
    return this.prisma.history.update({
      where: {
        id,
      },
      data: {
        ...updateHistoryDto,
      },
    });
  }

  remove(id: string) {
    return this.prisma.history.delete({
      where: {
        id,
      },
    });
  }
}
