const app = require('./app');
const routerProduct = require('../Routes/Product');

const apiPrefix = '/api/v1';

app.use(`${apiPrefix}/products`, routerProduct);

