import { Router } from 'express';

const router = Router();

router.get('/', (rep, resp) => {
  resp.send({
    message: 'Hello world',
  });
});

router.get('/status', (req, resp) => {
  resp.send({
    message: 'Ok',
  });
});

export default router;
