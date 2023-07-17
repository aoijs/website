---
title: $findRoles
description: '$findRoles gibt alle passenden Rollen in Abhängigkeit von der angegebenen Abfrage zurück.'
id: findRoles
---

`$findRoles` gibt alle passenden Rollen in Abhängigkeit von der angegebenen Abfrage zurück.

## Verwendung

```php
$findRoles[roleResolver;limit?;type?;format?]
```

## Verwendung

| Feld         | Typ    | Beschreibung                                           | Erforderlich |
| ------------ | ------ | ------------------------------------------------------ |:------------:|
| roleResolver | string | Suchanfrage zum Treffen.                               |     wahr     |
| begrenzen?   | anzahl | Die maximale Anzahl an Rollen, die der Bot zurückgibt. |    falsch    |
| typ?         | string | Typ der Suchabfrage.                                   |    falsch    |
| formatieren? | string | Formatierung der Ausgabe.                              |    falsch    |

### Parameter für das `Format` Argument

* {position} -> gibt die Position zurück
* {id} -> gibt die Rollen-ID zurück
* {username} -> gibt den Rollennamen zurück

## Beispiel(e)

Dies gibt alle Rollen zurück, die `Besitzer` sind:

```javascript
bot.command({
    name: 'findRoles',
    code: `
  $findRoles[Owner;5;startsWith;{position}) {username}: {id}]
  `
});
```
