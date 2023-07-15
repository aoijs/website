---
title: '$guildDefaultMessageNotifications'
description: '$guildDefaultMessageNotifications will return given guild''s default message notification type.'
id: guildDefaultMessageNotifications
---

`$guildDefaultMessageNotifications` will return given guild's default message notification type.

## प्रोयोग

```php
$guildDefaultMessageNotifications[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return the guild's default message notification type:

```javascript
bot.command({
    name: 'guildDefaultMessageNotifications',
    code: `
  $guildDefaultMessageNotifications
  `
});
```
