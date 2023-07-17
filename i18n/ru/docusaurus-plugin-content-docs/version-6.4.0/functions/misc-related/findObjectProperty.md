---
title: $findObjectProperty
description: '$findObjectProperty будет искать данное свойство объекта и возвращает его.'
id: findObjectProperty
---

`$findObjectProperty` будет искать данное свойство объекта и возвращать его.

## Использование

```php
$findObjectProperty[property;object]
```

## Параметры

| Название | Nbg    | Описание           | Нужно |
| -------- | ------ | ------------------ |:-----:|
| свойство | строка | Имя свойства.      |  да   |
| объект   | объект | Объект для поиска. |  да   |

## Пример(ы)

Это вернет `{"object": "property"}` так как он смог найти "object":

```javascript
bot.command({
    name: 'findObjectProperty',
    code: `
  $findObjectProperty[object;{"aoijs": "leref", "object": "property"}]
  `
});
```
