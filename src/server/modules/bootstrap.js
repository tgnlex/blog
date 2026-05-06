import express from 'express';


class Application {
  config = {};
  server = {};
  
  constructor(config, modules = {}) {
    this.server = express();
    this.config = config;
  }
  bootstrap() {
    const { plugins, globals } = this.config;
    this.server.disable('x-powered-by');
    plugins.forEach((plug) => { this.server.use(plug) });
    globals.forEach((global) => { this.server.set(global.key, global.value)});
  }

  version() { return this.server.get('app.version')};
  name() { return this.server.get('app.name')};
  host() { return this.server.get('app.host')};
  port() { return this.server.get('app.port')};
  env() { return this.server.get('app.env') };
}


export default Application;
