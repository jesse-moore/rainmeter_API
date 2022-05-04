import express from 'express';
import { Request, Response } from 'express';
import { readFileSync } from 'fs';
import { Status } from '../../sqlite/models';
import * as rclone from '../../lib/rclone';

const testRouter = express.Router();

testRouter.get('/ping', (_req: Request, res: Response) => {
  res.status(200).send({ ping: 'pong' });
});

testRouter.get('/version', (_req: Request, res: Response) => {
  const pkg: { version: string } = JSON.parse(
    readFileSync(process.cwd() + '/package.json', 'utf-8'),
  );
  return res.send({ version: pkg.version });
});

testRouter.post('/status', async (_req: Request, res: Response) => {
  const status = await Status.create({
    name: 'Test',
    status: 'Running',
    launchTime: new Date(),
  });
  res.json(status).end();
});

testRouter.post('/rclone', async (_req: Request, res: Response) => {
  await rclone.check();
  res.send('OK').end();
});

testRouter.get('/test', async (_req: Request, res: Response) => {
  console.log('HIT: ' + new Date());
  const result = [{ name: 'Server 1' }, { name: 'Server 2' }];
  res.json(result).end();
});

export default testRouter;
