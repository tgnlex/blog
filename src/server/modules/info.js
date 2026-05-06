import { seperator, kv } from '../utils/console.js';

function information(app) {
  seperator();
  kv('Host', app.host())
  kv('Port', app.port())
  kv('Env', app.env())
  kv('Version', app.version())
  seperator();
};

export default information;
