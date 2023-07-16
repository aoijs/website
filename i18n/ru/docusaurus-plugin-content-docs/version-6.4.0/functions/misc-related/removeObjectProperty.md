---
title: $removeObjectProperty
description: '$removeObjectProperty удалит свойство объекта.'
id: removeObjectProperty
---

`$removeObjectProperty` удалит свойство данного объекта.

## Использование

```php
$removeObjectProperty[property;object]
```

## Параметры

| Название | Nbg    | Описание      | Нужно |
| -------- | ------ | ------------- |:-----:|
| свойство | строка | Имя свойства. |  да   |
| объект   | объект | Объект        |  да   |

## Пример(ы)

Это удалит `Ferel` из заданного объекта:

```javascript
bot.command({
    name: 'removeObjectProperty',
    code: `
  $removeObjectProperty[Ferel;{"aoimusic": "ayaka", "leref": "ferel"}]
  `
});
```
