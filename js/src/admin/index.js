import app from 'flarum/app';
import hljsSettingsModal from './components/hljsSettingsModal';

app.initializers.add('therealsujitk/flarum-ext-hljs', () => {
	app.extensionSettings['therealsujitk-hljs'] = () => app.modal.show(new hljsSettingsModal());
});
