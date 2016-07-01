System.register('ryanvade/flarum-ext-birthdays/main', ['flarum/extend', 'flarum/components/UserCard', 'flarum/components/SettingsPage'], function (_export) {
  'use strict';

  var extend, UserCard, SettingsPage;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsUserCard) {
      UserCard = _flarumComponentsUserCard['default'];
    }, function (_flarumComponentsSettingsPage) {
      SettingsPage = _flarumComponentsSettingsPage['default'];
    }],
    execute: function () {

      app.initializers.add('ryanvade-flarum-ext-birthdays', function () {
        console.log("Inside of main.js for flarum-ext-birthdays");
        extend(UserCard.prototype, 'infoItems', function (items) {
          items.add('Birthday', m(
            'div',
            null,
            'Birthday 0000-00-00'
          ));
        });

        extend(SettingsPage.prototype, 'accountItems', function (items) {
          items.add('Birthday', m(
            'button',
            { 'class': 'Button', type: 'button' },
            m(
              'span',
              { 'class': 'Button-label' },
              'Change Birthday'
            )
          ));
        });
      });
    }
  };
});