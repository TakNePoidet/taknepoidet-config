const fs = require('fs');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const rimraf = require('rimraf');

const PATH_SRC = path.join(__dirname, './src');
const PATH_DIST = path.join(__dirname, './rules');

if (fs.existsSync(PATH_DIST)) {
	rimraf.sync(`${PATH_DIST}/*`);
} else {
	fs.mkdirSync(PATH_DIST);
}

for (const name of fs.readdirSync(PATH_SRC)) {
	// eslint-disable-next-line global-require,import/no-dynamic-require
	const rules = require(`${PATH_SRC}/${name}`);

	fs.writeFileSync(`${PATH_DIST}/${name}.json`, JSON.stringify(rules, null, 2), 'utf8');
}

const mainConfig = fs.readdirSync(PATH_DIST).reduce(
	(config, file) => {
		config.extends.push(`./${file}`);
		return config;
	},
	{
		extends: []
	}
);

fs.writeFileSync(`${PATH_DIST}/index.json`, JSON.stringify(mainConfig, null, 2), 'utf8');
