import app from './server/app.js';
import information from './server/modules/info.js';
const PORT = 4000;

function main() {
  app.server.listen(app.port(), (err) => {
    if (err) { console.error(err)}
    information(app);
    console.info(`[INFO]: Server listening on port ${app.port()}`)

  })
}

main();
