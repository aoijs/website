---
title: '$isTimeout'
description: '$isTimeout will check if the user is timeouted with Discord''s built-in timeout feature.'
id: isTimeout
---

`$isTimeout` will check if the user is timeouted with Discord's built-in timeout feature.

## الاستخدام

```php
$isTimeout[guildID?;userID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                    | مطلوب |
| -------- | ------- | ----------------------------------------------- |:-----:|
| guildID? | Integer | The ID of the guild where they're timeouted in. | false |
| userID?  | Integer | The ID of the user that's timeouted.            | false |

## مثال

This will check if you're timeouted and either return `true` or `false`:

```javascript
bot.command({
    name: 'isTimeout',
    code: `
  $isTimeout[$guildID;$authorID]
  `
});
```
