import { Document } from 'mongoose';

export interface Venue extends Document {
  name: string;
  town: string;
  state: string;
  link?: string;
  timezone: string;
}
