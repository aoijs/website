---
title: '$guildVanityURL'
description: '$guildVanityURL will return a guild''s vanity URL.'
id: guildVanityURL
---

`$guildVanityURL` will return a guild's vanity URL.

## प्रोयोग

```php
$guildVanityURL[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन  |    चाहिए     |
| -------- | ------- | ------------- |:------------:|
| guildID? | integer | The guild ID. | असत्य (नहीं) |

## ट्रू (हा)

This will return the vanity URL of your guild, if you have one:

```javascript
bot.command({
    name: 'guildVanityURL',
    code: `
  $guildVanityURL[$guildID]
  `
});
```
