# Stylelint конфигурация

## Установка

Добавьте пакет в свои dev-dependencies, используя npm или yarn

```bash
npm i -D stylelint-config-taknepoidet stylelint
# или
yarn add -D stylelint-config-taknepoidet stylelint
```

## Использование

Добавьте файл `.stylelintrc` в корень вашего проекта, если у вас его нет.

Затем добавьте туда раздел `extends`:

```json
{
	"extends": ["stylelint-config-taknepoidet"]
}
```
