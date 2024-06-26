import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type VenueDocument = Venue & Document;

@Schema()
export class Venue {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  town: string;

  @Prop()
  state: string;

  @Prop()
  link?: string;

  @Prop()
  timezone: string;

  @Prop({ required: true, type: Date })
  createdAt: Date;
}

export const VenueSchema = SchemaFactory.createForClass(Venue);
