---
title: '$interactionReply'
description: '$interactionReply allows you to send an interaction message reply.'
id: interactionReply
---

`$interactionReply` allows you to send an interaction message reply.

## Використання

```php
$interactionReply[content?;embeds?;components?;files?;allowedMentions?;ephemeral?]
```

## Параметри

| Поле             | Тип     | Опис                                                                                               | Обов'язковий |
| ---------------- | ------- | -------------------------------------------------------------------------------------------------- |:------------:|
| content?         | рядок   | Message content.                                                                                   |      ні      |
| embeds?          | рядок   | Embed parser.                                                                                      |      ні      |
| components?      | рядок   | Component parser.                                                                                  |      ні      |
| files?           | рядок   | File Parser.                                                                                       |      ні      |
| allowedMentions? | рядок   | Allowed mentions? <br /> 1. **everyone** <br /> 2. **roles** <br /> 3. **users** |      ні      |
| ephemeral?       | boolean | Visible to the command author only? <br /> 1. **true** <br /> 2. **false** (default)   |      ні      |

## Приклад(и)

```javascript
bot.interactionCommand({
    name: "interactionReply",
    prototype: "slash", // button/selectMenu/slash
    code: `
  $interactionReply[Hello, world!;;;;everyone;false]
  `
});
```
