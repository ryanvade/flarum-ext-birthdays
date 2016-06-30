import { extend } from 'flarum/extend';
import UserCard from 'flarum/components/UserCard'

app.initializers.add('ryanvade-flarum-ext-birthdays', function() {
  extend(UserCard.prototype, 'infoItems', function(items){
    items.add('Birthday', <div>BIRTHDAY %%USER_BIRTHDAY%%</div>);
  });
});
