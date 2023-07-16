---
title: $addObjectProperty
description: '$addObjectProperty добавит свойство к существующему объекту.'
id: addObjectProperty
---

`$addObjectProperty` добавит свойство к существующему объекту.

## Использование

```php
$addObjectProperty[name;value]
```

## Параметры

| Название | Nbg    | Описание           | Нужно |
| -------- | ------ | ------------------ |:-----:|
| название | строка | Имя свойства.      |  да   |
| значение | строка | Значение свойства. |  да   |

## Пример(ы)

Это вернет `Ferel` из свойства `Leref`:

```javascript
bot.command({
    name: 'addObjectProperty',
    code: `
  $getObjectProperty[Leref]
  $addObjectProperty[Leref;Ferel]
  $createObject[{}]
  `
});
```
