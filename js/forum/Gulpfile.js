var flarum = require('flarum-gulp');

flarum({
  modules: {
    'ryanvade/flarum-ext-birthdays': [
      'src/**/*.js'
    ]
  }
});
