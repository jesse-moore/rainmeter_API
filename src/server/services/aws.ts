import { exec } from 'child_process';
import dayjs from 'dayjs';

export const ec2Status = (): Promise<string | void> => {
  const base = 'aws ec2 describe-instances';
  const query =
    '--query "Reservations[*].Instances[*].{Status:State.Name,Name:Tags[?Key==\'Name\']|[0].Value,LaunchTime:LaunchTime}"';
  return new Promise((resolve, reject) => {
    exec(`${base} ${query} --output json`, (error, stdout, stderr) => {
      if (error) {
        resolve();
      }
      if (stderr) {
        resolve();
      }
      try {
        const json = JSON.parse(stdout);
        const result = json.map(([instance]) => {
          let uptime = 0;
          if (instance.Status === 'running') {
            const date1 = dayjs(instance.LaunchTime);
            uptime = dayjs().diff(date1, 'hours');
          }
          return { ...instance, uptime };
        });
        resolve(result);
      } catch (error) {
        resolve();
      }
    });
  });
};
