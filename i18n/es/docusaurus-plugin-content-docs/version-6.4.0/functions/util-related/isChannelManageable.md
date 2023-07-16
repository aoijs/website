---
title: '$isChannelManageable'
description: '$isChannelManageable will check if the channel is manageable or not.'
id: isChannelManageable
---

`$isChannelManageable` will check if the channel is manageable or not.

## Uso

```php
$isChannelManageable[channelID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                                      | Requerido |
| -------- | ------- | --------------------------------------------------------------- |:---------:|
| canalID? | integer | ID of the channel to check if the channel is manageable or not. |    no     |

## Ejemplo(s)

This will return `true` or `false` depending on if the channel you're executing the command in is manageable:

```javascript
bot.command({
    name: 'isChannelManageable',
    code: `
  $isChannelManageable[$channelID]
  `
});
```
