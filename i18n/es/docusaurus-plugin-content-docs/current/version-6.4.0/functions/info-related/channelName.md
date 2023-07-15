---
title: '$channelName'
description: '$channelName will return the channel name of the given channel.'
id: channelName
---

`$channelName` will return the channel name of the given channel.

## Modo de uso

```php
$channelName[channelID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                              | Requerido |
| -------- | ------- | ------------------------------------------------------- |:---------:|
| canalID? | integer | Channel ID of the channel you want the channel name of. |    no     |

## Ejemplo(s)

This will return the channel name of the channel where you executed the command in:

```javascript
bot.command({
    name: 'channelName',
    code: `
  $channelName[$channelID]
  `
});
```