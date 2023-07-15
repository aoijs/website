---
title: '$leaveThread'
description: '$leaveThread will make the bot leave a specific thread.'
id: leaveThread
---

`$killShard` will make the bot leave a specific thread.

## Modo de uso

```php
$leaveThread[channelID;threadID]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                               | Requerido |
| ------- | ------ | -------------------------------------------------------- |:---------:|
| canalID | entero | The ID of the channel of where the thread is located in. | verdadero |
| hiloID  | entero | The ID of the thread.                                    | verdadero |

## Ejemplo(s)

This will create a thread and make the bot leave after creation:

```javascript
bot.command({
    name: 'leaveThread',
    code: `
  $leaveThread[$channelID;$get[threadID]]
  $let[threadID;$createThread[$channelID;Example!;1440;public;$messageID;true]]
  `
});
```