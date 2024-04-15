import { Module } from '@nestjs/common';
import { DataController } from './controllers/data.controller';
import { ApiService } from './services/api.service';

@Module({
  imports: [],
  controllers: [DataController],
  providers: [ApiService],
})
export class AppModule {}
