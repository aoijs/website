---
title: '$tempCooldown'
description: '$tempCooldown will create a temporary cooldown for a command.'
id: tempCooldown
---

`$tempCooldown` will create a temporary cooldown for a command.

## प्रोयोग

```php
$tempCooldown[time;id;errorMessage?]
```

* You are able to retrieve the remaining cooldown in the `$tempCooldown` function by using **`%time%`** or any of the following below.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                                                | चाहिए |
| ------------ | -------- | ----------------------------------------------------------- |:-----:|
| time         | स्ट्रिंग | The duration of the cooldown.                               | true  |
| id           | स्ट्रिंग | Can be user, guild, message, channel or any other ID.       | true  |
| errorMessage | स्ट्रिंग | Error message when there's remaining time for the cooldown. | true  |

## ट्रू (हा)

This will set a temporary cooldown for a command which applies once only:

```javascript
bot.command({
    name: 'tempCooldown',
    code: `
  hello
  $tempCooldown[2m;customid;Please wait %time% to execute this command again.]
  `
});
```
