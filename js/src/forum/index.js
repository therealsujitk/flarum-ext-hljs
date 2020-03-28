import {extend} from 'flarum/extend';
import app from 'flarum/app';

import CommentPost from 'flarum/components/CommentPost';
import {hljsDefaults} from './helpers/hljsDefaults'

app.initializers.add('therealsujitk/flarum-ext-hljs', () => {
	extend(CommentPost.prototype, 'headerItems', function (items) {
		items.add('therealsujitk-hljs',
			m('null', {
				id: 'therealsujitk-hljs',
				config: () => {
					var hljsTheme = app.forum.attribute('therealsujitk-hljs.theme_name');

					if(hljsTheme === null)
						hljsTheme = 'default';

					if(typeof document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/']")[0] != 'undefined')
						document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/']")[0].href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/' + hljsTheme + '.min.css';
					else if(typeof document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/']")[0] != 'undefined')
						document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/']")[0].href = '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/' + hljsTheme + '.min.css';

					hljsDefaults(hljsTheme);
				}
			})
		)
	});
});
