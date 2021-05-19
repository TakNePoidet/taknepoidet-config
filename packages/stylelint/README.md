# Stylelint конфигурация

## Установка

Добавьте пакет в свои dev-dependencies, используя npm или yarn

```bash
npm i -D @taknepoidet/stylelint-config stylelint
# или
yarn add -D @taknepoidet/stylelint-config stylelint
```

## Использование

Добавьте файл `.stylelintrc` в корень вашего проекта, если у вас его нет.

Затем добавьте туда раздел `extends`:

```json
{
  "extends": ["@taknepoidet/stylelint-config"]
}
```
