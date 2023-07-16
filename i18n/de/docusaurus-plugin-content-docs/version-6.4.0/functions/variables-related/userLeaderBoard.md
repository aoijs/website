---
title: $userLeaderBoard
description: '$userLeaderBoard gibt eine Rangliste einer Benutzervariablen zurück.'
id: userLeaderBoard
---

`$userLeaderBoard` gibt eine Rangliste einer Benutzervariablen zurück.

## Verwendung

```php
$userLeaderBoard[guildID;variable;order?;custom?;list?;page?;table?]
```

## Verwendung

| Feld              | Typ        | Beschreibung                                                                                                                       | Erforderlich |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID           | ganze Zahl | Gilden-ID.                                                                                                                         |     wahr     |
| variabel          | string     | Variablenname.                                                                                                                     |     wahr     |
| typ?              | string     | In welcher Reihenfolge wird es zurückgegeben <br /> 1. **asc** (aufsteigend / Standard) <br /> 2. **dsc** (absteigend) |    falsch    |
| kundenspezifisch? | string     | Formatieren.                                                                                                                       |    falsch    |
| listen?           | anzahl     | Wie viele aufgelistet werden sollen.                                                                                               |    falsch    |
| seite?            | anzahl     | Welche Seite aufzulisten.                                                                                                          |    falsch    |
| Tabelle?          | string     | Variable Tabelle.                                                                                                                  |    falsch    |

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
    name: "userLeaderBoard",
    code: `
    $userLeaderBoard[$guildID;Example;asc;{top} - {username} - {value};10;1;main]
    `
});
```
