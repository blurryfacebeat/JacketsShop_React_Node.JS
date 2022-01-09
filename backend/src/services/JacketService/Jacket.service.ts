import { JacketModel } from '@/models';
import { IJacketModel } from '@/models/JacketModel/Jacket.types';

class JacketService {
  async getJackets() {
    const jackets = await JacketModel.find();
    return jackets;
  }

  async createJacket(jacketInfo: IJacketModel) {
    const jacket = await JacketModel.create(jacketInfo);
    return jacket;
  }
}

export default new JacketService();
