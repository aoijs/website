---
title: '$memberJoinPosition'
description: '$memberJoinPosition will return a members join position.'
id: memberJoinPosition
---

`$memberJoinPosition` will return a members join position.

## الاستخدام

```php
$memberJoinPosition[userID?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| userID?  | Integer | اي دي المستخدم.      | false |
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return your join position, if you're the owner then it'd be `1`:

```javascript
bot.command({
    name: 'memberJoinPosition',
    code: `
  $memberJoinPosition[$authorID;$guildID]
  `
});
```
