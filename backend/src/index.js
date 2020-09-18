const app = require('./app');
require('./db/database');

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});