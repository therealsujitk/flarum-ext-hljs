import {extend} from 'flarum/extend';
import app from 'flarum/app';

import Composer from 'flarum/components/Composer';
import {hljsDefaults} from './helpers/hljsDefaults'

app.initializers.add('therealsujitk/flarum-ext-hljs', () => {
	extend(Composer.prototype, 'controlItems', function (items) {
		items.add('therealsujitk-hljs',
			m('null', {
				id: 'therealsujitk-hljs',
				config: () => {
					var hljsTheme = app.forum.attribute('therealsujitk-hljs.theme_name');
					var hljsLink = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/' + hljsTheme + '.min.css';

					if(hljsTheme === null)
						hljsTheme = 'default';

					if(typeof document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/']")[0] != 'undefined')
						document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/']")[0].href = hljsLink;

					if(typeof document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/']")[0] != 'undefined')
						document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/']")[0].href = hljsLink;

					hljsDefaults(hljsTheme);
				}
			})
		)
	});
});
