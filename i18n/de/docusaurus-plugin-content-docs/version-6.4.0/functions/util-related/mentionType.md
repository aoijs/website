---
title: $mentionType
description: '$mentionType wird den Typ der Erwähnung zurückgeben.'
id: mentionType
---

`$mentionType` gibt den Typ der Erwähnung zurück.

## Verwendung

```php
$mentionType[content]
```

## Verwendung

| Feld   | Typ    | Beschreibung                                         | Erforderlich |
| ------ | ------ | ---------------------------------------------------- |:------------:|
| inhalt | string | Die Erwähnung, deren Referenztyp zurückgegeben wird. |     wahr     |

<details>
  <summary> <h3> Erwähnungstypen </h3></summary>

| Typ      | Beschreibung                         |
| -------- | ------------------------------------ |
| jeder    | `@everyone` und `@here` Erwähnungen. |
| benutzer | Alle Benutzer erwähnen.              |
| rollen   | Alle Rollen erwähnen.                |
| alle     | Alles oben aufgelistet.              |

</details>

## Beispiel(e)

Dies wird `Benutzer` zurückgeben, da Sie Benutzer sind:

```javascript
bot.command({
    name: 'mentionType',
    code: `
  $mentionType[<@$authorID>]
  `
});
```
