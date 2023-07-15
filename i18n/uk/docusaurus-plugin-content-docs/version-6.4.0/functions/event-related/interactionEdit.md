---
title: '$interactionEdit'
description: '$interactionEdit will return edit an interaction.'
id: interactionEdit
---

`$interactionEdit` will return edit an interaction.

## Використання

```php
$interactionEdit[content?;embeds?;components?;files?;allowedMentions?]
```

## Параметри

| Поле             | Тип   | Опис                                                                                               | Обов'язковий |
| ---------------- | ----- | -------------------------------------------------------------------------------------------------- |:------------:|
| content?         | рядок | New message content.                                                                               |      ні      |
| embeds?          | рядок | Embed parser.                                                                                      |      ні      |
| components?      | рядок | Component parser.                                                                                  |      ні      |
| files?           | рядок | File parser.                                                                                       |      ні      |
| allowedMentions? | рядок | Allowed mentions? <br /> 1. **users** <br /> 2. **roles** <br /> 3. **everyone** |      ні      |

## Приклад(и)

```javascript
bot.interactionCommand({
    name: "interactionEdit",
    prototype: "slash",
    code: `
  $interactionEdit[Bye, World!;;;;everyone]
  $wait[5s]
  $interactionReply[Hello, World!;;;;everyone;false]
  `
});
```
