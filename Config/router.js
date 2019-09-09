const app = require('./app');

const routerProduct = require('../Routes/Product');
const routerAuthUser = require('../Routes/AuthUser');
const routerUser = require('../Routes/User');

const routerAuthAdmin = require('../Routes/AuthAdmin');
const routerAdmin = require('../Routes/Admin');

const apiPrefix = '/api/v1';


app.use(`${apiPrefix}/product`, routerProduct);

//user auth
app.use(`${apiPrefix}/authUser`, routerAuthUser);

//user perform the function
app.use(`${apiPrefix}/user`, routerUser);

//admin auth
app.use(`${apiPrefix}/authAdmin`, routerAuthAdmin);

//admin perform the function
app.use(`${apiPrefix}/admin`, routerAdmin);

