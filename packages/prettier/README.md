# Prettier конфигурация

## Установка

Добавьте пакет в свои dev-dependencies, используя npm или yarn

```bash
npm i -D @taknepoidet-config/prettier prettier
# или
yarn add -D @taknepoidet-config/prettier prettier
```

## Использование

Добавьте файл `.prettierrc.cjs` в корень вашего проекта, если у вас его нет.

добавите следующий код в конфигурацию

```javascript
module.exports = {
	...require('@taknepoidet-config/prettier')
};
```

## Пример команды

```bash
prettier --write src/**
```
