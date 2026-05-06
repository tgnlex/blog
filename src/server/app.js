import Application from './modules/bootstrap.js';
import config from './config/index.js';
import router from './routes/index.js';
import engine from './config/engine.js';
/*** APP-INIT ***/
const app = new Application(config, { logger: console });
/*** BOOTSTRAP ***/
app.bootstrap();
engine(app.server);
/*** ROUTING ***/
app.server.use(router);

export default app;
