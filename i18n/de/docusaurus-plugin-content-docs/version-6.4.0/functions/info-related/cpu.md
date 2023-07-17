---
title: '$cpu'
description: '$cpu gibt die CPU-Auslastung eines Prozesses oder des Betriebssystems zurück.'
id: cpu
---

`$cpu` wird die CPU-Auslastung eines Prozesses oder des Betriebssystems zurückgeben.

## Verwendung

```php
$cpu[option?]
```

## Verwendung

| Feld    | Typ    | Beschreibung                                                                                                                                                                                           | Erforderlich |
| ------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:------------:|
| option? | string | Die Option, von der die CPU-Auslastung zurückgegeben wird. <br /> 1. **os** - gibt die CPU-Auslastung des Bots <br /> 2 zurück. **Prozess** - gibt die CPU-Auslastung des Prozesses zurück |    falsch    |

## Beispiel(e)

Dies gibt die CPU-Auslastung Ihres Bots zurück:

```javascript
bot.command({
    name: 'cpu',
    code: `
  OS: $cpu[os] 
  Prozess: $cpu[process] 
  `
});
```