---
title: '$channelCooldown'
description: '$channelCooldown will set a cooldown bound to a specific channel after execution of the command.'
id: channelCooldown
---

`$channelCooldown` will set a channel-based cooldown.

## प्रोयोग

```php
$channelCooldown[time;errorMessage]
```

* You are able to retrieve the remaining cooldown in the `$channelCooldown` function by using **`%time%`** or any of the following below.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                                             |    चाहिए     |
| ------------ | -------- | -------------------------------------------------------- |:------------:|
| time         | स्ट्रिंग | Timer of the cooldown                                    |     true     |
| errorMessage | स्ट्रिंग | Error message when given cooldown timer is still active. | असत्य (नहीं) |

## ट्रू (हा)

This will set a cooldown for a command in the channel where the command was executed in and returns the remaining cooldown:

```javascript
bot.command({
    name: 'channelCooldown',
    code: `
  hello
  $channelCooldown[2m;Please wait %time% to execute this command again.]
  `
});
```
