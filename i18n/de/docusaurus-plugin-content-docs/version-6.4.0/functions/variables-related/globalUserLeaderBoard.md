---
title: '$globalUserLeaderBoard'
description: '$globalUserLeaderBoard gibt eine Rangliste einer globalen Benutzervariablen zurück.'
id: globalUserLeaderBoard
---

`$globalUserLeaderBoard` gibt eine Rangliste einer globalen Benutzervariablen zurück.

## Verwendung

```php
$globalUserLeaderBoard[variable;type?;custom?;list?;page?;table?]
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

| Optionen       | Retouren           |                                                      |
| -------------- | ------------------ | ---------------------------------------------------- |
| **{top}**      | anzahl             | Gibt die Position des Benutzers zurück.              |
| **{username}** | string             | Gibt den Benutzernamen zurück.                       |
| **{tag}**      | string             | Gibt den Benutzernamen und den Diskriminator zurück. |
| **{id}**       | ganze Zahl         | Gibt die Benutzer-ID zurück.                         |
| **{value}**    | nummer, ganze Zahl | Gibt den Variablenwert zurück.                       |

## Beispiel(e)

Dies gibt eine Rangliste der "Beispiel"-Variable zurück:

```javascript
bot.command({
    name: "globalUserLeaderBoard",
    code: `
    $globalUserLeaderBoard[Example;asc;{top} - {username} - {value};10;1;main]
    `
});
```