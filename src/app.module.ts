import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EquipmentModule } from './equipment/equipment.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [UsersModule, EquipmentModule, HistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
