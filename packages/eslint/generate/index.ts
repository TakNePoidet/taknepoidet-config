import url from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import type { Config } from './utility';
import { javaScriptConfig, typeScriptConfig, vueConfig } from './configs';

// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
const __dirname = url.fileURLToPath(new URL('.', import.meta.url)) as string;

const PATH_DIST = path.join(__dirname, '../rules') as string;

if (fs.existsSync(PATH_DIST)) {
	fs.rmSync(`${PATH_DIST}`, {
		recursive: true
	});
}

fs.mkdirSync(PATH_DIST);

const configs = new Map<string, Config>();

configs.set('javascript', javaScriptConfig);
configs.set('typescript', typeScriptConfig);
configs.set('vue', vueConfig);

const mainConfig: Config = {};

mainConfig.extends = [];

for (const [name, config] of configs.entries()) {
	fs.writeFileSync(`${PATH_DIST}/${name}.json`, JSON.stringify(config, null, 2), 'utf8');
	mainConfig.extends.push(`./${name}.json`);
}

// console.log(vueConfig)

fs.writeFileSync(`${PATH_DIST}/index.json`, JSON.stringify(mainConfig, null, 2), 'utf8');
