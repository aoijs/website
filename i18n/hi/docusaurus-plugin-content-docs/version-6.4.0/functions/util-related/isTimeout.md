---
title: '$isTimeout'
description: '$isTimeout will check if the user is timeouted with Discord''s built-in timeout feature.'
id: isTimeout
---

`$isTimeout` will check if the user is timeouted with Discord's built-in timeout feature.

## प्रोयोग

```php
$isTimeout[guildID?;userID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                    |    चाहिए     |
| -------- | ------- | ----------------------------------------------- |:------------:|
| guildID? | integer | The ID of the guild where they're timeouted in. | असत्य (नहीं) |
| userID?  | integer | The ID of the user that's timeouted.            | असत्य (नहीं) |

## ट्रू (हा)

This will check if you're timeouted and either return `true` or `false`:

```javascript
bot.command({
    name: 'isTimeout',
    code: `
  $isTimeout[$guildID;$authorID]
  `
});
```
