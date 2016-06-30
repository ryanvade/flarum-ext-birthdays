<?php Namespace Ryanvade\LoginRedirect;

use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
$events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
    if ($event->isForum()) {
        $event->addAssets(__DIR__.'/js/forum/dist/extension.js');
        $event->addBootstrapper('ryanvade/flarum-ext-birthdays/main');
    }
});
};
