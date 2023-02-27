import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({require:true})
  user_id: string;

  @Prop()
  name: string;

  @Prop()
  born_year: string;

  @Prop()
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);