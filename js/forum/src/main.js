import { extend } from 'flarum/extend';
import UserCard from 'flarum/components/UserCard'
import SettingsPage from 'flarum/components/SettingsPage'

app.initializers.add('ryanvade-flarum-ext-birthdays', function() {
  console.log("Inside of main.js for flarum-ext-birthdays");
  extend(UserCard.prototype, 'infoItems', function(items){
    items.add('Birthday', <div>Birthday %%USER_BIRTHDAY%%</div>);
  });

  extend(SettingsPage.prototype, 'accountItems', function(items){
    items.add('Birthday', <button class="Button" type="button"><span class="Button-label">Change Birthday</span></button> )
  });
});
