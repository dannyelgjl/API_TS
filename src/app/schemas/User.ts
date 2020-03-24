import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document {
  nome?: string;
  idade:? number;
  email:? string;
}

const UserSchema = new Schema(
  {
    nome: String,
    idade: Number,
    email: String
  },
  {
    timestamps: true
  }
);

export default model<UserInterface>('User', UserSchema);
