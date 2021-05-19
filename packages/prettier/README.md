# Prettier конфигурация
## Установка
Добавьте пакет в свои dev-dependencies, используя npm или yarn

```bash
$ npm i -D taknepoidet-prettier-config prettier

$ yarn add -D taknepoidet-prettier-config prettier
```
## Использование
Добавьте файл `.prettierrc.js` в корень вашего проекта, если у вас его нет.

добавите следующий код в конфигурацию

```javascript
module.exports = {
	...require('taknepoidet-prettier-config')
};
```
## Пример команды
```bash
prettier --write src/**
```
