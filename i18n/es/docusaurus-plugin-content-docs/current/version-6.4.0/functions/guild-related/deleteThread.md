---
title: '$deleteThread'
description: '$deleteThread will delete a given thread of a channel.'
id: deleteThread
---

`$deleteThread` will delete a given thread of a channel.

## Modo de uso

```php
$deleteThread[channelID;threadID;reason?]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                                    | Requerido |
| ------- | ------ | ------------------------------------------------------------- |:---------:|
| canalID | entero | The ID of the channel where the thread exists in.             | verdadero |
| hiloID  | entero | El hilo ID.                                                   | verdadero |
| ¿razón? | string | The reason which will be displayed in the guild's audit logs. |   falso   |

## Ejemplo(s)

This will delete a thread of the channel where you execute the command in ( make sure to replace threadID with an actual thread ID ):

```javascript
bot.command({
    name: 'deleteThread',
    code: `
  $deleteThread[$channelID;threadID;Crazy Example.]
  `
});
```