---
title: '$interactionUpdate'
description: '$interactionUpdate will update an existing interaction.'
id: interactionUpdate
---

`$interactionUpdate` will return update an existing interaction.

## Використання

```php
$interactionUpdate[content?;embeds?;components?;files?]
```

## Параметри

| Поле        | Тип   | Опис                 | Обов'язковий |
| ----------- | ----- | -------------------- |:------------:|
| content?    | рядок | New message content. |      ні      |
| embeds?     | рядок | Embed parser.        |      ні      |
| components? | рядок | Component parser.    |      ні      |
| files?      | рядок | File parser.         |      ні      |

## Приклад(и)

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
  `
});
```