Package.describe({
  name: 'johnantoni:meteor-font-awesome',
  summary: 'Font-Awesome ~ The iconic font and CSS toolkit',
  version: '4.2.1',
  git: 'https://github.com/johnantoni/meteor-font-awesome.git'
});

Package.on_use(function(api) {
  api.add_files([
    'vendor/css/font-awesome.css',
  ], ['client']);
});
