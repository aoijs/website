---
title: '$arrayForEach'
description: '$arrayForEach ejecutará un comando esperado para cada elemento de la matriz.'
id: arrayForEach
---

`$arrayForEach` ejecutará un comando esperado para cada elemento de la matriz.

## Uso

```php
$arrayForEach[nombre;comandoEsperado;esperarDatos?]
```

## Parámetros

| Campo           | Tipo     | Descripción                     | Requerido |
| --------------- | -------- | ------------------------------- |:---------:|
| nombre          | cadena   | Nombre de matriz                | verdadero |
| comandoEsperado | consulta | Comando esperado para ejecutar. | verdadero |
| esperarDatos?   | cadena   | Datos esperados.                |   falso   |