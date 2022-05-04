import chokidar from 'chokidar';

const dirs = ['Z:/'];

const initialize = async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const watcher = chokidar.watch(dirs[0], {
      ignored: /(^|[/\\])\../, // ignore dotfiles
      persistent: true,
    });

    // Something to use when events are received.
    const log = console.log.bind(console);
    // Add event listeners.
    watcher
      .on('ready', () => resolve())
    //   .on('add', (path) => log(`File ${path} has been added`))
    //   .on('change', (path) => log(`File ${path} has been changed`))
    //   .on('unlink', (path) => log(`File ${path} has been removed`))
      .on('raw', (event, path, details) => {
        // internal
        log('Raw event info:', event, path, details);
      });
  });
};

export { initialize };

// More possible events.
// watcher
//   .on('addDir', (path) => log(`Directory ${path} has been added`))
//   .on('unlinkDir', (path) => log(`Directory ${path} has been removed`))
//   .on('error', (error) => log(`Watcher error: ${error}`))
//   .on('ready', () => log('Initial scan complete. Ready for changes'))
//   .on('raw', (event, path, details) => {
//     // internal
//     log('Raw event info:', event, path, details);
//   });
