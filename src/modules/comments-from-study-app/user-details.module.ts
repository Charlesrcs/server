import { Module } from '@nestjs/common';
import { UserDetailsController } from './user-details/user-details.controller'
import { UserDetailsService } from './user-details/user-details.service'
import { AuthModule } from 'src/auth/auth.module';
import { DateTimeService } from 'src/common/services/date-time/date-time.service';
@Module({
  controllers: [UserDetailsController],
  imports:[AuthModule],
  providers: [UserDetailsService,DateTimeService]
})
export class UserDetailsModule {}
