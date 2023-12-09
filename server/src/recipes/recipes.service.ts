import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Recipe } from './recipe.schema';

import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel('Recipe')
    private recipeModel: Model<Recipe>,
  ) {}

  async getRecipes(): Promise<Recipe[]> {
    const recipes = await this.recipeModel.find();

    return recipes;
  }

  async getRecipeById(id: string): Promise<Recipe> {
    const recipe = await this.recipeModel.findById(id);

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID "${id}" not found.`);
    }

    return recipe;
  }

  async createRecipe(dto: CreateRecipeDto): Promise<Recipe> {
    const recipe = new this.recipeModel(dto);

    return recipe.save();
  }

  async updateRecipe(id: string, dto: UpdateRecipeDto): Promise<Recipe> {
    const updatedRecipe = await this.recipeModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    if (!updatedRecipe) {
      throw new NotFoundException(`Recipe with ID "${id}" not found.`);
    }

    return updatedRecipe;
  }

  async deleteRecipe(id: string): Promise<void> {
    const deletedRecipe = await this.recipeModel.findByIdAndDelete(id);

    if (!deletedRecipe) {
      throw new NotFoundException(`Recipe with ID "${id}" not found.`);
    }
  }
}
