import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    if (createUserDto.email) {
      const user = await this.prisma.users.findUnique({
        where: {
          email: createUserDto.email,
        },
      });

      if (!user) {
        const newUser = await this.prisma.users.create({
          data: {
            email: createUserDto.email,
          },
        });
        return newUser;
      }
      return {
        skip: 'User already exists',
      };
    }
  }

  findOne(id: string) {
    return this.prisma.users.findFirst({ where: { email: id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: {
        email: id
      },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.users.delete({ where: { email: id } });
  }
}
