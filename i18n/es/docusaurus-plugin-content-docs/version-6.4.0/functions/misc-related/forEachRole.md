---
title: '$forEachRole'
description: '$forEachRole ejecutará comandos esperados en cada canal de cada gremio.'
id: forEachRole
---

`$forEachRole` ejecutará comandos esperados en cada canal de cada gremio.

## Uso

```php
$forEachRole[servidorID;tiempo;esperar datos;...Cmds esperados;finalizar comando]
```

## Parámetros

| Campo             | Tipo   | Parámetros                                                     | Requerido |
| ----------------- | ------ | -------------------------------------------------------------- |:---------:|
| tiempo            | cadena | Cuánto tiempo tarda entre cada canal en ejecutar el siguiente. | verdadero |
| awaitData         | objeto | Datos esperados.                                               | verdadero |
| ...Cmds esperados | cadena | Comando esperado para ejecutar.                                | verdadero |
| finalizar comando | cadena | Comando esperado para ejecutar cuando termine el bucle.        | verdadero |