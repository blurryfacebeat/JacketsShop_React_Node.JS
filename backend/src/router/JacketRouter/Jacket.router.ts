import { Router } from 'express';
import { JacketController } from '@/controllers';

// @ts-ignore
const JacketRouter = new Router();

JacketRouter.post('/', JacketController.createJacket);
JacketRouter.get('/jackets', JacketController.getJackets);

export default JacketRouter;
