---
title: '$channelType'
description: '$channelType will return the given channel''s type.'
id: channelType
---

`$channelType` will return the given channel's type.

## Modo de uso

```php
$channelType[channelID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                                  | Requerido |
| -------- | ------- | ----------------------------------------------------------- |:---------:|
| canalID? | integer | ID of the channel you want the channel type to be returned. |    no     |

## Ejemplo(s)

This will return the channel type of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelType',
    code: `
  $channelType[$channelID]
  `
});
```