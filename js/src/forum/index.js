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
					var theme = app.forum.attribute('therealsujitk-hljs.theme_name');
					if(theme === null)
						theme = 'default';
					if(typeof document.querySelectorAll("link[href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/default.min.css']")[0] != 'undefined')
						document.querySelectorAll("link[href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/default.min.css']")[0].href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/' + theme + '.min.css';
					if(typeof document.querySelectorAll("link[href='https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/github-gist.min.css']")[0] != 'undefined')
						document.querySelectorAll("link[href='https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/github-gist.min.css']")[0].href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/' + theme + '.min.css';
					hljsDefaults(theme);
				}
			})
		)
	});
});
