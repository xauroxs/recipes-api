import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { RecipesModule } from './recipes/recipes.module';

import configValidationSchema from './config.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      validationSchema: configValidationSchema,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get('MONGO_DB_URI'),
          dbName: 'recipes',
        };
      },
    }),
    RecipesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
