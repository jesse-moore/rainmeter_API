import express, { Request, Response } from 'express';
import { ec2Status } from '../services/aws';

const awsStatus = express.Router();

awsStatus.route('/ec2status').get(async (req: Request, res: Response) => {
  const status = await ec2Status();
  return res.send(status);
});

export default awsStatus;
