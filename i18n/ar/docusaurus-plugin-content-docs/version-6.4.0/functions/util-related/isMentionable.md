---
title: '$isMentionable'
description: '$isMentionable check if a given role is mentionable.'
id: isMentionable
---

`$isMentionable` check if a given role is mentionable.

## الاستخدام

```php
$isMentionable[roleID;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                     | مطلوب |
| -------- | ------- | ------------------------------------------------ |:-----:|
| roleID   | Integer | The role ID to check if it's mentionable or not. | true  |
| guildID? | Integer | ID of the guild where the role is present in.    | false |

## مثال

This will check if a role with the name `Owner` is mentionable and returns either `true` or `false`:

```javascript
bot.command({
    name: 'isMentionable',
    code: `
  $isMentionable[$findRole[Owner];$guildID]
  `
});
```
