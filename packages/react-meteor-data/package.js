Package.describe({
  name: "keycode:react-meteor-data",
  summary: "React mixin for reactively tracking Meteor data",
  version: '0.2.5',
  documentation: 'README.md',
  git: ''
});

Npm.depends({
  "react": "0.14.6",
  "react-dom": "0.14.6",
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2');
  api.use('tracker');
  api.use('jsx@0.2.4');

  api.export(['ReactMeteorData']);

  api.addFiles('meteor-data-mixin.jsx');
});

Package.onTest(function (api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('keycode:react-meteor-data');
  api.use('jsx@0.2.4');
  api.use('reactive-var');
  api.use('underscore');
  api.use('tracker');
  api.use('mongo');

  api.addFiles('mixin-tests-server.jsx', 'server');
  api.addFiles('mixin-tests.jsx', 'client');
});
