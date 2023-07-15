---
title: '$ownerID'
description: '$ownerID will return the ID of the server owner, depending on the given argument.'
id: ownerID
---

`$ownerID` +will return the ID of the server owner, depending on the given argument.

## Modo de uso

```php
$ownerID[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros    | Requerido |
| ----------- | ------- | ------------- |:---------:|
| servidorID? | integer | The guild ID. |    no     |

## Ejemplo(s)

This will return the ID of the server owner where you execute the command in:

```javascript
bot.command({
    name: 'ownerID',
    code: `
  $ownerID[$guildID]
  `
});
```
