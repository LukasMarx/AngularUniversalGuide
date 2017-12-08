// Angular requires Zone.js
require('zone.js/dist/zone-node');

const express = require('express');
const ngExpressEngine = require('@nguniversal/express-engine').ngExpressEngine;

const { ServerAppModuleNgFactory, LAZY_MODULE_MAP } = require('./dist-server/main.bundle');

const app = express();

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const provider = provideModuleMap(LAZY_MODULE_MAP);

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: ServerAppModuleNgFactory,
    providers: [provider]
  })
);

app.set('view engine', 'html');
app.set('views', __dirname);

app.use(express.static(__dirname + '/assets', { index: false }));
app.use(express.static(__dirname + '/dist', { index: false }));

app.get('/*', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  res.render('./dist/index', {
    req: req,
    res: res
  });
  console.timeEnd(`GET: ${req.originalUrl}`);
});

app.listen(process.env.PORT || 8080, () => {});
