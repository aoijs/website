---
title: '$rolePosition'
description: '$rolePosition wird die Position einer bestimmten Rolle zurückgeben.'
id: rolePosition
---

`$rolePosition` gibt die Rollenposition einer bestimmten Rolle zurück.

## Verwendung

```php
$rolePosition[roleID;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung   | Erforderlich |
| -------- | ---------- | -------------- |:------------:|
| roleID   | ganze Zahl | Die Rollen-ID. |     wahr     |
| guildID? | ganze Zahl | Die Gilden-ID. |    falsch    |

## Beispiel(e)

Dies gibt die Rollenposition jeder beliebigen Rolle zurück. In diesem Beispiel verwenden wir die `@everyone` Rolle:

```javascript
bot.command({
    name: 'rolePosition',
    code: `
  $rolePosition[$guildID]
  `
});
```
