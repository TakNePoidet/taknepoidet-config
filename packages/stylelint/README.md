<!-- @format -->

# Stylelint конфигурация

## Установка

Добавьте пакет в свои dev-dependencies, используя npm или yarn

```bash
npm i -D @taknepoidet-config/stylelint stylelint
# или
yarn add -D @taknepoidet-config/stylelint stylelint
```

## Использование

Добавьте файл `.stylelintrc` в корень вашего проекта, если у вас его нет.

Затем добавьте туда раздел `extends`:

```json
{
	"extends": ["@taknepoidet-config/stylelint"]
}
```
