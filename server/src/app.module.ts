import { Module } from '@nestjs/common';

import { RecipesModule } from './recipes/recipes.module';
import { ConfigModule } from '@nestjs/config';

import configValidationSchema from './config.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      validationSchema: configValidationSchema,
    }),
    RecipesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
