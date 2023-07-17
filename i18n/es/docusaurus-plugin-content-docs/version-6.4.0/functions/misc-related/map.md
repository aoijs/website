---
title: '$map'
description: '$map ejecutará comandos esperados para elementos dados.'
id: map
---

`$map` ejecutará comandos esperados para determinados elementos.

## Uso

```php
$map[texto;dividir;Cmds esperados;sep?]
```

## Parámetros

| Campo          | Tipo     | Parámetros                      | Requerido |
| -------------- | -------- | ------------------------------- |:---------:|
| text           | consulta | Text.                           | verdadero |
| dividir        | cadena   |                                 | verdadero |
| Cmds esperados | cadena   | Comando esperado para ejecutar. | verdadero |
| sep?           | cadena   | Separador.                      |   falso   |