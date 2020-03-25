import SettingsModal from 'flarum/components/SettingsModal';
import Select from 'flarum/components/Select';

export default class hljsSettingsModal extends SettingsModal {
	className() {
		return 'Modal--small';
	}

	title() {
		return app.translator.trans('therealsujitk.admin.hljs.title');
	}

	form() {
		return [
			m('div[class = Form-group]', [
				m('label', app.translator.trans('therealsujitk.admin.hljs.themename')),
				m('select[style = width: 100%; margin-bottom: 5px;]', {
					bidi: this.setting('therealsujitk-hljs.theme_name')
				}, [
					m('option', {value: 'default', selected: true}, 'Default'),
					m('option', {value: 'a11y-dark'}, 'A 11 Y Dark'),
					m('option', {value: 'a11y-light'}, 'A 11 Y Light'),
					m('option', {value: 'agate'}, 'Agate'),
					m('option', {value: 'an-old-hope'}, 'An Old Hope'),
					m('option', {value: 'androidstudio'}, 'Androidstudio'),
					m('option', {value: 'arduino-light'}, 'Arduino Light'),
					m('option', {value: 'arta'}, 'Arta'),
					m('option', {value: 'ascetic'}, 'Ascetic')
				]),
				m('hr'), m('div', [
					m('p[style = display: inline;]', app.translator.trans('therealsujitk.admin.about.stringA')), m('a', { href: 'https://github.com/therealsujitk', target: '_blank' }, '@therealsujitk'), 
					m('br'),
					m('p[style = display: inline;]', app.translator.trans('therealsujitk.admin.about.stringB')), m('a', { href: 'https://paypal.me/suchitrakumar', target: '_blank' }, 'PayPal')
				])
			])
    	];
	}
}
