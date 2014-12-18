Package.describe({
  name: 'johnantoni:meteor-font-awesome',
  summary: 'Font-Awesome ~ The iconic font and CSS toolkit',
  version: '4.2.0',
  git: ' /* Fill me in! */ '
});

Package.on_use(function(api) {
  api.add_files([
    'vendor/css/font-awesome.css',
  ], ['client']);
});
