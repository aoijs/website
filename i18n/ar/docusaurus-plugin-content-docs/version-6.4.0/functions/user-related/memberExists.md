---
title: '$memberExists'
description: '$memberExists check if a given user is member of the given guild.'
id: memberExists
---

`$memberExists` check if a given user is member of the given guild.

## الاستخدام

```php
$memberExists[userID;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                                       | مطلوب |
| -------- | ------- | ---------------------------------------------------------------------------------- | ----- |
| userID   | Integer | id of the user you want to check if they're currently a member of the given server | true  |
| guildID? | Integer | the server where the user is present in                                            | false |

## مثال

This will return `true` as you're currently in this guild:

```javascript
bot.command({
    name: 'memberExists',
    code: `
  $memberExists[$authorid;$guildID]
  `
});
```
