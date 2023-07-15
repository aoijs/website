---
title: '$isHoisted'
description: '$isHoisted will check if a specific role is hoisted.'
id: isHoisted
---

`$isHoisted` will check if a specific role is hoisted.

## الاستخدام

```php
$isHoisted[roleID;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                               | مطلوب |
| -------- | ------- | -------------------------------------------------------------------------- |:-----:|
| roleID   | Integer | ID of the role you want to check if it's hoisted or not.                   | true  |
| guildID? | Integer | The ID of the guild where you want to check if the role is hoisted or not. | false |

## مثال

This will check if a role called `Owner` is hoisted in your server:

```javascript
bot.command({
    name: 'isHoisted',
    code: `
  $isHoisted[$findRole[Owner];$guildID]
  `
});
```
