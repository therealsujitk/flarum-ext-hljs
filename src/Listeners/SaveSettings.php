<?php

namespace Therealsujitk\Hljs\Listeners;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\Api\Event\Serializing;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class SaveSettings {
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings) {
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events) {
        $events->listen(Serializing::class, [$this, 'addAttributes']);
    }

    public function addAttributes(Serializing $event) {
        $event->attributes['therealsujitk-hljs.theme_name'] = $this->settings->get('therealsujitk-hljs.theme_name');
    }
}
