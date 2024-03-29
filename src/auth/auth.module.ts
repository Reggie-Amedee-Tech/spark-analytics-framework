// auth.module.ts

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EmailModule } from '../email/email.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [EmailModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

