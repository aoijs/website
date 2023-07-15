---
title: '$maximumMembers'
description: '$maximumMembers will return the maximal amount of members a guild can have.'
id: maximumMembers
---

`$maximumMembers` will return the maximal amount of members a guild can have.

## الاستخدام

```php
$maximumMembers[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return the maximum of members you can have in your guild:

```javascript
bot.command({
    name: 'maximumMembers',
    code: `
  You can have: $maximumMembers[$guildID] Members in this guild!
  `
});
```
