import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';



@Injectable()
export class AuthService {
  constructor (private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({ data: createUserDto });
  }

}
