System.register('ryanvade/flarum-ext-birthdays/components/ChangeBirthdayModal', ['flarum/components/Modal', 'flarum/components/Button'], function (_export) {
  'use strict';

  var Modal, Button, ChangeBirthdayModal;
  return {
    setters: [function (_flarumComponentsModal) {
      Modal = _flarumComponentsModal['default'];
    }, function (_flarumComponentsButton) {
      Button = _flarumComponentsButton['default'];
    }],
    execute: function () {
      ChangeBirthdayModal = (function (_Modal) {
        babelHelpers.inherits(ChangeBirthdayModal, _Modal);

        function ChangeBirthdayModal() {
          babelHelpers.classCallCheck(this, ChangeBirthdayModal);
          babelHelpers.get(Object.getPrototypeOf(ChangeBirthdayModal.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(ChangeBirthdayModal, [{
          key: 'init',
          value: function init() {
            babelHelpers.get(Object.getPrototypeOf(ChangeBirthdayModal.prototype), 'init', this).call(this);
            this.success = false;
            this.birthday = m.prop(app.session.user.birthday());
          }
        }, {
          key: 'className',
          value: function className() {
            return 'ChangeBirthdayModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return "Change your Birthday";
          }
        }, {
          key: 'content',
          value: function content() {
            if (this.success) {
              return m(
                'div',
                { className: 'Modal-body' },
                m(
                  'div',
                  { className: 'Form Form--centered' },
                  m(
                    'p',
                    { className: 'helpText' },
                    '"Change your birthday"'
                  ),
                  m(
                    'div',
                    { className: 'Form-group' },
                    m(
                      Button,
                      { className: 'Button Button--primary Button--block', onclick: this.hide.bind(this) },
                      'Commit'
                    )
                  )
                )
              );
            }

            return m(
              'div',
              { className: 'Modal-body' },
              m(
                'div',
                { className: 'Form Form--centered' },
                m(
                  'div',
                  { className: 'Form-group' },
                  m('input', { type: 'date', name: 'date', className: 'FormControl',
                    placeholder: app.session.user.birthday(),
                    value: this.birthday(),
                    onchange: m.withAttr('value', this.birthday),
                    disabled: this.loading })
                ),
                m(
                  'div',
                  { className: 'Form-group' },
                  Button.component({
                    className: 'Button Button--primary Button--block',
                    type: 'submit',
                    loading: this.loading,
                    children: "Change Birthday"
                  })
                )
              )
            );
          }
        }, {
          key: 'onsubmit',
          value: function onsubmit(e) {
            var _this = this;

            e.preventDefault();
            if (this.birthday() === app.session.user.birthday()) {
              this.hide();
              return;
            }

            this.loading = true;

            app.session.user.save({ birthday: this.birthday() }, { errorHandler: this.onerror.bind(this) }).then(function () {
              return _this.success = true;
            })['finally'](this.loaded.bind(this));
          }
        }]);
        return ChangeBirthdayModal;
      })(Modal);

      _export('default', ChangeBirthdayModal);
    }
  };
});;
System.register('ryanvade/flarum-ext-birthdays/main', ['flarum/extend', 'flarum/components/UserCard', 'flarum/components/SettingsPage', 'flarum/components/Button', 'ryanvade/flarum-ext-birthdays/components/ChangeBirthdayModal'], function (_export) {
  'use strict';

  var extend, UserCard, SettingsPage, Button, ChangeBirthdayModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsUserCard) {
      UserCard = _flarumComponentsUserCard['default'];
    }, function (_flarumComponentsSettingsPage) {
      SettingsPage = _flarumComponentsSettingsPage['default'];
    }, function (_flarumComponentsButton) {
      Button = _flarumComponentsButton['default'];
    }, function (_ryanvadeFlarumExtBirthdaysComponentsChangeBirthdayModal) {
      ChangeBirthdayModal = _ryanvadeFlarumExtBirthdaysComponentsChangeBirthdayModal['default'];
    }],
    execute: function () {

      app.initializers.add('ryanvade-flarum-ext-birthdays', function () {
        console.log("Inside of main.js for flarum-ext-birthdays");
        extend(UserCard.prototype, 'infoItems', function (items) {
          items.add('Birthday', m(
            'div',
            null,
            'Birthday %%USER_BIRTHDAY%%'
          ));
        });

        extend(SettingsPage.prototype, 'accountItems', function (items) {
          //items.add('Birthday', <button class="Button" type="button"><span class="Button-label">Change Birthday</span></button> )
          console.log("extending the Settings Page");
          items.add('changeBirthday', Button.component({
            children: 'ChangeBirthday',
            className: 'Button',
            onclick: function onclick() {
              return app.modal.show(new ChangeBirthdayModal());
            }
          }));
        });
      });
    }
  };
});