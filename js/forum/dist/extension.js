System.register('ryanvade/flarum-ext-birthdays/main', ['flarum/extend', 'flarum/components/UserCard'], function (_export) {
  'use strict';

  var extend, UserCard;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsUserCard) {
      UserCard = _flarumComponentsUserCard['default'];
    }],
    execute: function () {

      app.initializers.add('ryanvade-flarum-ext-birthdays', function () {
        extend(UserCard.prototype, 'infoItems', function (items) {
          items.add('Birthday', m(
            'div',
            null,
            'BIRTHDAY %%USER_BIRTHDAY%%'
          ));
        });
      });
    }
  };
});