require('dotenv').config();
const queryRouter = require('./src/query-router')
const Application = require("./framework/Application");
const PORT = process.env.PORT || 5000;
const sendJson = require('./framework/sendJson');
const sendStatus = require('./framework/sendStatus');
const parseUrl = require('./framework/parseUrl');
const app = new Application();


app.use(sendJson);
app.use(sendStatus);
app.use(parseUrl('http://localhost:5000'));
app.addRouter(queryRouter);


app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

