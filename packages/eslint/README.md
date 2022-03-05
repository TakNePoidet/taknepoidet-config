# ESLint конфигурация

## Установка

Добавьте пакет в свои dev-dependencies, используя npm или yarn

```bash
npm i -D @taknepoidet-config/eslint-config eslint
# или
yarn add -D @taknepoidet-config/eslint-config eslint
```

## Использование в JavaScript

Добавьте файл `.eslintrc` в корень вашего проекта, если у вас его нет.

Затем добавьте туда раздел `extends`:

```json
{
	"extends": ["@taknepoidet-config/eslint-config"]
}
```

## Использование в TypeScript

1. Следуйте инструкциям для JavaScript.
2. Расширить код `@taknepoidet-config/eslint-config/rules/typescript`.

```json
{
	"extends": ["@taknepoidet-config/eslint-config/rules/typescript"]
}
```

## Использование в Vue.js

1. Следуйте инструкциям для JavaScript.
2. Расширить код `@taknepoidet-config/eslint-config/rules/vue`.

```json
{
	"extends": ["@taknepoidet-config/eslint-config/rules/vue"]
}
```

## Пример команды

```bash
eslint ./src
```
