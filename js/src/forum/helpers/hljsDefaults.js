export function hljsDefaults(theme) {
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
		case 'atelier-cave-dark':
			background = '#19171c';
			color = '#8b8792';
			break;
		case 'atelier-cave-light':
			background = '#efecf4';
			color = '#585260';
			break;
		case 'atelier-dune-dark':
			background = '#20201d';
			color = '#a6a28c';
			break;
		case 'atelier-dune-light':
			background = '#fefbec';
			color = '#6e6b5e';
			break;
		case 'atelier-estuary-dark':
			background = '#22221b';
			color = '#929181';
			break;
		case 'atelier-estuary-light':
			background = '#f4f3ec';
			color = '#5f5e4e';
			break;
		case 'atelier-forest-dark':
			background = '#1b1918';
			color = '#a8a19f';
			break;
		case 'atelier-forest-light':
			background = '#f1efee';
			color = '#68615e';
			break;
		case 'atelier-heath-dark':
			background = '#1b181b';
			color = '#ab9bab';
			break;
		case 'atelier-heath-light':
			background = '#f7f3f7';
			color = '#695d69';
			break;
		case 'atelier-lakeside-dark':
			background = '#161b1d';
			color = '#7ea2b4';
			break;
		case 'atelier-lakeside-light':
			background = '#ebf8ff';
			color = '#516d7b';
			break;
		case 'atelier-plateau-dark':
			background = '#1b1818';
			color = '#8a8585';
			break;
		case 'atelier-plateau-light':
			background = '#f4ecec';
			color = '#585050';
			break;
		case 'atelier-savanna-dark':
			background = '#171c19';
			color = '#87928a';
			break;
		case 'atelier-savanna-light':
			background = '#ecf4ee';
			color = '#526057';
			break;
		case 'atelier-seaside-dark':
			background = '#131513';
			color = '#8ca68c';
			break;
		case 'atelier-seaside-light':
			background = '#f4fbf4';
			color = '#5e6e5e';
			break;
		case 'atelier-sulphurpool-dark':
			background = '#202746';
			color = '#979db4';
			break;
		case 'atelier-sulphurpool-light':
			background = '#f5f7ff';
			color = '#5e6687';
			break;
		case 'atom-one-dark-reasonable':
			background = '#282c34';
			color = '#abb2bf';
			break;
		case 'atom-one-dark':
			background = '#282c34';
			color = '#abb2bf';
			break;
		case 'atom-one-light':
			background = '#fafafa';
			color = '#383a42';
			break;
		default:
			background = '#F0F0F0';
			color = 'black';
	}

	var x = document.getElementsByTagName('pre');
		for(var i=0; i<x.length; ++i)
			x[i].style = 'background: ' + background + '; color: ' + color + ';';
}
