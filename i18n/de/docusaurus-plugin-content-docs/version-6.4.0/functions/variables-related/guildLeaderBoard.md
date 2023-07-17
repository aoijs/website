---
title: $guildLeaderBoard
description: '$guildLeaderboard gibt eine Rangliste einer Gildenvariablen zurück.'
id: guildLeaderBoard
---

`$guildLeaderboard` gibt eine Rangliste einer Gildenvariablen zurück.

## Verwendung

```php
$guildLeaderboard[variable;type?;custom?;list?;page?;table?]
```

## Verwendung

| Feld              | Typ    | Beschreibung                                                                                                                       | Erforderlich |
| ----------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| variabel          | string | Variablenname.                                                                                                                     |     wahr     |
| typ               | string | In welcher Reihenfolge wird es zurückgegeben <br /> 1. **asc** (aufsteigend / Standard) <br /> 2. **dsc** (absteigend) |    falsch    |
| kundenspezifisch? | string | Formatieren.                                                                                                                       |    falsch    |
| listen?           | anzahl | Wie viele aufgelistet werden sollen.                                                                                               |    falsch    |
| seite?            | anzahl | Welche Seite aufzulisten.                                                                                                          |    falsch    |
| Tabelle?          | string | Variable Tabelle.                                                                                                                  |    falsch    |

| Optionen    | Retouren           |                                             |
| ----------- | ------------------ | ------------------------------------------- |
| **{top}**   | anzahl             | Gibt die Benutzerposition der Gilde zurück. |
| **{name}**  | string             | Gibt den Benutzernamen zurück.              |
| **{id}**    | ganze Zahl         | Gibt die Gilden-ID zurück.                  |
| **{value}** | nummer, ganze Zahl | Gibt den Variablenwert zurück.              |

## Beispiel(e)

Dies gibt eine Rangliste der "Beispiel"-Variable zurück:

```javascript
bot.command({
    name: "guildLeaderboard",
    code: `
    $guildLeaderboard[Example;asc;{top} - {name} - {value};10;1;main]
    `
});
```
