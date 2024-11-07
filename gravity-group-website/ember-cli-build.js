'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');
  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css.map');
  app.import('node_modules/bootstrap-icons/font/bootstrap-icons.min.css');
  app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
  app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');

  var bootstrapFonts = new Funnel('node_modules/bootstrap-icons/font', {
    srcDir: '/',
    destDir: 'assets',
  });

  var merged = mergeTrees([bootstrapFonts], {
    overwrite: true,
  });

  return app.toTree(merged);
};
