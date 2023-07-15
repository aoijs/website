---
title: '$userActivity'
description: '$activity will return a user''s activity.'
id: userActivity
---

`$userActivity` will return a user's current activity.

## الاستخدام

```php
$userActivity[guildID?;userID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين  | مطلوب |
| -------- | ------- | ------------- |:-----:|
| guildID? | Integer | The guild ID. | false |
| userID?  | Integer | The user ID.  | false |

## مثال

This will return your current Activity:

```javascript
bot.command({
    name: 'userActivity',
    code: `
  $userActivity[$guildID;$authorID]
  `
});
```