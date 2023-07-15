---
title: '$interactionFollowUp'
description: '$interactionFollowUp can be used for JSON requests, song information or playing tracks, since these things takes more than 3 seconds.'
id: interactionFollowUp
---

`$interactionFollowUp` can be used for JSON requests, song information or playing tracks, since these things takes more than 3 seconds.

## Використання

```php
$interactionFollowUp[content?;embeds?;components?;files?;ephemeral?]
```

## Параметри

| Поле        | Тип     | Опис                                                                                              | Обов'язковий |
| ----------- | ------- | ------------------------------------------------------------------------------------------------- |:------------:|
| content?    | рядок   | Message content.                                                                                  |      ні      |
| embeds?     | рядок   | Embed parser.                                                                                     |      ні      |
| components? | рядок   | Component parser.                                                                                 |      ні      |
| files?      | рядок   | File parser.                                                                                      |      ні      |
| ephemeral?  | boolean | vVisible to the command author only? <br /> 1. **true** <br /> 2. **false** (default) |      ні      |

## Приклад(и)

```javascript
bot.interactionCommand({
    name: "interactionFollowUp",
    prototype: "slash",
    code: `
  $interactionFollowUp[Bye, world!]
  $interactionDefer[true]
  `
});
```
