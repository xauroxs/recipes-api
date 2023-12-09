import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';

import { Recipe, RecipeSchema } from './recipe.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }]),
  ],
  providers: [RecipesService],
  controllers: [RecipesController],
})
export class RecipesModule {}
