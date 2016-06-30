<?php Namespace Ryanvade\LoginRedirect;

use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
$events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
    if ($event->isForum()) {
        $email = $event->view->getActor()->email;
        $event->addAssets(__DIR__.'/js/forum/dist/extension.js');
        $rawJs = file_get_contents(realpath(__DIR__ . '/../../js/main.js'));
        $js = str_replace('%%USER_BIRTHDAY%%',  "06/30/2016", $rawJs);
        $event->addBootstrapper('ryanvade/flarum-ext-birthdays/main');
    }
});
};
