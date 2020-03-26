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
					m('option', {value: 'ascetic'}, 'Ascetic'),
					m('option', {value: 'atelier-cave-dark'}, 'Atelier Cave Dark'),
					m('option', {value: 'atelier-cave-light'}, 'Atelier Cave Light'),
					m('option', {value: 'atelier-dune-dark'}, 'Atelier Dune Dark'),
					m('option', {value: 'atelier-dune-light'}, 'AAtelier Dune Light'),
					m('option', {value: 'atelier-estuary-dark'}, 'Atelier Estuary Dark'),
					m('option', {value: 'atelier-estuary-light'}, 'Atelier Estuary Light'),
					m('option', {value: 'atelier-forest-dark'}, 'Atelier Forest Dark'),
					m('option', {value: 'atelier-forest-light'}, 'Atelier Forest Light'),
					m('option', {value: 'atelier-heath-dark'}, 'Atelier Heath Dark'),
					m('option', {value: 'atelier-heath-light'}, 'Atelier Heath Light'),
					m('option', {value: 'atelier-lakeside-dark'}, 'Atelier Lakeside Dark'),
					m('option', {value: 'atelier-lakeside-light'}, 'Atelier Lakeside Light'),
					m('option', {value: 'atelier-plateau-dark'}, 'Atelier Plateau Dark'),
					m('option', {value: 'atelier-plateau-light'}, 'Atelier Plateau Light'),
					m('option', {value: 'atelier-savanna-dark'}, 'Atelier Savanna Dark'),
					m('option', {value: 'atelier-savanna-light'}, 'Atelier Savanna Light'),
					m('option', {value: 'atelier-seaside-dark'}, 'Atelier Seaside Dark'),
					m('option', {value: 'atelier-seaside-light'}, 'Atelier Seaside Light'),
					m('option', {value: 'atelier-sulphurpool-dark'}, 'Atelier Sulphurpool Dark'),
					m('option', {value: 'atelier-sulphurpool-light'}, 'Atelier Sulphurpool Light'),
					m('option', {value: 'atom-one-dark-reasonable'}, 'Atom One Dark Reasonable'),
					m('option', {value: 'atom-one-dark'}, 'Atom One Dark'),
					m('option', {value: 'atom-one-light'}, 'Atom One Light'),
					
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
