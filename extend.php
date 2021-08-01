<?php

/*
 * This file is part of therealsujitk/flarum-ext-hljs.
 *
 * Copyright (c) 2021 Sujit Kumar.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Therealsujitk\Hljs;

use Flarum\Extend;
use Flarum\Settings\SettingsRepositoryInterface;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('therealsujitk-hljs.theme_name', function ($serializer, $model) {
            $settings = resolve(SettingsRepositoryInterface::class);
            return $settings->get('therealsujitk-hljs.theme_name');
        })
];
