---
title: '$guildVanityURL'
description: '$guildVanityURL will return a guild''s vanity URL.'
id: guildVanityURL
---

`$guildVanityURL` will return a guild's vanity URL.

## الاستخدام

```php
$guildVanityURL[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين  | مطلوب |
| -------- | ------- | ------------- |:-----:|
| guildID? | Integer | The guild ID. | false |

## مثال

This will return the vanity URL of your guild, if you have one:

```javascript
bot.command({
    name: 'guildVanityURL',
    code: `
  $guildVanityURL[$guildID]
  `
});
```
