const app = require('./app.js');

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
