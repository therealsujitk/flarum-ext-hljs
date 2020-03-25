import {extend} from 'flarum/extend';
import app from 'flarum/app';

import CommentPost from 'flarum/components/CommentPost';

function hljsDefaults(theme) {
	var background, color;

	switch(theme){
		case 'a11y-dark':
			background = '#2b2b2b';
			color = '#f8f8f2';
			break;
		case 'a11y-light':
			background = '#fefefe';
			color = '#545454';
			break;
		case 'agate':
			background = '#333';
			color = 'white';
			break;
		case 'an-old-hope':
			background = '#1C1D21';
			color = '#c0c5ce';
			break;
		case 'androidstudio':
			background = '#282b2e';
			color = '#a9b7c6';
			break;
		case 'arduino-light':
			background = '#FFFFFF';
			color = 'black';
			break;
		case 'arta':
			background = '#222';
			color = 'black';
			break;
		case 'ascetic':
			background = 'white';
			color = 'black';
			break;
		default:
			background = '#F0F0F0';
			color = 'black';
	}

	var x = document.getElementsByTagName('pre');
		for(var i=0; i<x.length; ++i)
			x[i].style = 'background: ' + background + '; color: ' + color + ';';
}

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
						document.querySelectorAll("link[href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/default.min.css']")[0].href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/' + theme + '.min.css';
					hljsDefaults(theme);
				}
			})
		)
	});
});
