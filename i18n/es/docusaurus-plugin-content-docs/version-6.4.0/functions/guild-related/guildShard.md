---
title: '$guildShard'
description: '$guildShard devolverá los gremios de un fragmento específico.'
id: guildShard
---

`$guildShard` devolverá los gremios de un fragmento específico.

## Uso

```php
$guildShard[opción?;sep?;identificación del fragmento]
```

## Parámetros

| Campo                        | Tipo     | Parámetros                                                                                          | Requerido |
| ---------------------------- | -------- | --------------------------------------------------------------------------------------------------- |:---------:|
| opción?                      | entero   | Opción de devolver los gremios en <br /> 1. **nombre** (por defecto) <br /> 2. **name** |   falso   |
| sep?                         | consulta | El separador para separar los valores devueltos.                                                    |   falso   |
| identificación del fragmento | entero   | El fragmento ID.                                                                                    | verdadero |

#### Tenga en cuenta que esto no funcionará sin fragmentar. Si no estás seguro, revisa la [guía de fragmentación](../../../../../../versioned_docs/version-6.4.0/guides/client/6sharding.md).

## Ejemplo(s)

Esto devolverá la cantidad de servidores en los que se encuentra tu bot:

```javascript
bot.command({
    name: 'guildShard',
    code: `
  $guildShard[name;, ;$shardID]
  `
});
```
