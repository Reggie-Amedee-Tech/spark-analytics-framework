import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnalyticsDocument = HydratedDocument<Analytics>;

@Schema()
export class Analytics {
  @Prop()
  sparkUser: string;

  @Prop()
  isLoggedIn: boolean;

  @Prop()
  venue: string;

  @Prop()
  sparksSent: number;
}

export const AnalyticsSchema = SchemaFactory.createForClass(Analytics);
