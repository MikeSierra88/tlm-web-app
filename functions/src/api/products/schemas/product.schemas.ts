import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  signable: boolean;

  @Prop()
  spotifyLink: string;

  @Prop()
  promo: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
