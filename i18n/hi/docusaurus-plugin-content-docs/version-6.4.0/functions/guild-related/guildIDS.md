---
title: '$guildIDS'
description: '$guildIDS will return the ID of every guild your bot is in.'
id: guildIDS
---

`$guildIDS` will return the ID of every guild your bot is in.

## प्रोयोग

```php
$guildIDS[sep?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                        |    चाहिए     |
| ----- | -------- | --------------------------------------------------- |:------------:|
| sep?  | स्ट्रिंग | The separator to separate multiple returned values. | असत्य (नहीं) |

## ट्रू (हा)

This will return all guild IDs your bot is in:

```javascript
bot.command({
    name: 'guildIDS',
    code: `
  $guildIDS[, ]
  `
});
```
