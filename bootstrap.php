<?php Namespace Ryanvade\LoginRedirect;

use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
$events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
    if ($event->isForum()) {
        $birthday = $event->view->getActor()->birthday;
        $str = implode("", file(__DIR__ . '/js/forum/dist/extension.js'));
        $fp = fopen(__DIR__.'/js/forum/dist/extension.js','w');
        $str=str_replace('%%USER_BIRTHDAY%%', $birthday, $str);
        fwrite($fp,$str,strlen($str));
        $event->addAssets(__DIR__.'/js/forum/dist/extension.js');
        $event->addBootstrapper('ryanvade/flarum-ext-birthdays/main');
    }
});
};
