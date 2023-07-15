---
title: '$getApplicationCommandOptions'
description: '$getApplicationCommandOptions will return application options of a given application command.'
id: getApplicationCommandOptions
---

`$getApplicationCommandOptions` will return the ID of a given application command.

## Modo de uso

```php
$getApplicationCommandOptions[name;type?]
```

## Parámetros

| Campo  | Tipo     | Parámetros                                                                                                     | Requerido |
| ------ | -------- | -------------------------------------------------------------------------------------------------------------- |:---------:|
| nombre | consulta | Name of the application command.                                                                               | verdadero |
| tipo?  | consulta | Application command type. <br /> 1. **global** (default) <br /> 2. **guildID** (specific guild ID) |    no     |