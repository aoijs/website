---
title: '$getApplicationCommandID'
description: '$getApplicationCommandID will return the ID of a given application command.'
id: getApplicationCommandID
---

`$getApplicationCommandID` will return the ID of a given application command.

## Uso

```php
$getApplicationCommandID[name;type?]
```

## Parámetros

| Campo  | Tipo     | Parámetros                                                                                                     | Requerido |
| ------ | -------- | -------------------------------------------------------------------------------------------------------------- |:---------:|
| nombre | consulta | Name of the application command.                                                                               | verdadero |
| tipo?  | consulta | Application command type. <br /> 1. **global** (default) <br /> 2. **guildID** (specific guild ID) |    no     |

## Ejemplo(s)

This will return the ID of an application command called "example", (if any):

```javascript
bot.command({
    name: "getApplicationCommandID",
    code: `
  $getApplicationCommandID[example;global]
  `
});
```