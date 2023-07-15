---
title: '$clientLeave'
description: '$clientLeave will make your bot leave a specific server.'
id: clientLeave
---

`$clientLeave` will make your bot leave a specific server.

## प्रोयोग

```php
$clientLeave[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                    |    चाहिए     |
| -------- | ------- | ----------------------------------------------- |:------------:|
| guildID? | integer | The ID of the guild which your bot shall leave. | असत्य (नहीं) |

## ट्रू (हा)

This will make your bot leave the current guild:

```javascript
bot.command({
    name: 'clientLeave',
    code: `
  $clientLeave[$guildID]
  $wait[2s]
  $sendMessage[Bye, I'm leaving!]
  `
});
```
