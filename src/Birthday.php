<?php

namespace Ryanvade\Birthdays;
use Flarum\Core\User;
use Flarum\Database\AbstractModel;

class Birthday extends AbstractModel
{
  protected $table = 'users';

  protected $column = 'birthday';

  public static function boot()
  {
    partent::boot();

    // nothing to delete at this time
  }

  public static build(User $user, $date)
  {
    $birthday = new static;
    $birthday->date = $date;
    $birthday->user = $user;

    return $birthday;
  }
}
