---
title: '$guildDefaultMessageNotifications'
description: '$guildDefaultMessageNotifications will return given guild''s default message notification type.'
id: guildDefaultMessageNotifications
---

`$guildDefaultMessageNotifications` will return given guild's default message notification type.

## الاستخدام

```php
$guildDefaultMessageNotifications[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return the guild's default message notification type:

```javascript
bot.command({
    name: 'guildDefaultMessageNotifications',
    code: `
  $guildDefaultMessageNotifications
  `
});
```
