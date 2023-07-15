---
title: '$memberJoinDate'
description: '$memberJoinDate will return a members join date in MS.'
id: memberJoinDate
---

`$memberJoinDate` will return a members join date in MS.

## الاستخدام

```php
$memberJoinDate[userID?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| userID?  | Integer | اي دي المستخدم.      | false |
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return your join date in MS and parsed date:

```javascript
bot.command({
    name: 'memberJoinDate',
    code: `
  $memberJoinDate[$authorID;$guildID] -> $parseDate[$memberJoinDate[$authorID;$guildID]]
  `
});
```
