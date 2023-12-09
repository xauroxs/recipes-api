import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Recipe {
  @Prop()
  name: string;

  @Prop([String])
  ingredients: string[];

  @Prop([String])
  instructions: string[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

export type RecipeDocument = HydratedDocument<Recipe>;
