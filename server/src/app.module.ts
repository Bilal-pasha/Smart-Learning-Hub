import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@features/user/user.module';
import { AuthModule } from './features/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EntitySchema, MixedList } from 'typeorm';
import dbConfig from '@infrastructure/database/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes env variables available globally
      load: [dbConfig], // Loads our custom database config
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: configService.get<'postgres'>('db.type'),
        host: configService.get<string>('db.host'),
        port: configService.get<number>('db.port'),
        username: configService.get<string>('db.username'),
        password: configService.get<string>('db.password'),
        database: configService.get<string>('db.database'),
        synchronize: configService.get<boolean>('db.synchronize'),
        entities:
          // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
          configService.get<MixedList<Function | string | EntitySchema>>(
            'db.entities',
          ),

        logging: configService.get<boolean>('db.logging'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
