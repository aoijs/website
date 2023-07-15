---
title: '$joinThread'
description: '$joinThread will make the bot join a specific thread.'
id: joinThread
---

`$joinThread` will make the bot join a specific thread.

## Modo de uso

```php
$joinThread[channelID;threadID]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                        | Requerido |
| ------- | ------ | ------------------------------------------------- |:---------:|
| canalID | entero | The channel ID of where the thread is located in. | verdadero |
| hiloID  | entero | The ID of the thread.                             | verdadero |

## Ejemplo(s)

This will create a thread in the current channel and add the bot to it:

```javascript
bot.command({
    name: 'joinThread',
    code: `
  $joinThread[$channelID;$get[threadID]]
  $let[threadID;$createThread[$channelID;Example!;1440;public;$messageID;true]]
  `
});
```