import nunjucks from 'nunjucks';

function engine(application) {
  nunjucks.configure('src/views', {
    autoescape: true,
    express: application
  });
  return nunjucks;
};

export default engine;
