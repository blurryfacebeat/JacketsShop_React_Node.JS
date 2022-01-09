import { JacketService } from '@/services';

class JacketController {
  async getJackets(req, res) {
    try {
      const jackets = await JacketService.getJackets();
      res.json(jackets);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async createJacket(req, res) {
    try {
      const jacket = await JacketService.createJacket(req.body);
      res.json(jacket);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new JacketController();
