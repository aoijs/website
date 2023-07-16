---
title: '$parseTime'
description: '$parseTime konvertiert jede menschliche Zeit in Millisekunden.'
id: parseTime
---

`$parseTime` wird jede menschliche Zeit in Millisekunden umwandeln.

## Verwendung

```php
$parseTime[time]
```

## Verwendung

| Feld | Typ    | Beschreibung                            | Erforderlich |
| ---- | ------ | --------------------------------------- |:------------:|
| Zeit | string | Die Zeit, die in `ms` umgewandelt wird. |     wahr     |

## Beispiel(e)

Dies konvertiert `69 Minuten` in Millisekunden und gibt `4140000` zurück:

```javascript
bot.command({
    name: 'parseTime',
    code: `
  $parseTime[69m]
  `
});
```

Dies konvertiert `1w 2d 20m` in Millisekunden und gibt `778800000` zurück:

```javascript
bot.command({
    name: 'parseTime',
    code: `
  $parseTime[1w 2d 20m]
  `
});
```
