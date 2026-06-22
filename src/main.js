import app from './server/app.js';
import information from './server/modules/info.js';
import { panic } from './server/utils/panic.js';

const URL = `${app.protocol()}://${app.host()}:${app.port()}`

function main() {
  app.server.listen(app.port(), (err) => {
    if (err) { panic(err.message) }
    information(app);
    console.info(`[INFO]: Server listening on ${URL}`)
  })
}

main();
