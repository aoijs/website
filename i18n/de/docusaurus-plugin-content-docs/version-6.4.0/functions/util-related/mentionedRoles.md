---
title: $mentionedRoles
description: '$mentionedRoles wird die ID einer Rolle zurückgeben, die von einer Nachricht abgerufen wurde. Dies funktioniert ähnlich wie `$mentioned`.'
id: mentionedRoles
---

`$mentionedRoles` gibt die ID einer Rolle zurück, die von einer Nachricht abgerufen wurde.

## Verwendung

```php
$mentionedRoles[index]
```

## Verwendung

| Feld  | Typ    | Beschreibung             | Erforderlich |
| ----- | ------ | ------------------------ |:------------:|
| index | anzahl | Der Index des Arguments. |     wahr     |

## Beispiel(e)

Dies gibt die ID der **ersten** Rolle Erwähnung zurück, wenn Sie versuchen eine Rolle in diesem Befehl zu nennen:

```javascript
bot.command({
    name: 'mentionedRoles',
    code: `
  $mentionedRoles[1]
  `
});
```
