---
title: '$findMember'
description: '$findMember wird ein bestimmtes Mitglied in einer bestimmten Gilde mit ihrem Namen finden.'
id: findMember
---

`$findMember` wird ein bestimmtes Mitglied in einer bestimmten Gilde finden.

## Verwendung

```php
$findMember[userResolver;returnSelf?;guildID?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                                                    | Erforderlich |
| ------------- | ---------- | ------------------------------------------------------------------------------- |:------------:|
| userResolver  | string     | Benutzer, die du finden möchtest.                                               |     wahr     |
| zurückkehren? | boolean    | Gibt die Autoren-ID zurück, falls der angegebene Benutzer nicht gefunden wurde. |    falsch    |
| guildID?      | ganze Zahl | Gilden-ID, in der der Benutzer anwesend ist.                                    |    falsch    |

## Beispiel(e)

Dies wird deine ID zurückgeben, da `Leref` nicht in der angegebenen Gilde gefunden wurde:

```javascript
bot.command({
    name: 'findMember',
    code: `
  $findMember[Leref;true;$guildID]
  `
});
```
