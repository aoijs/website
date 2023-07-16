---
title: $addField
description: '$addField добавит поле в вложение.'
id: addField
---

`$addField` добавит поле в вложение.

## Использование

```php
$addField[fieldTitle;fieldDescription;inline?]
```

## Параметры

| Название   | Nbg     | Описание            | Нужно |
| ---------- | ------- | ------------------- |:-----:|
| заголовок? | строка  | Заголовок поля.     |  да   |
| Описание?  | строка  | Описание поля.      |  да   |
| встроен?   | boolean | Если поле встроено. | ложь  |

## Пример(ы)

Это отправит вставку с полем и описанием:

```javascript
bot.command({
    name: 'addField',
    code: `
  $addField[Example;Look at this!;false]
  $description[Hello!]
  «
});
```
