import {extend} from 'flarum/extend';
import app from 'flarum/app';

import CommentPost from 'flarum/components/CommentPost';
import {hljsDefaults} from './helpers/hljsDefaults'

var flag = 1;

app.initializers.add('therealsujitk/flarum-ext-hljs', () => {
	extend(CommentPost.prototype, 'headerItems', function (items) {
		items.add('therealsujitk-hljs',
			m('null', {
				id: 'therealsujitk-hljs',
				config: () => {
					var hljsTheme = app.forum.attribute('therealsujitk-hljs.theme_name');

					if(hljsTheme === null)
						hljsTheme = 'default';

					if (typeof(Worker) != "undefined" && flag) {
						var workerURL = app.forum.attribute('baseUrl') + '/assets/extensions/therealsujitk-hljs/hljsWorker.js';
						var w = new Worker(workerURL);
						w.onmessage = function(event){
							if(typeof document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/']")[0] != 'undefined') {
								document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/']")[0].href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/' + hljsTheme + '.min.css';
								flag = 0;
							}
							else if(typeof document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/']")[0] != 'undefined') {
								document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/']")[0].href = '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/' + hljsTheme + '.min.css';
								flag = 0;
							}
							w.terminate();
						};
					}
					
					if(flag) {
						if(typeof document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/']")[0] != 'undefined') {
							document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/']")[0].href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/' + hljsTheme + '.min.css';
							flag = 0;
						}
						else if(typeof document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/']")[0] != 'undefined') {
							document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/']")[0].href = '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/' + hljsTheme + '.min.css';
							flag = 0;
						}
					}

					hljsDefaults(hljsTheme);
				}
			})
		)
	});
});
