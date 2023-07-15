---
title: '$map'
description: '$map will execute awaited commands for given elements.'
id: map
---

`$map` will execute awaited commands for given elements.

## Modo de uso

```php
$map[text;split;awaitedCmds;sep?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                   | Requerido |
| ----------- | -------- | ---------------------------- |:---------:|
| text        | consulta | Text.                        | verdadero |
| split       | consulta |                              | verdadero |
| awaitedCmds | string   | Awaited Commands to execute. |    sí     |
| sep?        | string   | Separador.                   |   falso   |