import * as mongoose from 'mongoose';
import { IJacketModel } from './Jacket.types';

const JacketModel = new mongoose.Schema<IJacketModel>({
  name: { type: String, required: true },
  brandName: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export default mongoose.model('Jacket', JacketModel);
