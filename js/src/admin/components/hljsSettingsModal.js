import SettingsModal from 'flarum/components/SettingsModal';

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
					m('option', {value: 'brown-paper'}, 'Brown Paper'),
					m('option', {value: 'codepen-embed'}, 'Codepen Embed'),
					m('option', {value: 'color-brewer'}, 'Color Brewer'),
					m('option', {value: 'darcula'}, 'Darcula'),
					m('option', {value: 'dark'}, 'Dark'),
					m('option', {value: 'docco'}, 'Docco'),
					m('option', {value: 'dracula'}, 'Dracula'),
					m('option', {value: 'far'}, 'Far'),
					m('option', {value: 'foundation'}, 'Foundation'),
					m('option', {value: 'github-gist'}, 'GitHub  Gist'),
					m('option', {value: 'github'}, 'GitHub'),
					m('option', {value: 'gml'}, 'Gml'),
					m('option', {value: 'googlecode'}, 'Googlecode'),
					m('option', {value: 'gradient-dark'}, 'Gradient Dark'),
					m('option', {value: 'gradient-light'}, 'Gradient Light'),
					m('option', {value: 'grayscale'}, 'Grayscale'),
					m('option', {value: 'gruvbox-dark'}, 'Gruvbox Dark'),
					m('option', {value: 'gruvbox-light'}, 'Gruvbox Light'),
					m('option', {value: 'hopscotch'}, 'Hopscotch'),
					m('option', {value: 'hybrid'}, 'Hybrid'),
					m('option', {value: 'idea'}, 'Idea'),
					m('option', {value: 'ir-black'}, 'Ir Black'),
					m('option', {value: 'isbl-editor-dark'}, 'Isbl Editor Dark'),
					m('option', {value: 'isbl-editor-light'}, 'Isbl Editor Light'),
					m('option', {value: 'kimbie.dark'}, 'Kimbie Dark'),
					m('option', {value: 'kimbie.light'}, 'Kimbie Light'),
					m('option', {value: 'lightfair'}, 'Lightfair'),
					m('option', {value: 'lioshi'}, 'Lioshi'),
					m('option', {value: 'magula'}, 'Magula'),
					m('option', {value: 'mono-blue'}, 'Mono Blue'),
					m('option', {value: 'monokai-sublime'}, 'Monokai Sublime'),
					m('option', {value: 'monokai'}, 'Monokai'),
					m('option', {value: 'night-owl'}, 'Night Owl'),
					m('option', {value: 'hopscotch'}, 'hopscotch'),
					m('option', {value: 'nnfx-dark'}, 'Nnfx Dark'),
					m('option', {value: 'nnfx'}, 'Nnfx'),
					m('option', {value: 'nord'}, 'Nord'),
					m('option', {value: 'obsidian'}, 'Obsidian'),
					m('option', {value: 'ocean'}, 'Ocean'),
					m('option', {value: 'paraiso-dark'}, 'Paraiso Dark'),
					m('option', {value: 'paraiso-light'}, 'Paraiso Light'),
					m('option', {value: 'pojoaque'}, 'Pojoaque'),
					m('option', {value: 'purebasic'}, 'Purebasic'),
					m('option', {value: 'qtcreator-dark'}, 'Qtcreator Dark'),
					m('option', {value: 'qtcreator-light'}, 'Qtcreator Light'),
					m('option', {value: 'railscasts'}, 'Railscasts'),
					m('option', {value: 'rainbow'}, 'Rainbow'),
					m('option', {value: 'routeros'}, 'Routeros'),
					m('option', {value: 'school-book'}, 'School Book'),
					m('option', {value: 'shades-of-purple'}, 'Shades Of Purple'),
					m('option', {value: 'solarized-dark'}, 'Solarized Dark'),
					m('option', {value: 'solarized-light'}, 'Solarized Light'),
					m('option', {value: 'srcery'}, 'Srcery'),
					m('option', {value: 'sunburst'}, 'Sunburst'),
					m('option', {value: 'tomorrow-night-blue'}, 'Tomorrow Night Blue'),
					m('option', {value: 'tomorrow-night-bright'}, 'Tomorrow Night Bright'),
					m('option', {value: 'tomorrow-night-eighties'}, 'Tomorrow Night Eighties'),
					m('option', {value: 'tomorrow-night'}, 'Tomorrow Night'),
					m('option', {value: 'tomorrow'}, 'Tomorrow'),	
					m('option', {value: 'vs'}, 'Vs'),
					m('option', {value: 'vs2015'}, 'Vs 2015'),
					m('option', {value: 'xcode'}, 'Xcode'),
					m('option', {value: 'xt256'}, 'Xt 256'),
					m('option', {value: 'zenburn'}, 'Zenburn')
				]),
				m('hr'), m('div', [
					m('p[style = display: inline;]', app.translator.trans('therealsujitk.admin.about.stringA')), m('a', { href: 'https://therealsuji.tk', target: '_blank' }, '@therealsujitk'), 
					m('br'),
					m('p[style = display: inline;]', app.translator.trans('therealsujitk.admin.about.stringB')), m('a', { href: 'https://therealsuji.tk/donate', target: '_blank' }, 'PayPal')
				])
			])
    	];
	}
}
