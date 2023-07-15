---
title: '$getCooldownTime'
description: '$getCooldownTime will return the cooldown time of a given command.'
id: getCooldownTime
---

`$getCooldownTime` will return the cooldown time of a given command.

## प्रोयोग

```php
$getCooldownTime[time;type;command;id]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                                                                                                                            | चाहिए |
| ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |:-----:|
| time    | स्ट्रिंग | The time of the cooldown.                                                                                                                               | true  |
| टाइप    | स्ट्रिंग | Cooldown type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** <br /> 5. **static** | true  |
| command | स्ट्रिंग | Command name.                                                                                                                                           | true  |
| id      | integer  | User/guild/channel/message ID.                                                                                                                          | true  |

## ट्रू (हा)

This will return the remaining cooldown of the "getCooldownTime" command:

```javascript
bot.command({
    name: "getCooldownTime",
    code: `
    $cooldown[2m;]
    $getCooldownTime[2m;user;getCooldownTime;$authorID]
    `
});
```