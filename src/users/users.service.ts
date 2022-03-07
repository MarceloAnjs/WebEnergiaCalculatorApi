import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor (private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({ data: createUserDto });
  }

  findOne(id: string) {
    return this.prisma.users.findFirst({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.users.delete({ where: { id } });
  }
}
