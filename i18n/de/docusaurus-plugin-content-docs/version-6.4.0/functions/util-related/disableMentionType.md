---
title: $disableMentionType
description: '$disableMentionType wird einen bestimmten Erwähnungstyp deaktivieren.'
id: disableMentionType
---

`$disableMentionType` wird einen bestimmten Referenztyp deaktivieren.

## Verwendung

```php
$disableMentionType[type]
```

## Verwendung

| Feld | Typ    | Beschreibung                                     | Erforderlich |
| ---- | ------ | ------------------------------------------------ |:------------:|
| typ  | string | Art der Erwähnung, die Sie deaktivieren möchten. |     wahr     |

<details>
  <summary> <h2> Verfügbare Typen </h2></summary>

| Typ      | Beschreibung                                |
| -------- | ------------------------------------------- |
| jeder    | `@everyone` und `@here` Erwähnungen.        |
| benutzer | Alle Benutzer erwähnen.                     |
| rollen   | Alle Rollen erwähnen.                       |
| alle     | Rollen, Benutzer und jede andere Erwähnung. |

</details>

## Beispiel(e)

Dies wird den Bot davon abhalten, dich zu erwähnen:

```javascript
bot.command({
    name: 'mention',
    code: `
<@$authorID>
$disableMentionType[users] 
  `
});
```

Dies wird den Bot davon abhalten, jemanden oder irgendetwas zu erwähnen:

```javascript
bot.command({
    name: 'mention',
    code: `
<@$authorID>
$disableMentionType[all] 
  `
});
```
