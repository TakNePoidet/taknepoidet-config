import type { Linter } from 'eslint';
export type RulesRecord = Linter.RulesRecord;
export type Config = Linter.Config;

export function defineRules(cb: () => RulesRecord) {
	return cb();
}

export function defineConfig(cb: () => Config) {
	return cb();
}
