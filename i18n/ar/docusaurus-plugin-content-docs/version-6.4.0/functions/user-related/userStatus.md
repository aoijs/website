---
title: '$userStatus'
description: '$userStatus will return a user''s presence.'
id: userStatus
---

`$userStatus` will return a user's presence.

## الاستخدام

```php
$userStatus[guildId?;userId?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                    | مطلوب |
| -------- | ------- | --------------------------------------------------------------- |:-----:|
| guildId? | Integer | The guild ID of which guild you want to retrieve the status of. | false |
| userId?  | Integer | The ID of the user you want to return the status of.            | false |

## مثال

This will either return `idle`, `online`, `invisible` or `dnd` depending on your current presence:

```javascript
bot.command({
    name: 'userStatus',
    code: `
  $userStatus[$guildID;$authorID]
  `
});
```
