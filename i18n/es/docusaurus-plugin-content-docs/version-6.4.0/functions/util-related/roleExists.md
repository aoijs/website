---
title: $roleExists
description: '$roleExists comprobará si existe un determinado rol dentro de un gremio determinado.'
id: roleExists
---

`$roleExists` comprobará si existe cierto papel dentro de un gremio determinado.

## Uso

```php
$roleExists[roleResolver;guildID?]
```

## Parámetros

| Campo        | Tipo   | Parámetros                                | Requerido |
| ------------ | ------ | ----------------------------------------- |:---------:|
| resolver rol | entero | ID del rol que desea comprobar si existe. | verdadero |
| servidorID?  | entero | ID del gremio donde existe el rol.        |    no     |

## Ejemplo(s)

Esto devolverá `falso` ya que el rol no existe en tu guía:

```javascript
bot.command({
    name: 'roleExists',
    code: `
  $roleExists[900004369355931729;$guildID]
  `
});
```