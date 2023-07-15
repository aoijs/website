---
title: '$clear'
description: '$clear will delete the amount of given messages in a channel.'
id: clear
---

`$clear` will delete the amount of given messages in a channel.

## Modo de uso

```php
$clear[amount;filter?;returnCount?;channelID?]
```

## Parámetros

| Campo        | Tipo     | Parámetros                                                                                                                                                   | Requerido |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |:---------:|
| cantidad     | número   | Amount of messages to delete.                                                                                                                                | verdadero |
| filter?      | consulta | Filter of messages which are to delete. <br /> 1. **everyone** (default) <br /> 2. **unPins** <br /> 3. **bot** <br /> 4. **userID** |    no     |
| returnCount? | booleano | Return the count of deleted messages. <br /> 1. **false** (default) <br /> 2. **true**                                                           |   falso   |
| canalID?     | entero   | In which channel the permissions shall be deleted.                                                                                                           |   falso   |

## Ejemplo(s)

This will delete the most recent fifty messages which are not pinned:

```javascript
bot.command({
    name: 'clear',
    code: `
  $clear[50;unPins;false;$channelID]
  `
});
```
