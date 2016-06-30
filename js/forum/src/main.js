import { extend } from 'flarum/extend';
import UserCard from 'flarum/components/UserCard'

app.initializers.add('ryanvade-flarum-ext-birthdays', function() {
  console.log("Inside of main.js for flarum-ext-birthdays");
  extend(UserCard.prototype, 'infoItems', function(items){
    items.add('Birthday', <div>BIRTHDAY %%USER_BIRTHDAY%%</div>);
  });
});
