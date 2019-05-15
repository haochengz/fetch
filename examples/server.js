
const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config');

const app = express();
const router = express.Router();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

registerSimpleRouter(router);

app.use(router);

const port = process.env.PORT || 8181;
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl-C to stop`);
});

function registerSimpleRouter(router) {
  router.get('/simple/get', function (_, res) {
    res.json({
      msg: 'Simple reguest'
    });
  });
}
