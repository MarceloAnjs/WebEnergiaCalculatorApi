import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EquipmentModule } from './equipment/equipment.module';
import { HistoryModule } from './history/history.module';
import { AuthController } from './auth/auth.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { BullModule, Process } from '@nestjs/bull';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule,
    EquipmentModule,
    HistoryModule,
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        }
      }
    })
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule { }
