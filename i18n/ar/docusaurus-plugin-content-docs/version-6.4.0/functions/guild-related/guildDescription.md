---
title: '$guildDescription'
description: '$guildDescription will return the guild''s description.'
id: guildDescription
---

`$guildDescription` will return the guild's description.

## الاستخدام

```php
$guildDescription[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return the description of a specific guild:

```javascript
bot.command({
    name: 'guildDescription',
    code: `
  $guildDescription[$guildID]
  `
});
```
