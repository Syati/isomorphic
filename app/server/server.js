import Express from 'express';
import setup from './setup';
import settings from './settings';

const app = new Express();

setup(app);

app.listen(settings.port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Listening on port ${settings.port}. Open up http://localhost:${settings.port}/ in your browser.`)
  }
});
