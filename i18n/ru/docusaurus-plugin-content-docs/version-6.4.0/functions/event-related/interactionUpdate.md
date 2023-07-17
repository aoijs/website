---
title: $interactionUpdate
description: '$interactionUpdate обновит существующее взаимодействие.'
id: interactionUpdate
---

`$interactionUpdate` возвращает обновление существующего взаимодействия.

## Использование

```php
$interactionUpdate[content?;embeds?;components?;files?]
```

## Параметры

| Название      | Nbg    | Описание                     | Нужно |
| ------------- | ------ | ---------------------------- |:-----:|
| содержание?   | строка | Содержимое нового сообщения. | ложь  |
| встраивается? | строка | Embed parser.                | ложь  |
| компоненты?   | строка | Component parser.            | ложь  |
| файлы?        | строка | File parser.                 | ложь  |

## Пример(ы)

```javascript
bot.interactionCommand({
    name: "interactionUpdate",
    prototype: "slash",
    code: `
  $interactionReply[Hello, World!;;{actionRow:{button:Example Button!:primary:customID:false}};;everyone;false]
  `
});
```

```js
bot.interactionCommand({
    name: "customID",
    prototype: "button",
    code: `
  $interactionUpdate[Bye, world.]
  «
});
```