---
title: '$channelID'
description: '$channelID will return the channel ID of the given channel name.'
id: canalID
---

`$channelID` will return the channel ID of the given channel name.

## Modo de uso

```php
$channelID[name?]
```

## Parámetros

| Campo | Tipo    | Parámetros                                              | Requerido |
| ----- | ------- | ------------------------------------------------------- |:---------:|
| name? | integer | Channel name of the channel you want the channel ID of. |    no     |

## Ejemplo(s)

This will return the channel ID of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelID',
    code: `
  $channelID
  `
});
```