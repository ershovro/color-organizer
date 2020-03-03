import ignoreStyles from 'ignore-styles';
import app from './app.js';

app.set('port', process.env.PORT || 8080)
   .listen(
      app.get('port'),
      () => console.log(`application running at 'http://localhost:${app.get('port')}'`)
   );