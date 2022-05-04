import { exec } from 'child_process';

export const check = async (): Promise<string | void> => {
  const base = 'rclone check Z:\\ "Backblaze B2:Backup-1f9c51ff"';
  const query =
    '--filter-from Z:\\.rcloneIgnore --one-way --size-only --fast-list --combined temp\\rcloneout';
  return new Promise((resolve, reject) => {
    exec(`${base} ${query}`, (error, stdout, stderr) => {
      if (error) {
        // console.log("ERROR: " + error);
        // resolve();
      }
      if (stderr) {
        // console.log("STDERR: " + stderr);
        resolve();
      }
      try {
        console.log("CHECK DONE");
        resolve();
      } catch (error) {
        resolve();
      }
    });
  });
};
