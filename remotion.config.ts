import {Config} from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');

// Pakai browser yang sudah terpasang jika Chrome tidak bisa diunduh (mis. sandbox tanpa akses internet).
if (process.env.REMOTION_BROWSER) {
  Config.setBrowserExecutable(process.env.REMOTION_BROWSER);
  Config.setChromeMode('chrome-for-testing');
}
