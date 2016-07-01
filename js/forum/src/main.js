import { extend } from 'flarum/extend';
import UserCard from 'flarum/components/UserCard';
import SettingsPage from 'flarum/components/SettingsPage';
import Button from 'flarum/components/Button';
import ChangeBirthdayModal from 'ryanvade/flarum-ext-birthdays/components/ChangeBirthdayModal';

app.initializers.add('ryanvade-flarum-ext-birthdays', function() {
  console.log("Inside of main.js for flarum-ext-birthdays");
  extend(UserCard.prototype, 'infoItems', function(items){
    items.add('Birthday', <div>Birthday %%USER_BIRTHDAY%%</div>);
  });

  extend(SettingsPage.prototype, 'accountItems', function(items){
    //items.add('Birthday', <button class="Button" type="button"><span class="Button-label">Change Birthday</span></button> )
    console.log("extending the Settings Page");
    items.add('changeBirthday',
      Button.component({
        children: 'ChangeBirthday',
        className: 'Button',
        onclick: () => app.modal.show(new ChangeBirthdayModal())
      })
    );
  });
});
