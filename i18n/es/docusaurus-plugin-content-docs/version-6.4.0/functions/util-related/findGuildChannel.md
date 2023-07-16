---
title: '$findGuildChannel'
description: '$findGuildChannel buscará un canal de gremio dentro de un gremio.'
id: findGuildChannel
---

`$findGuildChannel` buscará un canal determinado por su nombre.

## Uso

```php
$findGuildChannel[canalResolver;returnSelf?;servidorID?]
```

## Parámetros

| Campo           | Tipo     | Parámetros                                                                       | Requerido |
| --------------- | -------- | -------------------------------------------------------------------------------- |:---------:|
| canalResolver   | cadena   | Nombre del canal en el que estuvo trabajando                                     | verdadero |
| volverYo mismo? | booleano | Devuelve el canal en el que el comando fue ejecutado cuando no se encontró nada. |   falso   |
| servidorID?     | entero   | ID del servidor desde el que se contarán los canales.                            |   falso   |

## Ejemplo(s)

Esto devolverá el ID de canal de un canal llamado `#rules`

```javascript
bot.command({
    name: 'findGuildChannel',
    code: `
  $findGuildChannel[rules;false;$guildID]
  `
});
```
