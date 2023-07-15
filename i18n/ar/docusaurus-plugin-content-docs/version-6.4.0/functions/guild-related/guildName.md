---
title: '$guildName'
description: '$guildName will return a guild''s name.'
id: guildName
---

`$guildName` will return a guild's name.

## الاستخدام

```php
$guildName[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return the name of your guild:

```javascript
bot.command({
    name: 'guildName',
    code: `
  $guildName[$guildID]
  `
});
```
