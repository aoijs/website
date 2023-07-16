---
title: '$cpu'
description: '$cpu devolverá el uso de CPU de un proceso o del SO.'
id: cpu
---

`$cpu` devolverá el uso de CPU de un proceso o del SO.

## Uso

```php
$cpu[opción?]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                                                                                                                                                  | Requerido |
| ------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| opción? | string | La opción de la que se devolverá el uso de la CPU. <br /> 1. **os** - devuelve el uso de CPU del bot <br /> 2. **process** - devuelve el uso de CPU del proceso |    no     |

## Ejemplo(s)

Esto devolverá el uso de CPU de su bot:

```javascript
bot.command({
    name: 'cpu',
    code: `
  OS: $cpu[os] 
  Proceso: $cpu[process] 
  `
});
```