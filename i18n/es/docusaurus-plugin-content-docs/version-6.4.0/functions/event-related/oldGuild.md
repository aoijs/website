---
title: '$oldGuild'
description: '$oldGuild contiene datos para el gremio antes de que se actualizara, esto es del caché de discord y puede estar vacío dependiendo de si está en caché, así que use la opción parcial antes de intentar acceder a cualquier propiedad. (guildUpdate evento)'
id: oldGuild
---

`$oldGuild` contiene datos para el gremio antes de que se actualizara, esto es del caché de discordia y puede estar vacío dependiendo de si está en caché, así que use la opción parcial antes de intentar acceder a cualquier propiedad. (guildUpdate evento)

## Uso

```php
$oldGuild[opción]
```

## Parámetros

| Campo  | Tipo   | Descripción         | Requerido |
| ------ | ------ | ------------------- |:---------:|
| opción | cadena | Opción a recuperar. | verdadero |