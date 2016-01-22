Package.describe({
  name: 'keycode:react-router-ssr',
  version: '1.3.0',
  summary: 'Server-side rendering for react-router and react-meteor-data rehydratating Meteor subscriptions',
  git: '',
  documentation: 'README.md'
});

Npm.depends({
  'cookie-parser': '1.3.5',
  'cheerio': '0.19.0',
  "react": "0.14.6",
  "react-dom": "0.14.6",
  "react-router": "2.0.0-rc5"
});

Package.onUse(function(api) {
  api.use("modules");

  api.use([
    'jsx@0.2.4',
    'minimongo@1.0.0',
    'react-meteor-data@0.2.5',
    'meteorhacks:fast-render@2.9.0',
    'meteorhacks:inject-data@1.4.0',
  ]);

  api.use('webapp@1.2.0', 'server');
  api.use('underscore@1.0.3', 'server');
  api.use('mongo@1.0.0', 'server');
  api.use('autopublish@1.0.0', 'server', {weak: true});

  api.use('nfl:react-helmet@2.2.0', 'server', {weak: true});
  api.use('promise@0.5.1', 'server', {weak: true});

  api.use('tmeasday:publish-counts@0.7.0', 'server', {weak: true});

  api.use(['routepolicy@1.0.5'], ['server']);

  api.add_files(['lib/react-router-ssr.js']);
  api.add_files(['lib/client.jsx'], 'client');
  api.add_files(['lib/server.jsx'], 'server');

  api.export('ReactRouterSSR');
});
