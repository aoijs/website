---
title: '$uptime'
description: '$uptime will return the bot''s uptime.'
id: uptime
---

`$uptime` will return the bot's uptime.

## प्रोयोग

```php
$uptime[option?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                    |    चाहिए     |
| ------- | -------- | ----------------------------------------------- |:------------:|
| option? | स्ट्रिंग | How the uptime will be returned (listed below). | असत्य (नहीं) |

| Option             | Output                 |
| ------------------ | ---------------------- |
| full **(default)** | 19 minutes, 21 seconds |
| humanize           | 19m 21s                |
| ms                 | 1165980                |

## ट्रू (हा)

This will return the time of how long your bot is online for:

```javascript
bot.command({
    name: 'uptime',
    code: `
  I've been up for $uptime[full]!
  `
});
```
