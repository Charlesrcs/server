import { UserDetailsModule } from './modules/comments-from-study-app/user-details.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import dbConfig from './config/db.config';
import { ProjectNameModule } from './modules/project-name/project-name.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ProjectNameModule,
    UserDetailsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
export const dbConnection = new DataSource(dbConfig());
dbConnection
  .initialize()
  .then(() => {
 
  })
  .catch((err) => {
  
  });
