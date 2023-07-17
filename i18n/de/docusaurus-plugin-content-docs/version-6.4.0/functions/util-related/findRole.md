---
title: $findRole
description: '$findRole wird eine bestimmte Rolle einer Gilde suchen und zurückgeben.'
id: findRole
---

`$findRole` wird eine bestimmte Rolle einer Gilde suchen und zurückgeben.

## Verwendung

```php
$findRole[roleResolver;guildID?]
```

## Verwendung

| Feld         | Typ        | Beschreibung                               | Erforderlich |
| ------------ | ---------- | ------------------------------------------ |:------------:|
| roleResolver | string     | Name der Rolle, die du finden möchtest.    |     wahr     |
| guildID?     | ganze Zahl | Gilden-ID, in der die Rolle vorhanden ist. |    falsch    |

## Beispiel(e)

Gibt die Rollen-ID der Rolle `Besitzer` zurück, falls sie existiert:

```javascript
bot.command({
    name: 'findRole',
    code: `
  $findRole[Owner;$guildID]
  `
});
```
