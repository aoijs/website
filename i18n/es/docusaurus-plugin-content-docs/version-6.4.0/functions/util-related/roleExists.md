---
title: '$roleExists'
description: '$roleExists will check if a certain role exists within a certain guild.'
id: roleExists
---

`$roleExists` will check if a certain role exists within a certain guild.

## Uso

```php
$roleExists[roleResolver;guildID?]
```

## Parámetros

| Campo        | Tipo   | Parámetros                                     | Requerido |
| ------------ | ------ | ---------------------------------------------- |:---------:|
| roleResolver | entero | ID of the role you want to check if it exists. | verdadero |
| servidorID?  | entero | ID of the guild where the role exists.         |    no     |

## Ejemplo(s)

This will return `false` as the role doesn't exist in your guide:

```javascript
bot.command({
    name: 'roleExists',
    code: `
  $roleExists[900004369355931729;$guildID]
  `
});
```